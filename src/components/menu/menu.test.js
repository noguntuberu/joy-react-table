/** */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Menu from "./menu";

describe("Context Menu Test:", () => {
  let container = null,
    text = "Action",
    actions = ["create", "delete"],
    onMenuAction = jest.fn();
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(<Menu />, container);
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Renders properly:", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rd-menu-label"
        >
          ...
        </div>
      </div>
    `);
  });
});
