import SnsMenu from "./header/SnsMenu";

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full h-[80px] lg:hidden border-t-[1px] border-solid border-[rgba(255,255,255,0.2)] shadow-[0_0_32px_-16px_rgba(0,0,0,0.5)]">
      <SnsMenu hideDefaultItems={false} />
    </div>
  );
}
