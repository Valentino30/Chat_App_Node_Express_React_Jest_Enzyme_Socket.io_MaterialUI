import React from "react";
import { shallow } from "enzyme";

import ButtonLink from "../components/ButtonLink";

describe("ButtonLink Component", () => {
  it("Should render without errors", () => {
    const component = shallow(
      <ButtonLink action="join" url="/join" disabled={false} />
    );
    const wrapper = component.find("[test-class='button-link']");
    expect(wrapper.length).toBe(1);
  });
});
