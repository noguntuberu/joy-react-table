import React from 'react';

const GMTableItem = ({ actions, data, fields }) => {
    return <tr className="gm-table-line-item">
        {actions && actions.length ? <td>
            <input type="checkbox" />
        </td> : <></>}
        {fields.map((field, index) => {
            const key = `${index}-${data[field]}`;
            if (field.formatter) {
                return <td key={key}>{field.formatter(data[field.key])}</td>;
            }

            return <td key={key}>{data[field.key]}</td>
        })}
        {actions && actions.length ? <td>
            ...
        </td> : <></>}
    </tr>
};

export default GMTableItem;