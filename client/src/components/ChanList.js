import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { List,
        Datagrid,
        TextField,
        EditButton, 
        DeleteButton,
        CreateButton } from 'react-admin';

const ChanList = (props) => {
  return (
    <List {...props}>
      <CreateButton />
      <Datagrid>
        <TextField source='id_channel' />
        <TextField source='channel_name' />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export default ChanList