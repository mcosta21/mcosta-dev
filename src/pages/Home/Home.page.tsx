import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import MainSection from "./sections/MainSection/MainSection";
import ServicesSection from "./sections/ServicesSection/ProjectsSection";
import SideProjectsSections from "./sections/ServicesSection/SideProjectsSections";

import DefaultLayout from "@/layouts/default";

export default function HomePage() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const language = queryParams.get("l");

    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <DefaultLayout>
      <MainSection />
      <ServicesSection />
      <SideProjectsSections />
    </DefaultLayout>
  );
}
