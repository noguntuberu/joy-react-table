import React from 'react';
import ContextMenu from '../menu/menu';

const GMTableItem = ({ actions, data, fields, isSelected, onItemSelection, onItemClick, onMenuAction }) => {
    const processAction = (action) => {
        onMenuAction({
            action,
            type: 'single',
            payload: data,
        });
    }

    return <tr className="gm-table-line-item" onClick={() => onItemClick(data)}>
        {actions && actions.length ? <td>
            <input type="checkbox" checked={!!isSelected} onChange={(e) => onItemSelection(data)} onClick={ e => e.stopPropagation()} />
        </td> : <></>}
        {fields.map((field, index) => {
            const key = `${index}-${data[field]}`;
            if (field.formatter) {
                return <td key={key}>{field.formatter(data[field.key])}</td>;
            }

            return <td key={key}>{data[field.key]}</td>
        })}
        {actions && actions.length ? <td onClick={e => e.stopPropagation()}>
            <ContextMenu actions={actions} onMenuAction={processAction} text="Action" />
        </td> : <></>}
    </tr>
};

export default GMTableItem;