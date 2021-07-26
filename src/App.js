import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import SignUp from "./components/SignUp/Signup";
// import SignIn from "./components/SignIn/Signin";
// import Sidebar from "./components/Dashboard/Sidebar/sidebar";
// import Home from "./booking/Home";
// import SignIn from "./auth/SignIn/Signin";
// import SignUp from "./auth/SignUp/Signup";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/user/Dashboard";
import DashboardSeller from "./components/user/DashboardSeller";
import Home from "./booking/Home";
import NewHall from "./components/halls/NewHall";

// const TopNav = () => {};

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <div className="main">
          <Route path="/" exact component={Home} />
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/dashboard/seller"
            component={DashboardSeller}
          />
          <PrivateRoute exact path="/hotels/new" component={NewHall} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
