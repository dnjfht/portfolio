import { useLayoutEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/Footer";
import TransitionsModal from "../component/modal/TransitionsModal";
import Category from "../component/category/Category";

export default function Root() {
  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    }
  }, []);

  return (
    <div className="bg-light-background-1 dark:bg-[url('./assets/images/bg.png')] text-light-text dark:text-dark-text w-full bg-cover bg-no-repeat h-screen font-thin text-white whitespace-pre-wrap">
      <ScrollRestoration />
      <Header />

      <div className="box-border w-full overflow-y-scroll lg:overflow-hidden lg:pt-[150px] pt-28 lg:h-full h-smContentHeight">
        <Outlet />
      </div>

      <Footer />
      <TransitionsModal />
      <Category />
    </div>
  );
}
