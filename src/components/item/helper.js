/** */

export const processAction = (action, data, callback) => {
    callback({
        action,
        type: 'single',
        payload: [data],
    });
}