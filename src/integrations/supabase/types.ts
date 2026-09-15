export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      account_contacts: {
        Row: {
          account_id: string
          created_at: string
          email: string | null
          id: string
          memo: string | null
          name: string
          phone: string | null
          position: string | null
          updated_at: string
        }
        Insert: {
          account_id: string
          created_at?: string
          email?: string | null
          id?: string
          memo?: string | null
          name?: string
          phone?: string | null
          position?: string | null
          updated_at?: string
        }
        Update: {
          account_id?: string
          created_at?: string
          email?: string | null
          id?: string
          memo?: string | null
          name?: string
          phone?: string | null
          position?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_contacts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      account_notes: {
        Row: {
          account_id: string
          body: string
          created_at: string
          id: string
          note_date: string
          updated_at: string
        }
        Insert: {
          account_id: string
          body?: string
          created_at?: string
          id?: string
          note_date?: string
          updated_at?: string
        }
        Update: {
          account_id?: string
          body?: string
          created_at?: string
          id?: string
          note_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_notes_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      accounts: {
        Row: {
          account_type: string
          address: string | null
          biz_item: string | null
          biz_no: string | null
          biz_type: string | null
          ceo_name: string | null
          channel: string
          company_name: string
          country: string | null
          created_at: string
          email: string | null
          id: string
          memo: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          account_type?: string
          address?: string | null
          biz_item?: string | null
          biz_no?: string | null
          biz_type?: string | null
          ceo_name?: string | null
          channel?: string
          company_name?: string
          country?: string | null
          created_at?: string
          email?: string | null
          id?: string
          memo?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          account_type?: string
          address?: string | null
          biz_item?: string | null
          biz_no?: string | null
          biz_type?: string | null
          ceo_name?: string | null
          channel?: string
          company_name?: string
          country?: string | null
          created_at?: string
          email?: string | null
          id?: string
          memo?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email?: string
          status?: string
          template_name?: string
        }
        Relationships: []
      }
      email_send_state: {
        Row: {
          auth_email_ttl_minutes: number
          batch_size: number
          id: number
          retry_after_until: string | null
          send_delay_ms: number
          transactional_email_ttl_minutes: number
          updated_at: string
        }
        Insert: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Update: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      email_unsubscribe_tokens: {
        Row: {
          created_at: string
          email: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      inquiries: {
        Row: {
          account_id: string | null
          admin_note: string | null
          channel: string
          company: string | null
          created_at: string
          email: string | null
          id: string
          message: string
          name: string
          phone: string | null
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          account_id?: string | null
          admin_note?: string | null
          channel?: string
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          message?: string
          name?: string
          phone?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          account_id?: string | null
          admin_note?: string | null
          channel?: string
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          message?: string
          name?: string
          phone?: string | null
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "inquiries_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      post_translations: {
        Row: {
          content: string
          created_at: string
          id: string
          lang: string
          post_id: string
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          lang: string
          post_id: string
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          lang?: string
          post_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_translations_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          author_name: string
          content: string
          created_at: string
          id: string
          is_public: boolean
          password_hash: string
          title: string
          updated_at: string
          views: number
        }
        Insert: {
          author_name?: string
          content: string
          created_at?: string
          id?: string
          is_public?: boolean
          password_hash: string
          title: string
          updated_at?: string
          views?: number
        }
        Update: {
          author_name?: string
          content?: string
          created_at?: string
          id?: string
          is_public?: boolean
          password_hash?: string
          title?: string
          updated_at?: string
          views?: number
        }
        Relationships: []
      }
      purchase_payments: {
        Row: {
          amount: number
          bank_account: string | null
          created_at: string
          id: string
          memo: string | null
          paid_date: string
          voucher_id: string
        }
        Insert: {
          amount?: number
          bank_account?: string | null
          created_at?: string
          id?: string
          memo?: string | null
          paid_date?: string
          voucher_id: string
        }
        Update: {
          amount?: number
          bank_account?: string | null
          created_at?: string
          id?: string
          memo?: string | null
          paid_date?: string
          voucher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_payments_voucher_id_fkey"
            columns: ["voucher_id"]
            isOneToOne: false
            referencedRelation: "purchase_vouchers"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_vouchers: {
        Row: {
          account_id: string | null
          amount_foreign: number
          amount_krw: number
          channel: string
          cost_type: string
          created_at: string
          currency: string
          description: string | null
          evidence_status: string
          fx_rate: number
          id: string
          memo: string | null
          pay_status: string
          total_krw: number
          updated_at: string
          vat_amount: number
          voucher_date: string
        }
        Insert: {
          account_id?: string | null
          amount_foreign?: number
          amount_krw?: number
          channel?: string
          cost_type?: string
          created_at?: string
          currency?: string
          description?: string | null
          evidence_status?: string
          fx_rate?: number
          id?: string
          memo?: string | null
          pay_status?: string
          total_krw?: number
          updated_at?: string
          vat_amount?: number
          voucher_date?: string
        }
        Update: {
          account_id?: string | null
          amount_foreign?: number
          amount_krw?: number
          channel?: string
          cost_type?: string
          created_at?: string
          currency?: string
          description?: string | null
          evidence_status?: string
          fx_rate?: number
          id?: string
          memo?: string | null
          pay_status?: string
          total_krw?: number
          updated_at?: string
          vat_amount?: number
          voucher_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_vouchers_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      quote_items: {
        Row: {
          amount: number
          created_at: string
          id: string
          item_name: string
          qty: number
          quote_id: string
          sort_order: number
          spec: string | null
          unit: string
          unit_price: number
        }
        Insert: {
          amount?: number
          created_at?: string
          id?: string
          item_name?: string
          qty?: number
          quote_id: string
          sort_order?: number
          spec?: string | null
          unit?: string
          unit_price?: number
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          item_name?: string
          qty?: number
          quote_id?: string
          sort_order?: number
          spec?: string | null
          unit?: string
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "quote_items_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          },
        ]
      }
      quotes: {
        Row: {
          account_id: string | null
          bank_account: string | null
          bank_holder: string | null
          bank_name: string | null
          buyer_company: string | null
          buyer_contact: string | null
          buyer_email: string | null
          buyer_phone: string | null
          channel: string
          created_at: string
          currency: string
          delivery_terms: string | null
          fx_rate: number
          id: string
          inquiry_id: string | null
          issuer: string
          lang: string
          order_confirmed_at: string | null
          quote_date: string
          quote_no: string
          remarks: string | null
          seller_address: string | null
          seller_ceo: string | null
          seller_company: string | null
          seller_contact: string | null
          seller_email: string | null
          shipped_at: string | null
          status: string
          subtotal: number
          total_amount: number
          updated_at: string
          valid_days: number
          vat_amount: number
          vat_rate: number
        }
        Insert: {
          account_id?: string | null
          bank_account?: string | null
          bank_holder?: string | null
          bank_name?: string | null
          buyer_company?: string | null
          buyer_contact?: string | null
          buyer_email?: string | null
          buyer_phone?: string | null
          channel?: string
          created_at?: string
          currency?: string
          delivery_terms?: string | null
          fx_rate?: number
          id?: string
          inquiry_id?: string | null
          issuer?: string
          lang?: string
          order_confirmed_at?: string | null
          quote_date?: string
          quote_no: string
          remarks?: string | null
          seller_address?: string | null
          seller_ceo?: string | null
          seller_company?: string | null
          seller_contact?: string | null
          seller_email?: string | null
          shipped_at?: string | null
          status?: string
          subtotal?: number
          total_amount?: number
          updated_at?: string
          valid_days?: number
          vat_amount?: number
          vat_rate?: number
        }
        Update: {
          account_id?: string | null
          bank_account?: string | null
          bank_holder?: string | null
          bank_name?: string | null
          buyer_company?: string | null
          buyer_contact?: string | null
          buyer_email?: string | null
          buyer_phone?: string | null
          channel?: string
          created_at?: string
          currency?: string
          delivery_terms?: string | null
          fx_rate?: number
          id?: string
          inquiry_id?: string | null
          issuer?: string
          lang?: string
          order_confirmed_at?: string | null
          quote_date?: string
          quote_no?: string
          remarks?: string | null
          seller_address?: string | null
          seller_ceo?: string | null
          seller_company?: string | null
          seller_contact?: string | null
          seller_email?: string | null
          shipped_at?: string | null
          status?: string
          subtotal?: number
          total_amount?: number
          updated_at?: string
          valid_days?: number
          vat_amount?: number
          vat_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "quotes_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotes_inquiry_id_fkey"
            columns: ["inquiry_id"]
            isOneToOne: false
            referencedRelation: "inquiries"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_receipts: {
        Row: {
          amount: number
          bank_account: string | null
          created_at: string
          id: string
          memo: string | null
          paid_date: string
          voucher_id: string
        }
        Insert: {
          amount?: number
          bank_account?: string | null
          created_at?: string
          id?: string
          memo?: string | null
          paid_date?: string
          voucher_id: string
        }
        Update: {
          amount?: number
          bank_account?: string | null
          created_at?: string
          id?: string
          memo?: string | null
          paid_date?: string
          voucher_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_receipts_voucher_id_fkey"
            columns: ["voucher_id"]
            isOneToOne: false
            referencedRelation: "sales_vouchers"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_vouchers: {
        Row: {
          account_id: string | null
          amount_foreign: number
          amount_krw: number
          channel: string
          created_at: string
          currency: string
          delivery_date: string | null
          description: string | null
          fx_rate: number
          id: string
          memo: string | null
          quote_id: string | null
          receipt_status: string
          tax_invoice_issued_at: string | null
          tax_invoice_requested_at: string | null
          tax_invoice_status: string
          total_krw: number
          transaction_no: string | null
          updated_at: string
          vat_amount: number
          voucher_date: string
        }
        Insert: {
          account_id?: string | null
          amount_foreign?: number
          amount_krw?: number
          channel?: string
          created_at?: string
          currency?: string
          delivery_date?: string | null
          description?: string | null
          fx_rate?: number
          id?: string
          memo?: string | null
          quote_id?: string | null
          receipt_status?: string
          tax_invoice_issued_at?: string | null
          tax_invoice_requested_at?: string | null
          tax_invoice_status?: string
          total_krw?: number
          transaction_no?: string | null
          updated_at?: string
          vat_amount?: number
          voucher_date?: string
        }
        Update: {
          account_id?: string | null
          amount_foreign?: number
          amount_krw?: number
          channel?: string
          created_at?: string
          currency?: string
          delivery_date?: string | null
          description?: string | null
          fx_rate?: number
          id?: string
          memo?: string | null
          quote_id?: string | null
          receipt_status?: string
          tax_invoice_issued_at?: string | null
          tax_invoice_requested_at?: string | null
          tax_invoice_status?: string
          total_krw?: number
          transaction_no?: string | null
          updated_at?: string
          vat_amount?: number
          voucher_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_vouchers_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_vouchers_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          },
        ]
      }
      samples: {
        Row: {
          account_id: string | null
          carrier: string | null
          channel: string
          created_at: string
          feedback: string | null
          id: string
          item_name: string
          qty: number
          sent_date: string | null
          test_status: string
          tracking_no: string | null
          unit: string
          updated_at: string
        }
        Insert: {
          account_id?: string | null
          carrier?: string | null
          channel?: string
          created_at?: string
          feedback?: string | null
          id?: string
          item_name?: string
          qty?: number
          sent_date?: string | null
          test_status?: string
          tracking_no?: string | null
          unit?: string
          updated_at?: string
        }
        Update: {
          account_id?: string | null
          carrier?: string | null
          channel?: string
          created_at?: string
          feedback?: string | null
          id?: string
          item_name?: string
          qty?: number
          sent_date?: string | null
          test_status?: string
          tracking_no?: string | null
          unit?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "samples_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      suppressed_emails: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          reason: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          reason: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          reason?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_email: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      delete_post_with_password: {
        Args: { _password: string; _post_id: string }
        Returns: boolean
      }
      email_queue_dispatch: { Args: never; Returns: undefined }
      enqueue_email: {
        Args: { payload: Json; queue_name: string }
        Returns: number
      }
      get_post_content: {
        Args: { _password: string; _post_id: string }
        Returns: string
      }
      increment_post_views: { Args: { _post_id: string }; Returns: undefined }
      move_to_dlq: {
        Args: {
          dlq_name: string
          message_id: number
          payload: Json
          source_queue: string
        }
        Returns: number
      }
      read_email_batch: {
        Args: { batch_size: number; queue_name: string; vt: number }
        Returns: {
          message: Json
          msg_id: number
          read_ct: number
        }[]
      }
      verify_post_password: {
        Args: { _password: string; _post_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
