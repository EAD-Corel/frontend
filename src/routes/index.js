import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Navigation from "../components/navigation";
import Login from "../pages/login";
import Index from "../pages/index";
import Courses from "../pages/courses";
import Course from "../pages/course";
import ViewClass from "../pages/viewClass";
import Support from "../pages/support";
import Profile from "../pages/profile";
import AlterPassword from "../pages/alterPassword";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Navigation>
        <Route path="/" exact component={Index} isProtected />
        <Route path="/courses" component={Courses} isProtected />
        <Route path="/course" component={Course} isProtected />
        <Route path="/view" component={ViewClass} isProtected />
        <Route path="/support" component={Support} isProtected />
        <Route path="/profile" component={Profile} isProtected />
        <Route path="/alterPassword" component={AlterPassword} isProtected />
      </Navigation>
    </Switch>
  );
};

export default Routes;
