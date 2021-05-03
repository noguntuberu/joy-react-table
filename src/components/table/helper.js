/** */


export const toggleBulkSelection = (itemsToDisplay, primaryKey, selectedItems, callback) => {
    if (Object.keys(selectedItems).length === itemsToDisplay.length) {
        callback(() => ({}));
        return;
    }

    callback(() => itemsToDisplay.reduce((sac, item) => ({
        ...sac,
        [item[primaryKey]]: { ...item }
    }), {}));
}

/**
 * Handles data request for more data within the table.
 * It returns only arrays. If non-arrays are encountered, an empty array is returned.
 * 
 * @param {Number} pageNumber 
 * @param {Function} callback 
 */
export const handleDataRequest = (pageNumber, callback) => {
    const response = callback(pageNumber + 1);
    if (!Array.isArray(response)) return [];
    return response;
}

export const handleItemSelection = (itemData, primaryKey, callback) => {
    callback(selectedItems => {
        const ITEM_KEY = itemData[primaryKey];
        if (selectedItems[ITEM_KEY]) {
            let selections = { ...selectedItems };
            delete selections[ITEM_KEY];
            return selections;
        }

        return {
            ...selectedItems,
            [ITEM_KEY]: itemData,
        }
    });
}

export const handleItemsToDisplay = (allItems, pageNumber, rowsPerPage) => {
    const start = pageNumber * rowsPerPage;
    const end = start + rowsPerPage;

    return [...allItems].slice(start, end);
}

export const handleSort = (allItems, sortCriteria) => {
    const { field, isAscending } = sortCriteria;
    let items = [...allItems];
    if (isAscending) {
        return items.sort((a, b) => {
            if (a[field] > b[field]) return 1;
            else return -1;
        });
    } else {
        return items.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            else return 1;
        });
    }
}

export const processMenuAction = (action, selectedItems, callback) => {
    if (action.type === "bulk") {
        callback({
            ...action,
            payload: Object.values(selectedItems),
        })
        return;
    }

    callback(action)
}