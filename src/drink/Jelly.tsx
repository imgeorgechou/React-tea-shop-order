import { FC } from "react";
import chroma from "chroma-js";
import { Addon, Shape } from "./Addon";
import _ from "lodash";

const COLORS = ["red", "white", "orange", "yellow", "green"];

export const Jelly: FC = () => (
  <Addon
    width={_.random(35, 40)}
    shape={Shape.RECTANGLE}
    // 驚嘆號表示不會是undefined
    color={chroma(_.sample(COLORS)!)
      .alpha(_.random(0.6, 0.7))
      .darken(_.random(0.5))}
  />
);
