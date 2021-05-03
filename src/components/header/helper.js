/** */
export const processAction = (action, callback) => {
    callback({
        action,
        type: 'bulk',
    });
}

export const processSortCriteria = (field, callback) => {
    callback(sortCriteria => {
        if (sortCriteria.field === field) {
            return {
                ...sortCriteria,
                isAscending: !sortCriteria.isAscending,
            }
        }

        return {
            field: field,
            isAscending: true,
        }
    });
}