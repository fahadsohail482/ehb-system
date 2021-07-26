import { allHotels } from "../actions/hotel";
import { useState, useEffect } from "react";
import SmallCard from "../components/cards/SmallCard";
const Home = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    loadAllHotels();
  }, []);
  const loadAllHotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };
  return (
    <>
      <div className="container-fluid h1  bg-secondary p-5 text-center">
        <h1>All Halls and Hotels</h1>
      </div>
      <div className="conatiner-fluid">
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </>
  );
};

export default Home;
