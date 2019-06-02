import React from "react";
import { shallow } from "enzyme";
import { SVGLetter } from "components/Letters/SVGLetter";

it("should render all letters correctly", () => {
  for (let c = "A".charCodeAt(0); c <= "Z".charCodeAt(0); ++c) {
    const char = String.fromCharCode(c);
    const wrapper = shallow(<SVGLetter char={char} />);

    const use = wrapper.find("use").at(0);

    expect(use.props()).toStrictEqual({
      href: `#CLET${char}`
    });
  }
});

it("should render nothing when char is not an alphabetic letter", () => {
  const wrapper = shallow(<SVGLetter char="1" />);
  expect(wrapper.find("use")).toHaveLength(0);
});

it("should pass down SVG props to the <use> element", () => {
  const wrapper = shallow(
    <SVGLetter char="A" fill="red" className="myclass" />
  );

  const use = wrapper.find("use").at(0);

  expect(use.props()).toStrictEqual({
    href: `#CLETA`,
    fill: "red",
    className: "myclass"
  });
});
