import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { List,
        Datagrid,
        TextField,
        EditButton, 
        DeleteButton,
        useGetList
        } from 'react-admin';

// const UserPagination = () => <Pagination rowsPerPageOptions={[5, 10, 25, 50]} />;

const UserList = (props) => {
  const { data, isLoading } = useGetList('users', {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'id', order: 'asc'},
  });
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id_user' />
        <TextField source='firstname' />
        <TextField source='lastname' />
        <TextField source='email' />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export default UserList