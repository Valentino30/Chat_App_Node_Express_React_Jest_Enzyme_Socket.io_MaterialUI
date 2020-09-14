import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Auth from "../containers/Auth";

describe("Auth Component", () => {
  it("Should render without errors", () => {
    const component = mount(
      <Router>
        <Route render={(props) => <Auth {...props} />} />
      </Router>
    );
    console.log(component.debug());
    const wrapper = component.find("[test-class='auth']");
    // Expecting 3 wrappers instead of 1 due to Material UI
    expect(wrapper.length).toBe(3);
  });
});
