import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Navigation from "../components/navigation";
import Login from "../pages/login";
import Index from "../pages/index";
import Courses from "../pages/courses";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Navigation>
        <Route path="/" exact component={Index} isProtected />
        <Route path="/courses" component={Courses} isProtected />
      </Navigation>
    </Switch>
  );
};

export default Routes;
