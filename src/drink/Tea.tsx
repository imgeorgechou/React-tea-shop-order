import { FC } from "react";
import { Tea as Tae } from "../models/Tea";
import { Item } from "../models/item";
import { Foam } from "./Foam";
import { Ice } from "./Ice";
import _ from "lodash";
import { Boba } from "./Boba";
import { Pearl } from "./Pearl";
import { Jelly } from "./Jelly";
import { Topping } from "../models/Topping";

const color: Record<Tae, string> = {
  [Tae.BLACK_TEA]: "#cc6600",
  [Tae.MILK_TEA]: "#ffcc99",
  [Tae.GREEN_TEA]: "#ffe066",
  [Tae.GREEN_MILK_TEA]: "#ffeb99",
  [Tae.OOLONG]: "#ffbf00",
  [Tae.OOLONG_MILK]: "#ffdf80",
  [Tae.MATCHA]: "#99cc00",
  [Tae.MATCHA_MILK]: "#c2f0c2",
};

const ICE_FACTOR = 7;

const toppingLayerBuilder = (toppings: Topping[]) => {
  const manual: Record<Topping, [FC, number]> = {
    [Topping.BOBA]: [Boba, 17],
    [Topping.PEARL]: [Pearl, 27],
    [Topping.JELLY]: [Jelly, 27],
  };
  return _.shuffle(
    toppings
      .map((t) => manual[t])
      .flatMap(([T, q]) => _.times(q, () => T))
      .map((T, i) => <T key={i} />)
  );
};

interface Props {
  item: Item;
}

export const Tea: FC<Props> = ({ item }) => (
  <div className="tea" style={{ backgroundColor: color[item.tea] }}>
    {item.withFoam && <Foam />}
    <div className="ice-layer">
      {_.range(item.ice * ICE_FACTOR).map(() => (
        <Ice />
      ))}
    </div>
    <div className="topping-layer">{toppingLayerBuilder(item.toppings)}</div>
  </div>
);
