import React from "react";
import { SVGLetter } from "components/Letters/SVGLetter";

export type LettersProps = {
  children: string;
  charWidth: number;
  charHeight: number;
};

export const Letters: React.FC<LettersProps> = ({
  children: text,
  charWidth,
  charHeight
}) => (
  <svg height={charHeight} width={charWidth * text.length}>
    {text.split("").map((char, i) => (
      <SVGLetter
        char={char}
        x={charWidth * i}
        y={0}
        width={charWidth}
        height={charHeight}
        key={i}
      />
    ))}
  </svg>
);
