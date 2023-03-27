import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import ChanList from './components/ChanList';
import MessageList from './components/MessageList';
import UserList from './components/UserList';
import ChanEdit from './components/ChanEdit';
import MessageEdit from './components/MessageEdit';
import UserEdit from './components/UserEdit';
// import ChanCreate from './components/ChanCreate';
// import UserCreate from './components/UserCreate';
import { authProvider } from './authProvider';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000/api/bo', httpClient)} authProvider={authProvider}>
      <Resource name='channels' list={ChanList} create='' edit={ChanEdit} delete='' />
      <Resource name='messages' list={MessageList} create='' edit={MessageEdit} delete='' />
      <Resource name='users' list={UserList} create='' edit={UserEdit} delete='' />
    </Admin>
  )
}

export default App