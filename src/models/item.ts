import { Tea } from "./Tea";
import { Topping } from "./Topping";
import { Size } from "./Size";

export const SUGAR_LEVELS = 5;
export const ICE_LEVELS = 4;

export interface Item {
  tea: Tea;
  withFoam: boolean;
  size: Size;
  sugar: number;
  ice: number;
  toppings: Topping[];
  quantity: number;
}
