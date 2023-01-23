import React from 'react';
import { List,
        Datagrid,
        TextField,
        EditButton, 
        DeleteButton } from 'react-admin';

const ChanList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='channel_id' />
        <TextField source='channel_name' />
        <EditButton basePath='/channels' />
        <DeleteButton basePath='/channels'/>
      </Datagrid>
    </List>
  )
}

export default ChanList