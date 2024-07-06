import TextUtil from "./TextUtil";

interface CategoryMenuProps {
  items: CategoryMenuType[];
  style?: string;
}

type CategoryMenuType = {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
  style?: string;
};

export default function CategoryMenu({ items, style }: CategoryMenuProps) {
  return (
    <ul className={`${style}`}>
      {items.map((item) => (
        <TextUtil
          text={item.text}
          fontSize={item.fontSize}
          fontWeight={item.fontWeight}
          onClick={item.onClick}
          style={style}
        />
      ))}
    </ul>
  );
}
