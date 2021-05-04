import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Header from "./header";

describe("Header component test:", () => {
    let container = null, bulkCallback = null, onMenuCallback = null, sortCallback = null;
    let actions = ["Add", "Delete"];
    let fields = [
        {
            title: "ID",
            key: "id",
        },
        {
            title: "Full Name",
            key: "name",
            isSortable: true,
            isTitle: true,
        },
    ];

    beforeEach(() => {
        container = document.createElement("table");
        document.body.appendChild(container);

        bulkCallback = jest.fn((param) => param);
        onMenuCallback = jest.fn((param) => param);
        sortCallback = jest.fn((param) => param);
        act(() => {
            render(
                <Header
                    actions={actions}
                    fields={fields}
                    onBulkSelection={bulkCallback}
                    onMenuAction={onMenuCallback}
                    onSort={sortCallback}
                    style={{}}
                />,
                container
            );
        });
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        bulkCallback = null;
        onMenuCallback = null;
        sortCallback = null;
    });

    it("renders correctly:", () => {
        expect(container).toMatchInlineSnapshot(`
      <table>
        <thead
          class="rd-head"
        >
          <tr>
            <td>
              <input
                type="checkbox"
              />
            </td>
            <td>
               
              ID
            </td>
            <td>
               
              Full Name
            </td>
            <td>
              <div
                class="rd-menu-label"
              >
                Action
              </div>
              <div>
                <div />
              </div>
            </td>
          </tr>
        </thead>
      </table>
    `);
    });
});
