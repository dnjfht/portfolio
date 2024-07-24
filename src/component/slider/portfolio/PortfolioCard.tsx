interface PortfolioCardProps {
  img: string;
  title: string;
  des: string;
}

export default function PortfolioCard({ img, title, des }: PortfolioCardProps) {
  return (
    <div className="xl:w-[31%] sm:w-[48%] w-full xl:h-[420px] lg:h-[460px] md:h-[500px] sm:h-[450px] 2sm:h-[600px] 3sm:h-[500px] p-5 lg:mb-5 sm:mb-7 mb-7 box-border border-[1px] border-solid border-[#01c09d] bg-[#3fedcad6] dark:bg-[#7ce0ce12] rounded-2xl text-[white] hover:bg-[#89ffe713] dark:hover:bg-[rgba(0,0,0,0.4)] transition-all duration-700 cursor-pointer hover:text-[#15e3b3f6] dark:hover:text-[#00e5bb] sm:text-[1.2rem] text-[1.1rem]">
      <img
        className="object-contain w-full aspect-square rounded-2xl"
        src={process.env.PUBLIC_URL + img}
        alt="portfolio_img"
      />
      <h1 className="font-bold line-clamp-2">{title}</h1>
      <p>-</p>
      <p className="sm:text-[0.875rem] text-[0.75rem] 2sm:line-clamp-3 3sm:line-clamp-6">
        {des}
      </p>
    </div>
  );
}
