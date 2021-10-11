import React from "react";
import { Route, Redirect } from "react-router-dom";
import Admin from "./Admin";

function ProtectedRoute2({ component: Component,}) {
  const isAuthenticated = localStorage.getItem('email')?true:false;
  var user=false;
  if(localStorage.getItem('role')==="user"){
      user=true;
  }
  // console.log("this ", isAuthenticated);
    return (
      <Route
        render={() =>
          isAuthenticated ? user?<Component/>:<Admin/>:<Redirect to="/signup"/>
        }
      />
    );
}
export default (ProtectedRoute2);