import React from 'react';
import { List,
        Datagrid,
        TextField,
        EditButton, 
        DeleteButton } from 'react-admin';

const MessageList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id_message' />
        <TextField source='text' />
        <TextField source='channel_id' />
        <TextField source='date' />
        <EditButton basePath='/messages' />
        <DeleteButton basePath='/messages'/>
      </Datagrid>
    </List>
  )
}

export default MessageList