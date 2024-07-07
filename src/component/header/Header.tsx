import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isDarkModeState } from "../../recoil/darkMode";
import GnbMenu from "./GnbMenu";
import SnsMenu from "./SnsMenu";

export default function Header() {
  const navigate = useNavigate();

  const setIsDarkMode = useSetRecoilState(isDarkModeState);

  const [currentScreenSize, setCurrentScreenSize] = useState<string>("");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      setIsDarkMode(html.classList.contains("dark"));
    }
  }, []);

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
    <div className="box-border fixed top-0 left-0 flex w-full py-6 bg-light-background dark:bg-[url('./assets/images/bg.png')] lg:py-10 lg:shadow-none shadow-[0_0_32px_-16px_rgba(0,0,0,0.5)] z-[99]">
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

        <SnsMenu hiddenStyle={isSnsMenuHidden} hideDefaultItems={false} />
      </div>

      <div className="box-border w-1/3 px-[10%] md:px-[6rem] flex justify-end">
        <GnbMenu hideDefaultItems={false} />
      </div>
    </div>
  );
}
