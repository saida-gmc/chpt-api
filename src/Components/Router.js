import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailsUser from "./DetailsUser";
import UserList from "./UserList";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={UserList} />
        <Route path="/details/:userId" component={DetailsUser} />
      </Switch>
    </div>
  );
};

export default Router;
