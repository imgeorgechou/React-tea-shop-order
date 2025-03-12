import { FC } from "react";
import chroma from "chroma-js";
import { Addon, Shape } from "./Addon";
import _ from "lodash";

export const Pearl: FC = () => (
  <Addon
    width={_.random(25, 33)}
    shape={Shape.CIRCULAR}
    color={chroma("#471f08").alpha(_.random(0.8, 0.9)).darken(_.random(0.5))}
  />
);
