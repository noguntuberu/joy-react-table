import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Item from "./item";

let container = null;
const config = {
  actions: ['View', 'Edit', 'Delete'],
  fields: [
    {
      title: 'ID',
      key: 'id',
    },
    {
      title: 'Full Name',
      key: 'name',
      isTitle: true,
    },
    {
      title: 'Email Address',
      key: 'email',
      isTagline: true,
    },
    {
      title: 'Date created',
      key: 'date',
      formatter: value => (new Date(value)).toDateString(),
      isMetadata: true,
    },
  ],
  data: {
    id: 1,
    name: "Rahmon Abdulkadir",
    email: "r.abdulkadir@gmail.com",
    date: Date.now(),
  },
}

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