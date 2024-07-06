import IconUtil from "./IconUtil";

import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";

interface SnsMenuProps {
  items?: SnsMenuType[];
  hiddenStyle?: string;
  hideDefaultItems: boolean;
}

export type SnsMenuType = {
  icon: React.ReactNode;
  link: string;
  fontSize?: string;
  style?: string;
};

export default function SnsMenu({
  items,
  hiddenStyle,
  hideDefaultItems,
}: SnsMenuProps) {
  const defaultSnsItems = [
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

  const renderItems = hideDefaultItems ? items : [...defaultSnsItems];

  return (
    <ul className={`${hiddenStyle} flex items-center gap-x-6`}>
      {renderItems?.map((item) => (
        <IconUtil
          onClick={() => {
            window.open(item.link, "_blank");
          }}
          icon={item.icon}
          fontSize={item.fontSize}
        />
      ))}
    </ul>
  );
}
