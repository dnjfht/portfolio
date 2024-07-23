export interface MenuType {
  icon: React.ReactNode;
  onClick?: () => void;
  fontSize?: string;
  styles?: string;
}

export default function IconUtil({
  icon,
  onClick,
  fontSize,
  styles,
}: MenuType) {
  return (
    <li
      onClick={onClick}
      className={`${fontSize} ${styles} hover:text-[#1ff4a6] transition-color duration-500 cursor-pointer list-none`}
    >
      {icon}
    </li>
  );
}
