import * as Helper from './helper';

describe("Testing Header Helpers:", () => {
    let callback = null;
    beforeEach(() => {
        callback = jest.fn(param => param);
    });

    afterEach(() => {
        callback = null;
    });

    it("calls action callback with expected argument:", () => {
        const actionName = "Create";
        const expectCallBackParam = {
            action: actionName,
            type: "bulk",
        }
        Helper.processAction(actionName, callback);
        expect(callback).toBeCalledWith(expectCallBackParam);
    });

    it("calls action callback once:", () => {
        const actionName = "Create";
        Helper.processAction(actionName, callback);
        expect(callback).toBeCalledTimes(1);
    });

    it ("calls sort callback once:", () => {
        const fieldName = "name";
        Helper.processSortCriteria(fieldName, callback);
        expect(callback).toBeCalledTimes(1);
    });
});