// dark Mode state 전역 관리

import { atom } from "recoil";

export const isDarkModeState = atom<boolean>({
  key: "isDarkModeState",
  default: false,
});
