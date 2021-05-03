import React, { useState, useEffect } from "react";
import ContextMenu from '../menu/menu';
import { processAction, processSortCriteria,} from './helper';
import './header.css';

const GMTableHead = ({ actions, fields, onBulkSelection, onMenuAction, onSort }) => {
    const [sortCriteria, setSortCriteria] = useState({ field: '', isAscending: false });

    useEffect(() => {
        if (!sortCriteria.field) return;
        onSort(sortCriteria);
    }, [onSort, sortCriteria]);

    return <thead className="rd-head">
        <tr>
            {actions && actions.length ? <td>
                <input type="checkbox" onChange={onBulkSelection} />
            </td> : <></>}
            {fields.map((field) => !field.isSortable ?
                <td key={field.key}> {field.title}</td> :
                <td key={field.key} onClick={() => processSortCriteria(field.key, setSortCriteria)}> {field.title}</td>
            )}
            {actions && actions.length ? <td>
                <ContextMenu actions={actions} onMenuAction={action => processAction(action, onMenuAction)} text="Action" />
            </td> : <></>}
        </tr>
    </thead>
};

export default GMTableHead;