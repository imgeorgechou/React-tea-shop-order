import { FC } from "react";
import chroma from "chroma-js";
import { Addon, Shape } from "./Addon";
import _ from "lodash";

export const Ice: FC = () => (
  <Addon
    width={_.random(40, 45)}
    shape={Shape.SQUARE}
    color={chroma("lightgray").alpha(_.random(0.4, 0.6))}
  />
);
