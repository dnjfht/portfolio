interface TextUtilProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
  style?: string;
}

export default function TextUtil({
  text,
  fontSize,
  fontWeight,
  onClick,
  style,
}: TextUtilProps) {
  console.log(text, style);
  return (
    <li
      onClick={onClick}
      className={`${fontSize} ${fontWeight} ${style} hover:text-[#1ff4a6] dark:hover:text-[#1ff4a6] transition-color duration-500 cursor-pointer list-none`}
    >
      {text}
    </li>
  );
}
