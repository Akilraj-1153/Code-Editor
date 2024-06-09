import { atom } from "recoil";

export const Navstate = atom({
  key: "Navstate",
  default: false,
});

export const activeLanguage = atom({
  key: "activeLanguage",
  default: "HTML  CSS  JS",
});

export const activeTheme = atom({
  key: "activeTheme",
  default: "ambiance",
});

export const codeToServer = atom({
  key: "codeToServer",
  default: null,
});

export const versionToServer = atom({
  key: "versionToServer",
  default: null,
});

export const languageToServer = atom({
  key: "languageToServer",
  default: ``,
});

