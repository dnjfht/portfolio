import { useLayoutEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/Footer";
import TransitionsModal from "../component/modal/TransitionsModal";
import Category from "../component/category/Category";

export default function Root() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    }
  }, []);

  return (
    <div className="bg-light-background-1 dark:bg-[url('./assets/images/bg.png')] text-light-text dark:text-dark-text w-full bg-cover bg-no-repeat h-screen font-thin text-white">
      <ScrollRestoration />
      <Header setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

      <div className="box-border w-full lg:pt-64 pt-44 pb-6 lg:h-full h-smContentHeight px-[10%] md:px-[6rem] overflow-y-scroll">
        <Outlet />
      </div>

      <Footer />
      <TransitionsModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <Category />
    </div>
  );
}
