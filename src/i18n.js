import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Para carregar arquivos de tradução
  .use(LanguageDetector) // Para detectar o idioma do navegador
  .use(initReactI18next) // Para integrar com React
  .init({
    fallbackLng: "en", // Idioma padrão
    supportedLngs: ["en", "pt", "es", "fr"], // Idiomas suportados
    interpolation: {
      escapeValue: false, // React já faz a proteção contra XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Caminho para os arquivos de tradução
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
