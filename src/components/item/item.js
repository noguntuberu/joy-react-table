import React from 'react';
import ContextMenu from '../menu/menu';
import { processAction } from './helper';
const GMTableItem = ({ actions, data, fields, isSelected, onItemSelection, onItemClick, onMenuAction }) => {

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
            <ContextMenu actions={actions} onMenuAction={action => processAction(action, data, onMenuAction)} text="Action" />
        </td> : <></>}
    </tr>
};

export default GMTableItem;