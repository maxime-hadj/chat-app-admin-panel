import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

function MessageEdit(props) {
  return (
    <Edit title='Edit message...' {...props}>
      <SimpleForm>
        <TextInput source='id'></TextInput>
        <TextInput source='text'></TextInput>
      </SimpleForm>
    </Edit>
  )
}

export default MessageEdit