import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardNav from "../DashboardNav";
import { sellerHotels } from "../../actions/hotel";
import { useSelector } from "react-redux";
import SmallCard from "../cards/SmallCard";

const DashboardSeller = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadSellerHotels();
  }, []);
  const loadSellerHotels = async () => {
    let res = await sellerHotels(auth.token);
    console.log(res);
    setHotels(res.data);
  };
  return (
    <>
      <div className="container-fluid p-4">
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid  p-4">
        <DashboardNav />
      </div>
      <div className="conatiner-fluid p-4">
        <div className="row">
          <div className="col-md-4">
            <h2>Your Halls</h2>
          </div>
          <div className="col-md-1">
            <Link to="/hotels/new" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
        <div className="row">
          {hotels.map((h) => (
            <SmallCard key={h._id} h={h} />
          ))}
        </div>
      </div>
    </>
  );
};
export default DashboardSeller;
