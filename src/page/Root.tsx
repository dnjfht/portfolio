import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/Footer";
import { useLayoutEffect } from "react";
import TransitionsModal from "../modal/TransitionsModal";

export default function Root() {
  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    }
  }, []);

  return (
    <div className="bg-light-background-1 dark:bg-[url('./assets/images/bg.png')] text-text-light dark:text-dark-text-1 w-full bg-cover bg-no-repeat h-screen font-thin text-white">
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
      <TransitionsModal />
    </div>
  );
}
