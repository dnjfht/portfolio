// screen size 전역 관리

import { atom } from "recoil";

export const currentScreenSizeState = atom<string>({
  key: "currentScreenSizeState",
  default: "",
});
