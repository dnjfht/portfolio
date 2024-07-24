import { useEffect, useRef, useState } from "react";
import { currentScreenSizeState } from "../../recoil/screenSize";
import { useRecoilValue } from "recoil";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./arrow/NextArrow";
import PrevArrow from "./arrow/PrevArrow";
import SliderContent from "./SliderContent";
import SliderContent1 from "./SliderContent1";
import SliderContent2 from "./SliderContent2";

import {
  PiArrowSquareLeftLight,
  PiArrowSquareRightLight,
} from "react-icons/pi";

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(0);
  const currentScreenSize = useRecoilValue(currentScreenSizeState);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: (
      <PrevArrow
        icon={<PiArrowSquareLeftLight />}
        styles={`${
          currentScreenSize === "2xl" ||
          currentScreenSize === "xl" ||
          currentScreenSize === "lg"
            ? "absolute bottom-40 right-44"
            : "fixed top-80 left-3"
        } text-[2.4rem] lg:text-[white] 3sm:text-[black] dark:3sm:text-[white]`}
      />
    ),
    nextArrow: (
      <NextArrow
        icon={<PiArrowSquareRightLight />}
        styles={`${
          currentScreenSize === "2xl" ||
          currentScreenSize === "xl" ||
          currentScreenSize === "lg"
            ? "absolute bottom-40 right-20"
            : "fixed top-80 right-3"
        } text-[2.4rem] lg:text-[white] 3sm:text-[black] dark:3sm:text-[white]`}
      />
    ),
    afterChange: (current: any) => setCurrentSlide(current),
  };

  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (
      sliderRef.current &&
      sliderRef.current.innerSlider &&
      sliderRef.current.innerSlider.list
    ) {
      const slideDivs =
        sliderRef.current.innerSlider.list.querySelectorAll(
          ".slick-slide > div"
        );
      setTotalSlides(slideDivs.length);
    }
  }, []);

  return (
    <div className="w-full lg:h-full">
      <Slider ref={sliderRef} {...settings}>
        <SliderContent>
          <SliderContent1
            currentSlide={currentSlide}
            totalSlides={totalSlides}
          />
        </SliderContent>

        <SliderContent>
          <SliderContent2
            currentSlide={currentSlide}
            totalSlides={totalSlides}
          />
        </SliderContent>
      </Slider>
    </div>
  );
}
