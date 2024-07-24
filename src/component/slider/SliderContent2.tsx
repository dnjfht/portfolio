import { useNavigate } from "react-router-dom";
import { SliderContentType } from "../../types/slider";
import TextUtil from "../category/TextUtil";
import { AppPage, portfolioData } from "../../constants";
import MainTitle from "./MainTitle";
import PortfolioCard from "./portfolio/PortfolioCard";

export default function SliderContent2({
  currentSlide,
  totalSlides,
}: SliderContentType) {
  const navigate = useNavigate();

  const portfolioDataSlice = portfolioData.slice(0, 3);

  return (
    <>
      <div className="w-full lg:h-full lg:w-2/3 px-[10%] lg:px-[6rem] lg:pt-[0.4rem] lg:pb-[2rem] 2sm:py-[2rem] 3sm:py-[0.2rem] box-border lg:flex flex-col justify-between overflow-y-scroll">
        <MainTitle
          subTitle="Let me intro portfolio"
          mainTitle={["지금까지 작업했던 사이트"]}
        />

        <div className="w-full h-full mt-12 lg:mt-12 sm:mt-15">
          <div className="sm:flex justify-end w-full sm:text-[0.875rem] text-[0.75rem] text-[#5a5a5a] dark:text-[#e7e7e7]">
            <button
              onClick={() => {
                navigate("/portfolio");
              }}
              className="mb-5 hover:text-[#00d1b2] transition-all duration-700"
            >
              더 보기
            </button>
          </div>

          <div className="flex flex-col flex-wrap w-full xl:flex-nowrap sm:flex-wrap sm:flex-row sm:justify-between">
            {portfolioDataSlice.map((data) => (
              <PortfolioCard
                key={data.id}
                img={data.img}
                title={data.title}
                des={data.des}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full lg:h-full lg:w-1/3">
        <img
          className="object-cover object-center w-full lg:h-full"
          src={process.env.PUBLIC_URL + "/images/main_slider/img2.jpg"}
          alt="img2"
        />

        <div className="absolute text-right bottom-16 right-20">
          <TextUtil
            text="Portfolio"
            onClick={() => navigate(AppPage.PORTFOLIO)}
            fontSize="text-[1.8rem]"
            fontWeight="font-black"
            styles="text-dark-text"
          />
          <p className="mt-1 font-semibold text-text-4 text-[1.1rem]">
            Let me intro my portfolio
          </p>
        </div>

        <div className="absolute bottom-[164px] lg:right-32 right-20 text-[1.2rem] text-[white]">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </>
  );
}
