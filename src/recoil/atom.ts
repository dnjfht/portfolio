// 꼭 필요할 때만 전역상태를 사용하여 관리.

import { atom } from "recoil";

export const atomState = atom<string>({
  key: "atomnState",
  default: "",
});
