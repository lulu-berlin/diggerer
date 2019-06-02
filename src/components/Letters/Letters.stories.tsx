import React from "react";
import { storiesOf } from "@storybook/react";
import { LettersSymbols } from "components/Letters/LettersSymbols";
import { Letters } from "components/Letters/Letters";

console.log(module);

storiesOf("Letters", module)
  .add("hello world", () => (
    <>
      <LettersSymbols />
      <Letters charWidth={16} charHeight={16}>
        hello world
      </Letters>
    </>
  ))
  .add("DIGGER", () => (
    <>
      <LettersSymbols />
      <Letters charWidth={16} charHeight={16}>
        DIGGER
      </Letters>
    </>
  ))
  .add("HIGH SCORE", () => (
    <>
      <LettersSymbols />
      <Letters charWidth={16} charHeight={16}>
        HIGH SCORE
      </Letters>
    </>
  ));
