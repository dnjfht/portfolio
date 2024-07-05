// import { SNS_ITEMS } from "../../constants";
import { useEffect, useState } from "react";
import GnbMenu from "./GnbMenu";
import SnsMenu from "./SnsMenu";

import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";
import { PiEnvelopeSimpleOpenThin, PiMoonStarsThin } from "react-icons/pi";
import { CiLight, CiMail } from "react-icons/ci";
import { CgMenuMotion } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  setIsCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}

export default function Header({
  setIsCategoryOpen,
  setIsModalOpen,
  isModalOpen,
}: HeaderProps) {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [currentScreenSize, setCurrentScreenSize] = useState<string>("");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      setIsDarkMode(html.classList.contains("dark"));
    }
  }, []);

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

  const gnbItems = [
    {
      icon: isDarkMode ? <PiMoonStarsThin /> : <CiLight />,
      onClick: toggleTheme,
      fontSize: "text-[0.9rem] lg:text-[1.1rem]",
      style:
        "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
    },
    {
      icon: isModalOpen ? <PiEnvelopeSimpleOpenThin /> : <CiMail />,
      onClick: () => setIsModalOpen(true),
      fontSize: "text-[0.9rem] lg:text-[1.1rem]",
      style:
        "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
    },
    {
      icon: <CgMenuMotion />,
      onClick: () => setIsCategoryOpen(true),
      fontSize: "text-[0.9rem] lg:text-[1.1rem]",
      style:
        "p-2 lg:p-3 border-[1px] border-solid border-[#696969] rounded-full",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setCurrentScreenSize("2xl");
      } else if (window.innerWidth >= 1280) {
        setCurrentScreenSize("xl");
      } else if (window.innerWidth >= 1024) {
        setCurrentScreenSize("lg");
      } else if (window.innerWidth >= 768) {
        setCurrentScreenSize("md");
      } else {
        setCurrentScreenSize("sm");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSnsMenuHidden =
    currentScreenSize === "md" || currentScreenSize === "sm"
      ? "hidden"
      : "block";

  return (
    <div className="box-border fixed top-0 left-0 flex w-full py-6 bg-light-background dark:bg-[url('./assets/images/bg.png')] lg:py-16 lg:shadow-none shadow-[0_0_32px_-16px_rgba(0,0,0,0.5)]">
      <div className="box-border w-2/3 px-[10%] lg:px-[6rem] flex justify-between">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-[1.2rem] lg:text-[1.5rem] hover:text-[#1ff4a6] transition-color duration-500 cursor-pointer"
        >
          YOO
          <br />
          SEUNGMIN
        </div>

        <SnsMenu items={snsItems} hiddenStyle={isSnsMenuHidden} />
      </div>

      <div className="box-border w-1/3 px-[10%] md:px-[6rem] flex justify-end">
        <GnbMenu items={gnbItems} />
      </div>
    </div>
  );
}
