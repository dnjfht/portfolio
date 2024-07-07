interface SliderContentProps {
  children: JSX.Element;
}

export default function SliderContent({ children }: SliderContentProps) {
  return (
    <div className="!flex flex-col w-full lg:h-mainSliderImgHeight lg:flex-row relative">
      {children}
    </div>
  );
}
