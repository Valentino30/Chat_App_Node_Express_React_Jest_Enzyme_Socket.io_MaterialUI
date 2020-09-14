import React from "react";
import { shallow } from "enzyme";
import ButtonLink from "./ButtonLink";

describe("ButtonLink Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<ButtonLink action='Join' url='/join'/>);
    const wrapper = component.find("[test-class='button-link']");
    expect(wrapper.length).toBe(1);
  });
});
