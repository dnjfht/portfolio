import { useRecoilValue } from "recoil";
import { isCategoryOpenState } from "../../recoil/category";
import SnsMenu from "../header/SnsMenu";
import GnbMenu from "../header/GnbMenu";
import CategoryMenuWrap from "./CategoryMenuWrap";

export default function Category() {
  const isCategoryOpen = useRecoilValue(isCategoryOpenState);

  return (
    <div
      className={`${
        isCategoryOpen ? "right-0" : "right-[-100%]"
      } fixed top-0 w-full h-screen bg-light-background dark:bg-[url('./assets/images/bg.png')] transition-all duration-700 overflow-y-scroll flex lg:flex-row flex-col`}
    >
      <div className="order-2 w-full h-full lg:w-1/3 lg:order-1">
        <img
          className="object-cover h-full"
          src={process.env.PUBLIC_URL + "/images/category_img.png"}
          alt="category_img"
        />
      </div>

      <div className="order-1 w-full lg:h-full lg:w-2/3 lg:order-2 px-[10%] lg:px-[6rem] py-10 lg:py-20 box-border">
        <div className="flex w-full box-border justify-between lg:shadow-none shadow-[0_0_32px_-16px_rgba(0,0,0,0.5)]">
          <SnsMenu hideDefaultItems={false} />
          <GnbMenu hideDefaultItems={false} />
        </div>

        <CategoryMenuWrap />
      </div>
    </div>
  );
}
