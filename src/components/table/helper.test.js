/** */
import * as Helper from './helper';
import sampleItems from "../../data/sample.json";

describe("Table Helper tests:", () => {
    let callback = null;
    beforeEach(() => {
        callback = jest.fn();
    });

    afterEach(() => {
        callback = null;
    })

    it ("calls bulk selection callback:", () => {
        Helper.toggleBulkSelection([], '', {}, callback);
        expect(callback).toBeCalled();
    });

    it ("calls data request callback:", () => {
        Helper.handleDataRequest(0, callback);
        expect(callback).toBeCalled();
    });

    it ("returns an empty array:", () => {
        const response = Helper.handleDataRequest(0, callback);
        expect(Array.isArray(response)).toBeTruthy();
    });

    it ("calls setSelectedItem callback", () => {
        Helper.handleItemSelection({}, '', callback);
        expect(callback).toBeCalled();
    });

    it ("return an valid:", () => {
        const expectedResult = sampleItems.slice(20, 40);
        const result = Helper.handleItemsToDisplay(sampleItems, 1, 20);
        expect(result).toEqual(expectedResult);
    });

    it ("returns an empty array with no response:", () => {
        const result = Helper.handleItemsToDisplay([], 0, 10);
        expect(result).toHaveLength(0)
    });

    it ("calls onMenuAction callback:", () => {
        Helper.processMenuAction('create', {}, callback);
        expect(callback).toBeCalled();
    });

    it ("calls onMenuAction with correct data for bulk selections", () => {
        const action = {
            name: 'create',
            type: 'bulk',
        };

        Helper.processMenuAction(action, {}, callback);
        expect(callback).toBeCalledWith({
            ...action,
            payload: [],
        });
    });

    it ("calls onMenuAction with correct data for single selections", () => {
        const action = {
            name: 'create',
            type: 'single',
        };

        Helper.processMenuAction(action, {}, callback);
        expect(callback).toBeCalledWith(action);
    });
});