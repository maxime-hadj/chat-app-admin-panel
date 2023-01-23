import React from 'react';
import { List,
        Datagrid,
        TextField,
        EditButton, 
        DeleteButton } from 'react-admin';

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id_user' />
        <TextField source='firstname' />
        <TextField source='lastname' />
        <TextField source='email' />
        <TextField source='created_at' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users'/>
      </Datagrid>
    </List>
  )
}

export default UserList