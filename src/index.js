import React from "react";
import ReactDOM from "react-dom";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
//const dataProvider = jsonServerProvider("https://8qp7u.sse.codesandbox.io"); // from local forked CodeSandbox by TS
//
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={ShowGuesser}
      icon={PostIcon}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="users"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
    />

    
   
  </Admin>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
<Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
*/
