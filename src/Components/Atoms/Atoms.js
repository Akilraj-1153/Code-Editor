import { atom } from "recoil";

export const Navstate = atom({
  key: "Navstate",
  default: false,
});

export const activeLanguage = atom({
  key: "activeLanguage",
  default: 'HTML,CSS,JS',
});

