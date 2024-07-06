import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isCategoryOpenState } from "../../recoil/modal";
import CategoryMenu from "./CategoryMenu";

export default function CategoryMenuWrap() {
  const navigate = useNavigate();

  const setIsCategoryOpen = useSetRecoilState(isCategoryOpenState);

  const categoryItems = [
    {
      text: "HOME",
      fontSize: "md:text-[4rem] text-[2.25rem]",
      fontWeight: "font-bold",
      onClick: () => {
        navigate("/");
        setIsCategoryOpen(false);
      },
    },
    {
      text: "ABOUT",
      fontSize: "md:text-[4rem] text-[2.25rem]",
      fontWeight: "font-bold",
      onClick: () => {
        navigate("/about");
        setIsCategoryOpen(false);
      },
    },
  ];

  const categoryDetailItems = [
    {
      text: "코드를 통하여 소통하는 개발자,\n Yoo Seungmin.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3 mb-5 whitespace-pre-line",
    },
    {
      text: "제 전화번호는,\n 010-5220-2817 입니다.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3 mb-5 whitespace-pre-line",
    },
    {
      text: "제 github 주소는,\n https://github.com/dnjfht 입니다.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3 mb-5 whitespace-pre-line",
    },
    {
      text: "제 tistory 주소는,\n https://dnjfht.tistory.com 입니다.",
      fontSize: "text-[0.875rem] md:text-[1rem]",
      style: "text-text-2 dark:text-text-3 whitespace-pre-line",
    },
  ];

  return (
    <div className="w-full pt-10 overflow-scroll md:flex md:items-center lg:pt-20 lg:h-categoryMenuHeight">
      <CategoryMenu items={categoryItems} style="md:w-1/2 w-full" />
      <CategoryMenu
        items={categoryDetailItems}
        style="md:w-1/2 w-full pt-20 md:pt-0 box-border md:text-right"
      />
    </div>
  );
}
