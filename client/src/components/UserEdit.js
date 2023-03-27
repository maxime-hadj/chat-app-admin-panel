import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

function UserEdit(props) {
  return (
	<Edit title='Update user info...' {...props}>
		<SimpleForm>
      <TextInput source='id'></TextInput>
      <TextInput source='firstname'></TextInput>
      <TextInput source='lastname'></TextInput>
      <TextInput source='email'></TextInput>
      {/* <TextInput source='password' /> */}
      <TextInput source='role_id'></TextInput>
      {/* <TextInput source='created_at' />
      <TextInput source='updated_at' />
      <TextInput source='photo' /> */}
    </SimpleForm>
  </Edit>
  )
}

export default UserEdit