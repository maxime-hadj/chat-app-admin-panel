import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ChanList from './components/ChanList';
import MessageList from './components/MessageList';
import UserList from './components/UserList';

function App() {
  return (
    <Admin dataProvider={jsonServerProvider('http://localhost:3001')}>
      <Resource name='channels' list={ChanList} />
      <Resource name='messages' list={MessageList} />
      <Resource name='users' list={UserList} />
    </Admin>
  )
}

export default App
