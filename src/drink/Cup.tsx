import { FC } from "react";
import { Item } from "../models/item";
import { Size } from "../models/Size";
import { Tea } from "./Tea";
interface Props {
  item: Item;
}

const height: Record<Size, number> = {
  [Size.SMALL]: 350,
  [Size.MEDIUM]: 400,
  [Size.LARGE]: 450,
};
export const Cup: FC<Props> = ({ item }) => (
  <div
    className="cup"
    style={{
      width: 250,
      height: height[item.size],
    }}
  >
    <Tea item={item} />
  </div>
);
