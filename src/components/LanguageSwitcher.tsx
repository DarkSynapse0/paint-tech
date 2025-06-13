import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleToggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={handleToggleLanguage}
      className=" h-10 relative overflow-hidden px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentLanguage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {currentLanguage === "en" ? "En" : "Ar"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default LanguageSwitcher;
