import { useRecoilState } from "recoil";
import { isCategoryOpenState } from "../../recoil/modal";
import SnsMenu from "../header/SnsMenu";
import IconUtil from "../header/IconUtil";
import CategoryMenuWrap from "./CategoryMenuWrap";

import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { PiHandWavingThin } from "react-icons/pi";

export default function Category() {
  const [isCategoryOpen, setIsCategoryOpen] =
    useRecoilState(isCategoryOpenState);

  const snsItems = [
    {
      link: "https://github.com/dnjfht",
      icon: <IoLogoGithub />,
      fontSize: "text-[1.4rem]",
    },
    {
      link: "https://dnjfht.tistory.com/",
      icon: <FaBlogger />,
      fontSize: "text-[1.4rem]",
    },
    {
      link: "https://www.instagram.com/ysm09_21/",
      icon: <IoLogoInstagram />,
      fontSize: "text-[1.4rem]",
    },
  ];

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
          <SnsMenu items={snsItems} />

          <IconUtil
            onClick={() => setIsCategoryOpen(false)}
            icon={<PiHandWavingThin />}
            fontSize="text-[0.9rem] lg:text-[1.1rem]"
            style="p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full"
          />
        </div>

        <CategoryMenuWrap />
      </div>
    </div>
  );
}
