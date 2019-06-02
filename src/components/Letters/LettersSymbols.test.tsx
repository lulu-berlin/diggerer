import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import { LettersSymbols } from "components/Letters";

it("should render LettersSymbols correctly", () => {
  const wrapper = shallow(<LettersSymbols />);
  expect(wrapper).toMatchSnapshot();
});
