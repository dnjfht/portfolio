import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isCategoryOpenState } from "../../recoil/category";
import CategoryMenu from "./CategoryMenu";
import { AppPage } from "../../constants";

export default function CategoryMenuWrap() {
  const navigate = useNavigate();

  const setIsCategoryOpen = useSetRecoilState(isCategoryOpenState);

  const categoryItems = [
    {
      text: "HOME",
      fontSize: "xl:text-[4rem] text-[2.5rem]",
      fontWeight: "font-bold",
      onClick: () => {
        navigate(AppPage.HOME);
        setIsCategoryOpen((prev) => !prev);
      },
      style: "xl:mb-0 mb-2",
    },
    {
      text: "ABOUT",
      fontSize: "xl:text-[4rem] text-[2.5rem]",
      fontWeight: "font-bold",
      onClick: () => {
        navigate(AppPage.ABOUT);
        setIsCategoryOpen((prev) => !prev);
      },
      style: "xl:mb-0 mb-2",
    },
    {
      text: "PORTFOLIO",
      fontSize: "xl:text-[4rem] text-[2.5rem]",
      fontWeight: "font-bold",
      onClick: () => {
        navigate(AppPage.PORTFOLIO);
        setIsCategoryOpen((prev) => !prev);
      },
      style: "xl:mb-0 mb-2",
    },
    {
      text: "CONTACT",
      fontSize: "xl:text-[4rem] text-[2.5rem]",
      fontWeight: "font-bold",
      onClick: () => {
        navigate(AppPage.CONTACT);
        setIsCategoryOpen((prev) => !prev);
      },
    },
  ];

  const categoryDetailItems = [
    {
      text: "코드를 통하여 소통하는 개발자, \n Yoo Seungmin.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3 mb-5",
    },
    {
      text: "제 전화번호는, \n 010-5220-2817 입니다.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3 mb-5",
    },
    {
      text: "제 github 주소는, \n https://github.com/dnjfht 입니다.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3 mb-5",
    },
    {
      text: "제 tistory 주소는, \n https://dnjfht.tistory.com 입니다.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3",
    },
  ];

  return (
    <div className="w-full pt-10 overflow-scroll md:flex md:items-center lg:pt-20 lg:h-categoryMenuHeight">
      <CategoryMenu items={categoryItems} style="w-full" />
      <CategoryMenu
        items={categoryDetailItems}
        style="w-full pt-20 md:pt-0 box-border md:text-right"
      />
    </div>
  );
}
