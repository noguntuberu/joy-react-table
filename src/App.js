import React from 'react';
import GMTable from './components/table/table';
import sample_data from './data/sample.json';
import './App.css';
const App = () => {
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
    searchText: '',
    style: {},
  }

  const handleDataRequest = (needle, mode) => {
    console.log({ needle, mode });
  }

  const handleMenuAction = (action) => {
    console.log(action);

  }

  const handleItemClick = (item) => {
    console.log(item);
  }

  return <GMTable
    config={config}
    onDataRequest={handleDataRequest}
    onMenuAction={handleMenuAction}
    onItemClick={handleItemClick}
  />
}

export default App;
