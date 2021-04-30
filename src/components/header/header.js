import React from "react";

const GMTableHeader = ({ actions, fields }) => {
    return <thead className="gm-table-header">
        <tr>
            {actions && actions.length ? <td>
                <input type="checkbox" />
            </td> : <></>}
            {fields.map((field) => <td key={field.key}>{field.title}</td>)}
            {actions && actions.length ? <td>
                ...
            </td> : <></>}
        </tr>
    </thead>
};

export default GMTableHeader;