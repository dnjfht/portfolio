interface MainTitleProps {
  subTitle: string;
  mainTitle: string[];
}

export default function MainTitle({ subTitle, mainTitle }: MainTitleProps) {
  return (
    <div className="w-full text-[1.3rem] font-bold ">
      <div className="flex items-center w-full gap-x-6 text-[rgb(0,255,208)]">
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#449bff] to-[#3cad9a]" />
        {subTitle}
      </div>

      <>
        {mainTitle.map((title, idx) => (
          <h1
            key={idx}
            className="block 2sm:block 3sm:hidden xl:text-[3.4rem] lg:text-[2.8rem] text-[2.2rem] font-black mt-4"
          >
            {title}
          </h1>
        ))}

        <h1 className="hidden 2sm:hidden 3sm:block xl:text-[3.4rem] lg:text-[2.8rem] text-[2.2rem] font-black mt-4">
          {mainTitle[0]} {mainTitle[1]}
        </h1>
      </>
    </div>
  );
}
