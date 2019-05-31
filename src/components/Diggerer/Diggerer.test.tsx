import React from "react";
import { shallow } from "enzyme";
import { Diggerer } from "components/Diggerer";

it("should render without error", () => {
  const wrapper = shallow(<Diggerer />);
  expect(wrapper.text()).toBe("Hello, world!");
});
