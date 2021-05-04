# React Datatable - Simple React based data table.
A simple and declarative datatable which offers much flexibility with as little configuration as possible.
This data table was created due to the lack of a simple pluggable data table that required little configuration yet offered great flexibility.

This datatable is only optimized for web views.

## Demo & Examples

## Features
* Simple & declarative configuration
* Column sorting
* Pagination
* Flexible styling

## Requirements
* React ^17.0.2

## Installation

`npm install react-datatable --save`

## Table Configuration

### [prop] config
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


## Issues and Contributions
Help is always welcome to the React Datatable project. If you think there's a feature missing or you found a bug, we'd appreciate it if you
could spare some time and prepare a pull request. If you're only interested in making any contribution to this project, take a look at the open issues (especially "bugs").

You can learn more about contributing in the [Contribution Docs](https://github.com/noguntuberu/react-datatable#contributing.md).

## License
[MIT](https://opensource.org/licenses/MIT).