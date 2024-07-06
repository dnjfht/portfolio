// modal open state 전역 관리

import { atom } from "recoil";

export const isCategoryOpenState = atom<boolean>({
  key: "isCategoryOpenState",
  default: false,
});
