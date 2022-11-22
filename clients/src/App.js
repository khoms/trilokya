import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Switch, Router } from "react-router-dom";

import { AuthContext } from "./provider/AuthProvider";

import LoginPage from "./Screens/Login";
import Home from "./Screens/Home";
// import Employee from "./Screens/Employee";

const App = () => {
  const { loading, userToken } = useContext(AuthContext);

  console.log("context bata aako value", userToken);

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (userToken) {
    console.log(userToken);
    return (
      <div>
        {/* <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={"/"}>
                <Home />
              </Route>{" "}
              <Route exact path={"/employee"}>
                <Employee />
              </Route>
            </Switch>
          </div>
        </BrowserRouter> */}
        <Home />
      </div>
    );
  } else {
    return <LoginPage />;
  }
};

export default App;
