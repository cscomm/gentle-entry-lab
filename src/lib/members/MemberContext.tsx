import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { isProfileComplete, memberAuth, profileFromMeta, type MemberProfile } from "./client";
import { memberApi } from "./api";

type MemberState = {
  session: Session | null;
  user: User | null;
  profile: MemberProfile | null;
  profileComplete: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
  /** Fresh access token for calls to the site's functions, or null when signed out. */
  getToken: () => Promise<string | null>;
};

const Ctx = createContext<MemberState | null>(null);

export const MemberProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = memberAuth.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setLoading(false);
    });
    memberAuth.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const refresh = useCallback(async () => {
    const { data } = await memberAuth.auth.refreshSession();
    if (data.session) setSession(data.session);
  }, []);

  const signOut = useCallback(async () => {
    await memberAuth.auth.signOut();
    setSession(null);
  }, []);

  const getToken = useCallback(async () => {
    const { data } = await memberAuth.auth.getSession();
    return data.session?.access_token ?? null;
  }, []);

  // Once per visit, copy the member's profile into the site's member list
  // (covers members who signed up before that list existed).
  const userId = session?.user?.id ?? null;
  useEffect(() => {
    if (!userId) return;
    const key = `silica-member-synced:${userId}`;
    try {
      if (sessionStorage.getItem(key)) return;
    } catch {
      /* ignore */
    }
    getToken().then((token) => {
      if (!token) return;
      memberApi("sync_profile", token)
        .then(() => {
          try {
            sessionStorage.setItem(key, "1");
          } catch {
            /* ignore */
          }
        })
        .catch(() => {
          /* retried on the next visit or profile save */
        });
    });
  }, [userId, getToken]);

  const value = useMemo<MemberState>(() => {
    const user = session?.user ?? null;
    const profile = user ? profileFromMeta(user.user_metadata) : null;
    return {
      session,
      user,
      profile,
      profileComplete: profile ? isProfileComplete(profile, user?.email ?? null) : false,
      loading,
      signOut,
      refresh,
      getToken,
    };
  }, [session, loading, signOut, refresh, getToken]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useMember = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useMember must be used inside MemberProvider");
  return v;
};
