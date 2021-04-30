import React, { useState } from 'react';
import GMTableHeader from '../header/header';
import GMTableItem from '../item/item';

const Table = ({ config, onDataRequest, onMenuAction }) => {

    const { actions, fields, items, numOfRowsPerPage, primaryKey, searchText, style } = config;
    const [displayMode, setDisplayMode] = useState("normal");

    const [allItems, setAllItems] = useState(items || []);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [selectedItems, setSelectedItems] = useState({});

    // const [numOfRowsPerPage, setNumOfRowsPerPage] = useState(numOfRowsPerPage || 10);
    const [pageNumber, setPageNumber] = useState(0);
    const [sortCriteria, setSortCriteria] = useState({});

    const toggleBulkSelection = () => {

    }

    const handleItemSelection = (itemData, isSelection = true) => {

    }

    const processMenuAction = (actionName) => {

    }

    return <div className="gm-table-wrapper">
        <table className="gm-table">
            <GMTableHeader actions={actions.bulk} fields={fields} />
            <tbody>
                {items.map(item => <GMTableItem actions={ actions.single} data={item} fields={fields} key={item[primaryKey]} />)}
            </tbody>
        </table>
    </div>
};

export default Table;