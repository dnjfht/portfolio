// 프로젝트에서 공통으로 사용하는 변수들을 모아둔 곳. 가독성.

// 여러 곳에서 경로를 수정할 필요 없이 한 곳에서 경로를 쉽게 수정 가능.
export enum AppPage {
  HOME = "/",
  ABOUT = "/about",
  PORTFOLIO = "/portfolio",
  CONTACT = "/contact",
}
