export interface MenuType {
  icon: React.ReactNode;
  onClick?: () => void;
  fontSize?: string;
  style?: string;
}

export default function Util({ icon, onClick, fontSize, style }: MenuType) {
  return (
    <div
      onClick={onClick}
      className={`${fontSize} ${style} hover:text-[#1ff4a6] transition-color duration-500 cursor-pointer`}
    >
      {icon}
    </div>
  );
}
