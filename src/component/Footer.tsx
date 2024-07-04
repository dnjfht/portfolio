import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import SnsMenu from "./header/SnsMenu";

export default function Footer() {
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
    <div className="flex justify-center items-center w-full h-[80px] lg:hidden border-t-[1px] border-solid border-[rgba(255,255,255,0.2)] shadow-[0_0_32px_-16px_rgba(0,0,0,0.5)]">
      <SnsMenu items={snsItems} />
    </div>
  );
}
