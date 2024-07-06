// modal open state 전역 관리

import { atom } from "recoil";

export const ismodalOpenState = atom<boolean>({
  key: "isModalOpenState",
  default: false,
});
