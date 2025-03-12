import { Item } from "../models/item";
import { Cup } from "./Cup";
import "./Drink.scss";
import { FC } from "react";

interface Props {
  item: Item;
}

export const Drink: FC<Props> = ({ item }) => (
  <div className="drink">
    <Cup item={item} />
  </div>
);
