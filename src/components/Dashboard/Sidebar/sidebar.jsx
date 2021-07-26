import React, { Fragment } from "react";
import "./sidebarstyles.css";
import react from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Signin from "../../SignIn/Signin";
import ManageHalls from "../../ManageHalls/ManageHalls";
import FoodMenu from "../../ManageFoodMenu/FoodMenu";
export default function Sidebar() {
  function toggle() {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    sidebar.classlist.toggle("active");
    main.classlist.toggle("active");
  }

  const match = useRouteMatch();
  return (
    <>
      <div className="sidebar">
        <div>
          <Link to={`${match.url}/home`}>Home</Link>
        </div>
        <div>
          <Link to={`${match.url}/halls`}> Manage Halls</Link>
        </div>

        <div>
          <Link to={`${match.url}/bookings`}> ManageHallbookings</Link>
        </div>
        <div>
          <Link to={`${match.url}/hall-timings`}>ManageHalltimings</Link>
        </div>
        <div>
          <Link to={`${match.url}/foodmenu`}>Managefoodmenu</Link>
        </div>
        <div>
          <Link to={`${match.url}/extra-faetures`}>Manageextrafeatures</Link>
        </div>
        <div>
          <Link to={`${match.url}/customer`}>Customers</Link>
        </div>
        <div>
          <Link to={`${match.url}/search-halls`}>Searchhalls</Link>
        </div>
        <div>
          <Link to={`${match.url}/book-hall-request`}>BookHallrequest</Link>
        </div>
        <div>
          <Link to={`${match.url}/feedback-and-rating`}>
            Givefeedbackandrating
          </Link>
        </div>

        <div>
          <Link to={`${match.url}/log-out`}>Logout</Link>
        </div>
      </div>

      <div className="main">
        <div className="page">
          {/* <div className="hamburger">
            <i className="fas fa-align-justify" aria-hidden="true"></i>
          </div> */}
          <div className="content">
            <Switch>
              <Route path={`${match.path}/halls`}>
                <ManageHalls />
              </Route>
              {/* <Route path={`${match.path}/ManageHalltimings`}>
                <ManageHalltimings />
              </Route> */}
              <Route path={`${match.path}/foodmenu`}>
                <FoodMenu />
              </Route>
              {/* <Route path={`${match.path}/Customers `}>
                <Customers />
              </Route> */}
              <Route path="/">oku</Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
