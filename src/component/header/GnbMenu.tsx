import IconUtil from "./IconUtil";
import { useRecoilState } from "recoil";
import { isCategoryOpenState } from "../../recoil/category";
import { isDarkModeState } from "../../recoil/darkMode";
import { ismodalOpenState } from "../../recoil/modal";

import {
  PiEnvelopeSimpleOpenThin,
  PiMoonStarsThin,
  PiHandWavingThin,
} from "react-icons/pi";
import { CiLight, CiMail } from "react-icons/ci";
import { CgMenuMotion } from "react-icons/cg";

interface GnbMenuProps {
  items?: GnbMenuType[];
  hideDefaultItems: boolean;
}

export type GnbMenuType = {
  icon: React.ReactNode;
  onClick: () => void;
  fontSize?: string;
  style?: string;
};

export default function GnbMenu({ items, hideDefaultItems }: GnbMenuProps) {
  const [isCategoryOpen, setIsCategoryOpen] =
    useRecoilState(isCategoryOpenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(ismodalOpenState);
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);

  const toggleTheme = () => {
    const htmlEl = document.querySelector("html");
    if (!htmlEl) return;

    const enabledDarkMode = htmlEl.classList.contains("dark");
    if (enabledDarkMode) {
      htmlEl.classList.remove("dark");
      localStorage.removeItem("theme");
      setIsDarkMode(false);
    } else {
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const defaultGnbItems = [
    {
      icon: isDarkMode ? <PiMoonStarsThin /> : <CiLight />,
      onClick: toggleTheme,
      fontSize: "text-[0.9rem] lg:text-[1.1rem]",
      style:
        "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
    },
    {
      icon: isModalOpen ? <PiEnvelopeSimpleOpenThin /> : <CiMail />,
      onClick: () => setIsModalOpen((prev) => !prev),
      fontSize: "text-[0.9rem] lg:text-[1.1rem]",
      style:
        "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
    },
    {
      icon: isCategoryOpen ? <PiHandWavingThin /> : <CgMenuMotion />,
      onClick: () => setIsCategoryOpen((prev) => !prev),
      fontSize: "text-[0.9rem] lg:text-[1.1rem]",
      style:
        "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
    },
  ];

  const renderItems = hideDefaultItems ? items : [...defaultGnbItems];

  return (
    <ul className="flex items-center gap-x-3">
      {renderItems?.map((item, idx) => (
        <IconUtil
          key={idx}
          onClick={item.onClick}
          icon={item.icon}
          fontSize={item.fontSize}
          styles={item.style}
        />
      ))}
    </ul>
  );
}
