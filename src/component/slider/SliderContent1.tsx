import { useNavigate } from "react-router-dom";
import TextUtil from "../category/TextUtil";
import IconUtil from "../header/IconUtil";
import { SliderContentType } from "../../types/slider";
import { AppPage } from "../../constants";

import { PiDownloadSimpleThin } from "react-icons/pi";
import MainTitle from "./MainTitle";

export default function SliderContent1({
  currentSlide,
  totalSlides,
}: SliderContentType) {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full lg:h-full lg:w-2/3 px-[10%] lg:px-[6rem] lg:pt-[0.4rem] lg:pb-[2rem] 2sm:py-[2rem] 3sm:py-[0.2rem] box-border lg:flex flex-col justify-between">
        <MainTitle
          subTitle="Let me intro myself"
          mainTitle={["코드를 통하여 소통하는", "개발자 유승민"]}
        />

        <p className="lg:text-[1rem] text-[0.875rem] lg:mt-0 mt-10">
          사용자들의 눈과 손이 더욱 즐거웠으면 하는 바램.
          <br />
          그 바램 하나로 오늘도 열심히 달려나가고 있습니다.
          <br />
          알고 있다는 것에 안주하지 않고 끊임없이 노력하는 개발자가 되겠습니다.
        </p>

        <div className="flex items-center w-full mt-10 font-black gap-x-5 lg:mt-0">
          <IconUtil
            icon={<PiDownloadSimpleThin />}
            fontSize="lg:text-[2rem] text-[1.5rem]"
            style="lg:p-8 p-5 rounded-full border-[1px] border-solid border-light-text dark:border-dark-text"
          />
          <p>Download CV</p>
        </div>
      </div>

      <div className="relative w-full lg:h-full bg-[#ff0000] lg:w-1/3">
        <img
          className="object-cover object-center w-full lg:h-full"
          src={process.env.PUBLIC_URL + "/images/main_slider/img1.jpg"}
          alt="img1"
        />

        <div className="absolute text-right bottom-16 right-20">
          <TextUtil
            text="About"
            onClick={() => navigate(AppPage.ABOUT)}
            fontSize="text-[1.8rem]"
            fontWeight="font-black"
            style="text-dark-text"
          />
          <p className="mt-1 font-semibold text-text-4 text-[1.1rem]">
            Let me intro myself
          </p>
        </div>

        <div className="absolute bottom-[164px] right-32 text-[1.2rem] text-[white]">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </>
  );
}
