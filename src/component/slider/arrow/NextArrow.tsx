import { ArrowType } from "../../../types/arrow";

export default function NextArrow({ icon, onClick, styles }: ArrowType) {
  return (
    <div onClick={onClick} className={`${styles} cursor-pointer`}>
      {icon}
    </div>
  );
}