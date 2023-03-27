import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

function ChanEdit(props) {
  return (
    <Edit title='Edit channel name...' {...props}>
      <SimpleForm>
        <TextInput source='id_channel'></TextInput>
        <TextInput source='channel_name'></TextInput>
      </SimpleForm>
    </Edit>
  )
}

export default ChanEdit