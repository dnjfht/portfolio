import SnsMenu from "../header/SnsMenu";
import Util from "../header/Util";

import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { PiHandWavingThin } from "react-icons/pi";

interface CategoryProps {
  isCategoryOpen: boolean;
  setIsCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Category({
  isCategoryOpen,
  setIsCategoryOpen,
}: CategoryProps) {
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
          className="object-cover lg:h-full"
          src={process.env.PUBLIC_URL + "/images/category_img.png"}
          alt="category_img"
        />
      </div>

      <div className="order-1 w-full lg:h-full lg:w-2/3 lg:order-2">
        <div className="flex w-full box-border px-[10%] lg:px-[6rem] justify-between py-10 lg:py-20 lg:shadow-none shadow-[0_0_32px_-16px_rgba(0,0,0,0.5)]">
          <SnsMenu items={snsItems} />

          <Util
            onClick={() => setIsCategoryOpen(false)}
            icon={<PiHandWavingThin />}
            fontSize="text-[0.9rem] lg:text-[1.1rem]"
            style="p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
