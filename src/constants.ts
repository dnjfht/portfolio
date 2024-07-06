import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { PiEnvelopeSimpleOpenThin, PiMoonStarsThin } from "react-icons/pi";
import { CiLight, CiMail } from "react-icons/ci";
import { CgMenuMotion } from "react-icons/cg";

export const snsItems = [
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

const gnbItems = [
  {
    icon: isDarkMode ? <PiMoonStarsThin /> : <CiLight />,
    onClick: toggleTheme,
    fontSize: "text-[0.9rem] lg:text-[1.1rem]",
    style: "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
  },
  {
    icon: isModalOpen ? <PiEnvelopeSimpleOpenThin /> : <CiMail />,
    onClick: () => setIsModalOpen(true),
    fontSize: "text-[0.9rem] lg:text-[1.1rem]",
    style: "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
  },
  {
    icon: <CgMenuMotion />,
    onClick: () => setIsCategoryOpen(true),
    fontSize: "text-[0.9rem] lg:text-[1.1rem]",
    style: "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
  },
];
