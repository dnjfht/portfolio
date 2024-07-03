import Util from "./Util";

interface SnsMenuProps {
  items: SnsMenuType[];
  hiddenStyle?: string;
}

export type SnsMenuType = {
  icon: React.ReactNode;
  link: string;
  fontSize?: string;
  style?: string;
};

export default function SnsMenu({ items, hiddenStyle }: SnsMenuProps) {
  return (
    <ul className={`${hiddenStyle} flex items-center gap-x-6`}>
      {items.map((item) => (
        <Util
          onClick={() => {
            window.open(item.link, "_blank");
          }}
          icon={item.icon}
          fontSize={item.fontSize}
        />
      ))}
    </ul>
  );
}
