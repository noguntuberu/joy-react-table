import React from 'react';
import GMTable from './components/table/table';
import { sample_data } from './data/sample';
import './App.css';
const App = () => {
  const config = {
    actions: {
      bulk: ['Delete'],
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
        isTitle: true,
      },
      {
        title: 'Email Address',
        key: 'email',
        isTagline: true,
      },
      {
        title: 'Date created',
        key: 'date',
        formatter: value => (new Date(value)).toDateString(),
        isMetadata: true,
      },
    ],
    items: sample_data,
    primaryKey: 'id',
    searchText: '',
    style: {},
  }

  const handleDataRequest = (needle, mode) => {

  }

  const handleMenuAction = (action) => {

  }

  return <GMTable
    config={config}
    onDataRequest={handleDataRequest}
    onMenuAction={handleMenuAction}
  />
}

export default App;
