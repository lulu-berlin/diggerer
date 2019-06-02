import React from "react";
import { storiesOf } from "@storybook/react";
import { LettersSymbols } from "components/Letters/LettersSymbols";
import { SVGLetter } from "components/Letters/SVGLetter";

const A = "A".charCodeAt(0);
const Z = "Z".charCodeAt(0);

Array.from({ length: Z - A + 1 }).forEach((_, i) => {
  const char = String.fromCharCode(A + i);

  storiesOf("SVGLetter", module).add(char, () => (
    <>
      <LettersSymbols />
      <svg width={16} height={16}>
        <SVGLetter x={0} y={0} width={16} height={16} char={char} />
      </svg>
    </>
  ));
});
