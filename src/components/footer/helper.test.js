import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import * as Helper from './helper';

describe("Testing Footer Helpers:", () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("should generate appropriate list of pages:", () => {
        let numOfItems = 100, numOfRows = 10;
        let expectedValue = Math.ceil(numOfItems / numOfRows);
        expect(Helper.generatePageList(numOfItems, numOfRows)).toHaveLength(expectedValue);
    });

    it("should return 'No item(s) to display message':", () => {
        let expectedValue = 'No item(s) to display';
        expect(Helper.formatFooterMessage(0, 0, 0)).toEqual(expectedValue)
    });

    it("should return valid message for appropriate input", () => {
        expect(Helper.formatFooterMessage(100, 10, 1)).toContain('Showing');
    });

    it("should return at least two <button> elements:", () => {
        //
        act(() => {
            render(Helper.formatPagination(), container);
        });

        const buttons = document.querySelectorAll('button');
        expect(buttons).toHaveLength(2);
    });

    it ("should return seven (7) <button> elements:", () => {
        //
        act(() => {
            render(Helper.formatPagination(100, 10, [1, 2, 3, 4, 5], 1), container);
        });

        const buttons = document.querySelectorAll('button');
        expect(buttons).toHaveLength(7);
    });
}); 