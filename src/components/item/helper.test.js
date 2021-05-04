import * as Helper from './helper';

describe("Item Helper Test:", () => {
    let callback = null;
    beforeEach(() => {
        callback = jest.fn();
    });

    afterEach(() => {
        callback = null;
    });

    it ("should call callback:", () => {
        const action = "create";
        Helper.processAction(action, {}, callback);
        expect(callback).toBeCalled();
    });

    it ("should call callback with appropriate config:", () => {
        const action = "create";
        const payload = {};
        Helper.processAction(action, payload, callback);
        expect(callback).toBeCalledWith({
            action,
            payload,
            type: "single",
        });
   });
});