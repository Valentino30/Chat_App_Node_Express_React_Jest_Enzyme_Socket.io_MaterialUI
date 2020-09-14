import React from "react";
import { shallow } from "enzyme";

import Home from "../components/Home";

describe("Home Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<Home />);
    const wrapper = component.find("[test-class='home']");
    expect(wrapper.length).toBe(1);
  });
});
