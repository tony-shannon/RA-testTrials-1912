// in src/users.js
import React from "react";
//import { List, Datagrid, TextField, EmailField, UrlField  } from "react-admin";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />

      <EmailField source="email" />

      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
