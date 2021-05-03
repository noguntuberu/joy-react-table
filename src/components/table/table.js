import React, { useState, useEffect } from 'react';
import GMTableHead from '../header/header';
import GMTableItem from '../item/item';
import Footer from '../footer/footer';
import './table.css';

const Table = ({ config, onDataRequest, onMenuAction, onItemClick }) => {
    //
    const { actions, fields, items, numOfRowsPerPage, primaryKey, style } = config;

    const [allItems, setAllItems] = useState(items || []);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [selectedItems, setSelectedItems] = useState({});

    const [pageNumber, setPageNumber] = useState(0);
    const [rowsPerPage] = useState(numOfRowsPerPage || 10);
    const [sortCriteria, setSortCriteria] = useState({});

    useEffect(() => {
        handleItemsToDisplay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allItems, pageNumber, numOfRowsPerPage]);

    useEffect(() => {
        if (!sortCriteria.field) return;
        handleSort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortCriteria]);

    const toggleBulkSelection = () => {
        if (Object.keys(selectedItems).length === itemsToDisplay.length) {
            setSelectedItems(() => ({}));
            return;
        }

        setSelectedItems(() => itemsToDisplay.reduce((sac, item) => ({
            ...sac,
            [item[primaryKey]]: { ...item }
        }), {}));
    }

    const handleItemSelection = (itemData) => {
        setSelectedItems(selectedItems => {
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

    const handleItemsToDisplay = () => {
        const start = pageNumber * rowsPerPage;
        const end = start + rowsPerPage;

        setItemsToDisplay(() => [...allItems].slice(start, end));
    }

    const handleSort = () => {
        const { field, isAscending } = sortCriteria;
        setAllItems(allItems => {
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
        });
    }

    const processMenuAction = (action) => {
        if (action.type === "bulk") {
            onMenuAction({
                ...action,
                payload: Object.values(selectedItems),
            })
            return;
        }

        onMenuAction(action)
    }

    return <div className="rd-table-wrapper">
        <table className="rd-table">
            <GMTableHead
                actions={actions.bulk}
                fields={fields}
                onBulkSelection={toggleBulkSelection}
                onMenuAction={processMenuAction}
                onSort={setSortCriteria} />
            <tbody>
                {itemsToDisplay.map(item => <GMTableItem
                    actions={actions.single}
                    data={item} fields={fields}
                    isSelected={selectedItems[item[primaryKey]]}
                    key={item[primaryKey]}
                    onItemClick={onItemClick}
                    onItemSelection={handleItemSelection}
                    onMenuAction={processMenuAction}
                />)}
            </tbody>
        </table>

        <Footer numOfItems={allItems.length} numOfRows={rowsPerPage} onPageChange={setPageNumber} />
    </div>
};

export default Table;