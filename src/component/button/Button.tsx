interface ButtonType {
  type: "submit" | "reset" | "button";
  btnContent: string | React.ReactNode;
  width?: string;
  styleP?: string;
  styleMargin?: string;
}

export default function Button({
  type,
  btnContent,
  width,
  styleP,
  styleMargin,
}: ButtonType) {
  return (
    <button
      type={type}
      className={`${width} ${styleP} ${styleMargin} box-border bg-[#0dd189] text-[white] rounded-lg border-[1px] border-solid border-white hover:bg-[white] hover:border-[#0dd189] hover:text-[#0dd189] transition-color duration-500`}
    >
      {btnContent}
    </button>
  );
}
