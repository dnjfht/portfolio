import { useNavigate } from "react-router-dom";
import { SliderContentType } from "../../types/slider";
import TextUtil from "../category/TextUtil";
import { AppPage } from "../../constants";
import MainTitle from "./MainTitle";

export default function SliderContent2({
  currentSlide,
  totalSlides,
}: SliderContentType) {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full lg:h-full lg:w-2/3 px-[10%] lg:px-[6rem] lg:pt-[0.4rem] lg:pb-[2rem] 2sm:py-[2rem] 3sm:py-[0.2rem] box-border lg:flex flex-col justify-between">
        <MainTitle
          subTitle="Let me intro portfolio"
          mainTitle={["지금까지 작업했던 사이트"]}
        />

        <div className="flex w-full mt-8 lg:h-full gap-x-8"></div>
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

        <div className="absolute bottom-[164px] right-32 text-[1.2rem] text-[white]">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </>
  );
}
