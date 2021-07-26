import { Link } from "react-router-dom";
import DashboardNav from "../DashboardNav";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid  p-4">
        <DashboardNav />
      </div>
      <div className="conatiner-fluid p-4">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Bookings</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">
              Browse Halls & Hotels
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
