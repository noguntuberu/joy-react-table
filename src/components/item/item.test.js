import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Item from "./item";

let container = null;
const config = {
  actions: ["View", "Edit", "Delete"],
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
  data: {
    id: 1,
    name: "Rahmon Abdulkadir",
    email: "r.abdulkadir@gmail.com",
    date: Date.now(),
  },
};

beforeEach(() => {
  container = document.createElement("tbody");
  document.body.appendChild(container);

  act(() => {
    render(<Item {...config} />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders a line item:", () => {
  const itemElement = document.querySelector(".gm-table-line-item");
  expect(itemElement).not.toBeNull();
});

it("renders an item:", () => {
  expect(container).toMatchInlineSnapshot(`
    <tbody>
      <tr
        class="gm-table-line-item"
      >
        <td>
          <input
            type="checkbox"
          />
        </td>
        <td>
          1
        </td>
        <td>
          Rahmon Abdulkadir
        </td>
        <td>
          r.abdulkadir@gmail.com
        </td>
        <td>
          Sun May 09 2021
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
    </tbody>
  `);
});
