import React from "react";
import { shallow } from "enzyme";

import MessagesList from "../components/MessagesList";

describe("MessagesList Component", () => {
  let component;

  beforeEach(() => {
    const user = {
      id: "SX9LQr_TYliMsox3AAAA",
      name: "User1",
      chatId: "RSo2OjW1lf",
    };
    const messages = [
      {
        id: "728df0b5-cdf1-4688-b222-4ab02a6f9520",
        text: "Hello there!",
        timestamp: 1595758033503,
        userId: "SX9LQr_TYliMsox3AAAA",
        userName: "User1",
        chatId: "RSo2OjW1lf",
      },
      {
        id: "728df0b5-cdf1-4688-b222-4ab02a6f9521",
        text: "Hi!",
        timestamp: 1595758033504,
        userId: "SX9LQr_TYliMsox3AAAB",
        userName: "User2",
        chatId: "RSo2OjW1lf",
      },
    ];
    return (component = shallow(
      <MessagesList messages={messages} user={user} />
    ));
  });

  afterEach(() => {
    component.unmount();
  });

  it("Should render without errors", () => {
    const wrapper = component.find("[test-class='messages-list']");
    expect(wrapper.length).toBe(1);
  });

  it("Should render messages without errors", () => {
    const wrapper = component.find("[test-class='message']");
    expect(wrapper.length).toBe(2);
  });
});
