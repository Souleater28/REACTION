import React from "react";

import { Switch, Route } from "react-router-dom";
import BannedPageContainer from "../src/pages/BannedPage/BannedPageContainer/BannedPageContainer";
import LoginContainer from "./pages/LogInPage/LogInPageContainer/LogInPageContainer";
import AdminPageContainer from "./pages/AdminP";
import UserPageContainer from "./pages/UserPage/UserPageContainer";

export default () => {
  return (
    <Switch>
      <Route exact path="/User">
        <UserPageContainer />
      </Route>
      <Route exact path="/Admin">
        <AdminPageContainer />
      </Route>
      <Route exact path="/">
        <LoginContainer />
      </Route>
      <Route exact path="/Banned">
        <BannedPageContainer />
      </Route>
    </Switch>
  );
};
