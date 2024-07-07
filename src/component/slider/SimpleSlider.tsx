import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./arrow/NextArrow";
import PrevArrow from "./arrow/PrevArrow";
import SliderContent from "./SliderContent";
import SliderContent1 from "./SliderContent1";

import {
  PiArrowSquareLeftLight,
  PiArrowSquareRightLight,
} from "react-icons/pi";
import SliderContent2 from "./SliderContent2";
import SliderContent3 from "./SliderContent3";
import SliderContent4 from "./SliderContent4";

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(0);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: (
      <PrevArrow
        icon={<PiArrowSquareLeftLight />}
        styles="text-[2.4rem] text-[white] absolute bottom-40 right-44 z-[9999]"
      />
    ),
    nextArrow: (
      <NextArrow
        icon={<PiArrowSquareRightLight />}
        styles="text-[2.4rem] text-[white] absolute bottom-40 right-20 z-[9999]"
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

        <SliderContent>
          <SliderContent3 />
        </SliderContent>

        <SliderContent>
          <SliderContent4 />
        </SliderContent>
      </Slider>
    </div>
  );
}
