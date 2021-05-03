import React, { useState, useEffect } from "react";
import ContextMenu from '../menu/menu';
import './header.css';

const GMTableHead = ({ actions, fields, onBulkSelection, onMenuAction, onSort }) => {
    const [sortCriteria, setSortCriteria] = useState({ field: '', isAscending: false });

    useEffect(() => {
        if (!sortCriteria.field) return;
        onSort(sortCriteria);
    }, [onSort, sortCriteria]);

    const processAction = (action) => {
        onMenuAction({
            action,
            type: 'bulk',
        });
    }

    const processSortCriteria = (field) => {
        setSortCriteria(sortCriteria => {
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

    return <thead className="rd-head">
        <tr>
            {actions && actions.length ? <td>
                <input type="checkbox" onChange={onBulkSelection} />
            </td> : <></>}
            {fields.map((field) => !field.isSortable ?
                <td key={field.key}> {field.title}</td> :
                <td key={field.key} onClick={() => processSortCriteria(field.key)}> {field.title}</td>
            )}
            {actions && actions.length ? <td>
                <ContextMenu actions={actions} onMenuAction={processAction} text="Action" />
            </td> : <></>}
        </tr>
    </thead>
};

export default GMTableHead;