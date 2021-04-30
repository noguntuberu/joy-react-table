import React, { useState } from 'react';
import GMTableHeader from '../header/header';

const Table = ({ config, onDataRequest, onMenuAction }) => {

    const { actions, fields, items, searchText, style } = config;

    const [displayMode, setDisplayMode] = useState("normal");

    const [allItems, setAllItems] = useState(items || []);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [selectedItems, setSelectedItems] = useState({});

    const [numOfRowsPerPage, setNumOfRowsPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [sortCriteria, setSortCriteria] = useState({});

    const toggleBulkSelection = () => {

    }

    const handleItemSelection = (itemData, isSelection = true) => {

    }

    const processMenuAction = (actionName) => {

    }

    return <div className="gm-table">
        <GMTableHeader actions={actions.bulk} fields={fields} />
        <section className="gm-table-body">
            GM Table Body
        </section>
    </div>
};

export default Table;