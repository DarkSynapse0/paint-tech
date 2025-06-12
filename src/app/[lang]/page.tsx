"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="gap-20 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold">{t("greeting")}</h1>

      {/* switch lang using single btn */}
      <button
        onClick={() => {
          const newLanguage = currentLanguage === "en" ? "ar" : "en";
          i18n.changeLanguage(newLanguage);
        }}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors cursor-pointer"
      >
        {currentLanguage === "en" ? t("Switch To Arabic") : t("Switch To English")}
      </button>

     </div>
  );
}
