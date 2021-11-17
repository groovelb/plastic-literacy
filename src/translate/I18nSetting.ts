import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources.json";

/**
 * 사용법:
 * boot.tsx 등에서
 * `import './i18n';`
 * 라고 선언하면 된다.
 */

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "kr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;