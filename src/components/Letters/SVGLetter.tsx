import React from "react";

export type LetterProps = React.SVGProps<SVGUseElement> & {
  /**
   * The letter to render (a-z or A-Z).
   */
  char: string;
};

/**
 * This component renders a letter from the SVG symbols created by <LettersSymbols>.
 */
export const SVGLetter: React.FC<LetterProps> = ({ char, ...svgProps }) => {
  const letter = char.toUpperCase();

  return /[A-Z]/.test(letter) ? (
    <use href={`#CLET${char.toUpperCase()}`} {...svgProps} />
  ) : null;
};
