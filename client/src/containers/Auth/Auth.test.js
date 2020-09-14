import React from "react";
import { shallow } from "enzyme";
import Auth from "./Auth";

describe("Auth Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<Auth action='Join'/>);
    const wrapper = component.find("[test-class='auth']");
    expect(wrapper.length).toBe(1);
  });
});
