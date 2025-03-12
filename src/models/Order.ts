import { Item } from "./item";

export interface Order extends Item {
  id: string;
  price: number;
}
