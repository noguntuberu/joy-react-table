# React Datatable - Simple React based data table.
A simple and declarative datatable which offers much flexibility with as little configuration as possible.

This data table was created to:
* provide a simple pluggable data table that required little configuration yet offered great flexibility.
* gives more control to the developer.

This datatable is only optimized for web views.

## Features
* Simple & declarative configuration
* Column sorting
* Pagination
* Flexible styling

## Requirements
* React ^17.0.2

## Installation

`npm install react-datatable --save`

## Props

### config
Property | Type | Required | Default | Description
---------|------|----------|---------|------------
actions | Object | No |  | Action config.
fields | Array | Yes | [] | List of table head columns.
items | Array | Yes | [] | List of line items.
numOfRowsPerPage | Number | Yes | 10 | Number of line items to display per page.
primaryKey | String | Yes | 'id'| *Unique property on each line item*. It must be present in each line item.
style | Object | N0 | | Custom object styling.

#### config.actions
Property | Type | Required | Default | Description
---------|------|----------|---------|------------
bulk | Array | No | [] | List of names of any actions that can be performed on multiple items.
single | Array | No | [] | List of names of any actions that can be performed on individual line items.

#### config.fields
Property | Type | Required | Default | Description
---------|------|----------|---------|------------
key | String | Yes |  | Unique name of the field. It is used to internally identify the column and it must be present as a key on every line item. 
title | String | Yes |  | Title of the column for display purposes
isSortable | Boolean | No | | Specifies whether the table can sort the field.
formatter | Function | No | | A custom formatting function applied the field for each line item.

#### config.style
Custom styling declaration.

Property | Type | Required | Default | Description
---------|------|----------|---------|------------
tableWrapper | Object | No | | Styling rule to be applied on the table wrapper element. 
table | Object | No | | Styling rule to be applied on the table element. 
contextMenuTray | Object | No | | Styling rule to be applied on the context menu tray element. 
contextMenuItem | Object | No | | Styling rule to be applied on the context menu item element. 
footer | Object | No | | Styling rule to be applied on the table footer element. 

### onDataRequest
A javascript function which should be called whenever the table requires more data. It must return an array of items to be added to the data table.

It should take the following arguments:

Argument | Type | Default | Description
---------|------|---------|------------
pageNumber | Number | 0 | Specifies the page number for proper pagination. 

### onMenuAction
A javascript function to be called whenever a menu action is performed on single or multiple items.

It should take the following arguments:

Argument | Type | Default | Description
---------|------|---------|-------------
action | String | ''  | The name of the action that is fired.
payload | Array | [] | List of items to perform action on.
type | Enum (`single`, `bulk`) | 'single' | Specifies whether it is a bulk or single item.

### onItemClick
A javascript function which handles click event on individual line items.

It should accept the following arguments:

Argument | Type | Default | Description
---------|------|---------|------------
item | Object | {} | The data for the clicked line item.

## Example
```
import RDTable from 'react-datatable';

const App = () => {
    const sample_data = [
        {
            id: 1,
            name: "Rahmon Abdulkadir",
            email: "r.abdulkadir@gmail.com",
            date: Date.now(),
        },
        {
            id: 2,
            name: "Ambrose Alli",
            email: "ambralli@gmail.com",
            date: Date.now(),
        },
        {
            id: 3,
            name: "Ahmed Muktar",
            email: "m.ahmed@gmail.com",
            date: Date.now(),
        },
        {
            id: 4,
            name: "Ramin Djawadi",
            email: "ramin.d@gmail.com",
            date: Date.now(),
        },
        {
            id: 5,
            name: "Zainab Arabi",
            email: "zarabi@gmail.com",
            date: Date.now(),
        },
    ]
    const config = {
        actions: {
            bulk: ['Export', 'Delete'],
            single: ['View', 'Edit', 'Delete'],
        },
        fields: [
            {
                title: 'ID',
                key: 'id',
            },
            {
                title: 'Full Name',
                key: 'name',
                isSortable: true,
                isTitle: true,
            },
            {
                title: 'Email Address',
                key: 'email',
                isSortable: true,
                isTagline: true,
            },
            {
                title: 'Date created',
                key: 'date',
                formatter: value => (new Date(Number(value))).toDateString(),
                isMetadata: true,
            },
        ],
        items: sample_data,
        primaryKey: 'id',
        style: {},
    }

  const handleDataRequest = (pageNumber) => {
    console.log({ pageNumber });
  }

  const handleMenuAction = (action) => {
    console.log(action);

  }

  const handleItemClick = (item) => {
    console.log(item);
  }

  return <RDTable
    config={config}
    onDataRequest={handleDataRequest}
    onMenuAction={handleMenuAction}
    onItemClick={handleItemClick}
  />
}

export default App;
```


## Issues and Contributions
Help is always welcome to the React Datatable project. If you think there's a feature missing or you found a bug, we'd appreciate it if you
could spare some time and prepare a pull request. If you're only interested in making any contribution to this project, take a look at the open issues (especially "bugs").

You can learn more about contributing in the [Contribution Docs](https://github.com/noguntuberu/react-datatable/blob/main/contributing.md).

## License
[MIT](https://opensource.org/licenses/MIT).