import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../pages/home/HomePage";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route path="/home" component={HomePage} />

        <Route path="*" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {};

export default Routes;
