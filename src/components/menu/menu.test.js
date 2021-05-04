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
      render(
        <Menu actions={actions} text={text} onMenuAction={onMenuAction} />,
        container
      );
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
          Action
        </div>
        <div>
          <div />
        </div>
      </div>
    `);
  });

  it("Renders menu tray on menu label click", () => {
    const menuLabel = document.querySelector(".rd-menu-label");
    menuLabel.click();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rd-menu-label"
        >
          Action
        </div>
        <div>
          <div
            class="rd-menu-wrapper"
          >
            <div
              class="rd-menu-tray"
            >
              <ul>
                <li>
                  create
                </li>
                <li>
                  delete
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
