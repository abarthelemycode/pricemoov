import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import common_fr from "./fr/common.json";
import common_en from "./en/common.json";

i18n.use(detector)
    .use(initReactI18next)
    .init({
      resources: {
        en:{
          common: common_en
        },
        fr:{
          common: common_fr
        }
      },
      detection: {
        order: ['customDetector', 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag']
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    })

export default i18n
