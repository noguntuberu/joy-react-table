import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Table from "./table";

describe("Table Component Test", () => {
  let container = null;
  const config = {
    actions: {
      bulk: ["Delete"],
      single: ["View", "Edit", "Delete"],
    },
    fields: [
      {
        title: "ID",
        key: "id",
      },
      {
        title: "Full Name",
        key: "name",
        isTitle: true,
      },
      {
        title: "Email Address",
        key: "email",
        isTagline: true,
      },
      {
        title: "Date created",
        key: "date",
        formatter: (value) => new Date(value).toDateString(),
        isMetadata: true,
      },
    ],
    items: [],
    primaryKey: "id",
    searchText: "",
    style: {},
  };

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    const onDataRequest = jest.fn((param) => param);
    const onMenuAction = jest.fn((param) => param);
    const onItemClick = jest.fn((param) => param);

    act(() => {
      render(
        <Table
          config={config}
          onDataRequest={onDataRequest}
          onMenuAction={onMenuAction}
          onItemClick={onItemClick}
        />,
        container
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders a table:", () => {
    const tableElement = document.querySelector("table");
    expect(tableElement).not.toBeNull();
  });

  it("properly renders table with correct number of fields:", () => {
    const tHeadRows = document.querySelector("thead > tr");

    // if bulk actions are set, a checkbox and an 'Action' button are added to the thead>tr element.
    const expectedLength =
      (config.actions.bulk.length ? 2 : 0) + config.fields.length;
    expect(tHeadRows.children).toHaveLength(expectedLength);
  });

  it("renders correctly", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rd-table-wrapper"
        >
          <table
            class="rd-table"
          >
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
                   
                  Email Address
                </td>
                <td>
                   
                  Date created
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
            <tbody />
          </table>
          <div
            class="rd-footer"
          >
            <small>
              No item(s) to display
               
            </small>
            <div
              class="rd-pagination"
            >
              <button
                disabled=""
              >
                 
                &lt;
                 
              </button>
              <button
                disabled=""
              >
                 
                &gt;
                 
              </button>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
