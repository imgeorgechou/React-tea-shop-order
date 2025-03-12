import { FC } from "react";
import chroma from "chroma-js";
import { Addon, Shape } from "./Addon";
import _ from "lodash";

export const Boba: FC = () => (
  <Addon
    width={_.random(35, 40)}
    shape={Shape.CIRCULAR}
    color={chroma("#471f08").alpha(_.random(0.8, 0.9)).darken(_.random(0.5))}
  />
);
