import { Navigate } from "@/lib/router";
import { useLang } from "@/contexts/LanguageContext";

// 규사분말 응용분야는 규사와 통합되었습니다. 규사 응용분야 페이지로 리다이렉트합니다.
const SilicaPowderApplications = () => {
  const { lang } = useLang();
  return <Navigate to={`/${lang}/applications/silica-sand/`} replace />;
};

export default SilicaPowderApplications;
