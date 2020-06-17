const locales = {
  en: "en-US",
  sv: "sv-SE",
};

export const saveLocale = (lang) => {
  if (lang) {
    return localStorage.setItem("locale", locales[lang]);
  }
  return localStorage.setItem("locale", "en-US");
};

export const getLocale = () => {
  let langCode = localStorage.getItem("locale");
  if (langCode === locales.sv || langCode === locales.en) {
    return langCode;
  }
  return "en-US";
};
