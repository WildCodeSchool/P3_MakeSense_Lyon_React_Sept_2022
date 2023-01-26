/* eslint-disable prettier/prettier */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  FR: {
    translation: {
      // page connexion
      "Accédez à votre compte": "Accédez à votre compte",
      "Mot de passe": "Mot de passe",
      "Se connecter": "Se connecter",
    },
  },
  EN: {
    translation: {
      // page connexion
      "Accédez à votre compte": "Access your account",
      "Mot de passe": "Password",
      "Se connecter": "Sign in",
    },
  },
  ES: {
    translation: {
      // page connexion
      "Accédez à votre compte": "Acceder a tu cuenta",
      "Mot de passe": "Contraseña",
      "Se connecter": "Conectarse",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "FR", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
