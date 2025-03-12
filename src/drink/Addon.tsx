import { FC } from "react";
import _ from "lodash";
import { Color } from "chroma-js";

const { PI, random, cos, sin } = Math;
const offset = (maxRadius: number): [number, number] => {
  const angle = PI * 2 * random();
  const radius = maxRadius * random();

  return [radius * cos(angle), radius * sin(angle)];
};

export enum Shape {
  CIRCULAR,
  SQUARE,
  RECTANGLE,
}

interface Props {
  width: number;
  shape: Shape;
  color: Color;
}
export const Addon: FC<Props> = ({ width, shape, color }) => {
  const height = shape === Shape.RECTANGLE ? width * _.random(0.3, 0.8) : width;
  const [offsetX, offsetY] = offset(width / 4);
  return (
    <div
      className="addon"
      style={{
        width: width,
        height: height,
        border: `1px solid ${color.darken()}`,
        borderRadius: shape === Shape.CIRCULAR ? "50%" : "10%",
        backgroundColor: color.hex(),
        transform: `rotate(${_.random(0.0, 180.0)}deg)`,
        left: offsetX,
        top: offsetY,
        margin: -(width / 15),
      }}
    ></div>
  );
};
