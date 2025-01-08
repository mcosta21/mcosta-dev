import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/Home/Home.page";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicy.page";

import "./i18n";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import KLoadingPage from "./components/KLoadingPage/KLoadingPage";

function App() {
  const { i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return <KLoadingPage />;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<PrivacyPolicyPage />} path="/privacy-policy" />
      </Routes>
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default App;
