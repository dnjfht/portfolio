interface TextUtilProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
  styles?: string;
}

export default function TextUtil({
  text,
  fontSize,
  fontWeight,
  onClick,
  styles,
}: TextUtilProps) {
  return (
    <li
      onClick={onClick}
      className={`${fontSize} ${fontWeight} ${styles} hover:text-[#1ff4a6] dark:hover:text-[#1ff4a6] transition-color duration-500 cursor-pointer list-none`}
    >
      {text}
    </li>
  );
}
