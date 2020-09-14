import React from "react";
import { shallow } from "enzyme";
import ChatRoom from "./ChatRoom";

describe("ChatRoom Component", () => {
  it("Should render without errors", () => {
    const component = shallow(
      <ChatRoom location={{ search: { chatId: "chatId", user: "user" } }} />
    );
    const wrapper = component.find("[test-class='ChatRoom']");
    expect(wrapper.length).toBe(1);
  });
});
