import IconUtil from "./IconUtil";

interface GnbMenuProps {
  items: GnbMenuType[];
}

export type GnbMenuType = {
  icon: React.ReactNode;
  onClick: () => void;
  fontSize?: string;
  style?: string;
};

export default function GnbMenu({ items }: GnbMenuProps) {
  return (
    <ul className="flex items-center gap-x-3">
      {items.map((item) => (
        <IconUtil
          onClick={item.onClick}
          icon={item.icon}
          fontSize={item.fontSize}
          style={item.style}
        />
      ))}
    </ul>
  );
}
