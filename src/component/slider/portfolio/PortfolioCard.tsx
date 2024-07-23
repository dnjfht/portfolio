interface PortfolioCardProps {
  img: string;
  title: string;
  des: string;
}

export default function PortfolioCard({ img, title, des }: PortfolioCardProps) {
  return (
    <div className="xl:w-[31%] sm:w-[48%] w-full h-full p-5 lg:mb-5 sm:mb-7 mb-7 box-border border-[1px] border-solid border-[#57c1ad] bg-[#88e8d7] dark:bg-[#7ce0ce12] rounded-2xl text-[white] hover:bg-[rgba(255,255,255,0.4)] dark:hover:bg-[rgba(0,0,0,0.4)] transition-all duration-700 cursor-pointer hover:text-[#13ceb5] dark:hover:text-[#00ffd0] md:text-[1.2rem] sm:text-[1.1rem]">
      <img
        className="object-contain w-full aspect-square rounded-2xl"
        src={process.env.PUBLIC_URL + img}
        alt="portfolio_img"
      />
      <h1 className="font-bold line-clamp-2">{title}</h1>
      <p className="mt-6 md:text-[0.875rem] sm:text-[0.75rem] text-[0.75rem] line-clamp-3">
        {des}
      </p>
    </div>
  );
}
