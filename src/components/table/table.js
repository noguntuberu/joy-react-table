import React, { useState, useEffect } from 'react';
import GMTableHead from '../header/header';
import GMTableItem from '../item/item';
import Footer from '../footer/footer';
import {
    handleDataRequest,
    handleItemSelection,
    handleItemsToDisplay,
    handleSort,
    processMenuAction,
    toggleBulkSelection
} from './helper';
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

    const [makeRequest, setMakeRequest] = useState(false);

    useEffect(() => {
        setItemsToDisplay(() => handleItemsToDisplay(allItems, pageNumber, rowsPerPage));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allItems, pageNumber, numOfRowsPerPage]);

    useEffect(() => {
        if (!sortCriteria.field) return;
        setAllItems(allItems => handleSort(allItems, sortCriteria));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortCriteria]);

    useEffect(() => {
        if(!makeRequest) return;
        setAllItems(allItems => [
            ...allItems,
            ...handleDataRequest(pageNumber, onDataRequest),
        ])
        setMakeRequest(() => false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [makeRequest]);

    return <div className="rd-table-wrapper">
        <table className="rd-table">
            <GMTableHead
                actions={actions.bulk}
                fields={fields}
                onBulkSelection={() => toggleBulkSelection(itemsToDisplay, primaryKey, selectedItems, setSelectedItems)}
                onMenuAction={action => processMenuAction(action, selectedItems, onMenuAction)}
                onSort={setSortCriteria} />
            <tbody>
                {itemsToDisplay.map(item => <GMTableItem
                    actions={actions.single}
                    data={item} fields={fields}
                    isSelected={selectedItems[item[primaryKey]]}
                    key={item[primaryKey]}
                    onItemClick={onItemClick}
                    onItemSelection={itemData => handleItemSelection(itemData, primaryKey, selectedItems)}
                    onMenuAction={action => processMenuAction(action, selectedItems, onMenuAction)}
                />)}
            </tbody>
        </table>

        <Footer
            numOfItems={allItems.length}
            numOfRows={rowsPerPage}
            onPageChange={setPageNumber}
            onDataRequest={setMakeRequest}
        />
    </div>
};

export default Table;