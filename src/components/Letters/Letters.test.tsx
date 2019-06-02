import React from "react";
import { shallow } from "enzyme";
import { Letters } from "components/Letters";
import { SVGLetter } from "components/Letters/SVGLetter";

it('should render "hello world" correctly', () => {
  const helloWorld = "hello world";
  const charWidth = 10;
  const charHeight = 20;
  const wrapper = shallow(
    <Letters charWidth={charWidth} charHeight={charHeight}>
      {helloWorld}
    </Letters>
  );

  expect(wrapper).toMatchSnapshot();

  const svg = wrapper.find("svg").at(0);
  expect(svg).toHaveLength(1);

  expect(svg.props()).toMatchObject({
    width: charWidth * helloWorld.length,
    height: charHeight
  });

  const letters = wrapper.find(SVGLetter);

  expect(letters).toHaveLength(helloWorld.length);

  for (let i = 0; i < helloWorld.length; ++i) {
    expect(letters.at(i).props()).toStrictEqual({
      char: helloWorld[i],
      height: charHeight,
      width: charWidth,
      x: i * charWidth,
      y: 0
    });
  }
});
