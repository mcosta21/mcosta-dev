import { useTranslation } from "react-i18next";
import "./PrivacyPolicy.scss";

import PolicyPrivacyPortuguese from "./locales/Portuguese";
import PolicyPrivacyEnglish from "./locales/English";
import PolicyPrivacySpanish from "./locales/Spanish";
import PolicyPrivacyFrench from "./locales/French";

import DefaultLayout from "@/layouts/default";

export default function PrivacyPolicyPage() {
  const { i18n } = useTranslation();

  return (
    <DefaultLayout>
      <main className="privacy-policy-page">{render(i18n.language)}</main>
    </DefaultLayout>
  );
}

function render(language: string) {
  switch (language) {
    case "pt":
      return <PolicyPrivacyPortuguese />;
    case "es":
      return <PolicyPrivacySpanish />;
    case "fr":
      return <PolicyPrivacyFrench />;
    default:
      return <PolicyPrivacyEnglish />;
  }
}
