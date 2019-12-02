// in src/users.js
// from Kingdom of CodeMentor




import React from "react";
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { List, Datagrid, TextField, EmailField, EditButton } from "react-admin";
import MyUrlField from "./MyUrlField";
import { Drawer } from '@material-ui/core';
import { Route } from 'react-router';

class UserList extends React.Component {
    handleClose = () => {
        console.log('Hello')
    };
    render() {
         return (
        <>
        <List {...this.props}>
            <Datagrid rowClick="page">
                    <TextField source="id" />
                    <TextField source="name" />

                    <EmailField source="email" />

                    <TextField source="phone" />
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
            <EditButton />
            </Datagrid>
        </List>

        <Route path="/page">
                    {({match}) => {
                      //  console.log(match, '----')
                        return (
                        <Drawer
                            open={match}
                            anchor="right"
                            onClose={this.handleClose}
                        >
                          <TextField source="id" />
                         <TextField source="name" />

                           <EmailField source="email" />
                        </Drawer>
                    )
                    }}
                </Route>
        </>
    )
    }
}


export default compose(
    connect(
        undefined,
        { push }
    )(TagList);