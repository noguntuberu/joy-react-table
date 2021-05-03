import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Footer from "./footer";

describe("Footer tests:", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    const callback = jest.fn((param) => param);
    act(() => {
      render(
        <Footer
          numOfItems={100}
          numOfRows={10}
          onDataRequest={callback}
          onPageChange={callback}
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

  it("contains at 7 button elements:", () => {
    const buttons = document.querySelectorAll("button");
    expect(buttons).toHaveLength(7);
  });

  it("renders correctly:", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rd-footer"
        >
          <small>
            Showing 1 to 10 records of 100
             
          </small>
          <div
            class="rd-pagination"
          >
            <button
              disabled=""
            >
               
              &lt;
               
            </button>
            <button>
              <b>
                1
              </b>
            </button>
            <button>
              2
            </button>
            <button>
              3
            </button>
            <button>
              4
            </button>
            <button>
              5
            </button>
            <button>
               
              &gt;
               
            </button>
          </div>
        </div>
      </div>
    `);
  });
});
