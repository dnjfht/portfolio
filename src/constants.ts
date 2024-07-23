// 프로젝트에서 공통으로 사용하는 변수들을 모아둔 곳. 가독성.

// 여러 곳에서 경로를 수정할 필요 없이 한 곳에서 경로를 쉽게 수정 가능.
export enum AppPage {
  HOME = "/",
  ABOUT = "/about",
  PORTFOLIO = "/portfolio",
  CONTACT = "/contact",
}

export const portfolioData = [
  {
    id: "266d51fb-34f9-4666-b28e-da278353ef89",
    img: "/images/portfolio/1-1.png",
    title: "PPPET 엔터테이먼트 외주 프로젝트",
    des: "댕BTI / 반려가족 궁합 검사 / 강아지 스마트 건강검진 테스트를 개발하는 펫펫펫 엔터테인먼트 프로젝트에 프론트 개발자로 참여하였습니다.",
  },
  {
    id: "020c249d-1aa1-4599-8c0a-207053c67f3e",
    img: "/images/portfolio/2-1.png",
    title: "BE:BEAM 웹사이트 외주 프로젝트",
    des: "툴킷 다운로드 기능 및 모임 커뮤니티 기능이 담긴 BE:BEAM 웹사이트 개발 프로젝트. 비영리단체 더이상을 통하여 진행하는 외주 프로젝트이며, 프론트 개발자로 참여하였습니다.",
  },
  {
    id: "60ab30c7-da34-4b00-96ca-1fe55549e96a",
    img: "/images/portfolio/3-1.png",
    title: "Spotify를 응용한 MUWITH 프로젝트",
    des: "Youtube API와 Spotify API를 결합하여 만든 플레이리스트 프로젝트. 프론트 개발자로 참여하였습니다.",
  },
  {
    id: "f715d69e-0878-4867-b7f0-ef83403f3f38",
    img: "/images/portfolio/4-1.png",
    title: "개인 쇼핑몰 프로젝트",
    des: "개인 쇼핑몰 사이트 제작 프로젝트로, 프론트 개발자로 참여하였습니다. 서버는 firebase-firestore를 사용하였습니다.",
  },
];
