import { useState } from "react";
import { toast } from "react-toastify";
import AlgoliaPlaces from "algolia-places-react";
import { DatePicker } from "antd";
// import { date } from "check-types";
import moment from "moment";
import { createHotel } from "../../actions/hotel";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";

const config = {
  appId: process.env.REACT_APP_ALGOGOLIA_APP_ID,
  apikey: process.env.REACT_APP_ALGOGOLIA_APP_KEY,
  language: "en",
  countries: ["au"],
};

const NewHall = () => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  // state
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: "",
    price: "",
  });
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100*100.png?text=PREVIEW"
  );
  const [location, setLocation] = useState("");
  const { title, content, image, price } = values;
  const handleSubmit = async (e) => {
    e.preventDefault();
    let hotelData = new FormData();
    hotelData.append("title", title);
    hotelData.append("content", content);
    hotelData.append("location", location);
    hotelData.append("price", price);
    image && hotelData.append("image", image);

    console.log([...hotelData]);
    // console.log(values);
    // console.log(location);
    let res = await createHotel(token, hotelData);
    console.log("HOTEL CREATE RES", res);
    toast("New hotel is posted");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const hallForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondry btn-block m-2 text-left">
          image
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </label>

        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          className="form-control m-2"
          value={title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Content"
          className="form-control m-2"
          value={content}
        />

        <AlgoliaPlaces
          className="from-control ml-2 mr-2"
          placeholder="Location"
          defaultValue={location}
          onChange={({ suggestion }) => setLocation(suggestion.value)}
          styles={{ height: "50px" }}
        />

        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          className="form-control m-2"
          value={price}
        />
      </div>

      <DatePicker
        placeholder=" date"
        className={(date, dateString) => console.log(dateString)}
        disabledDate={(current) =>
          current && current.value < moment().subtract(1, "days")
        }
      />
      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  );
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Hall</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            {hallForm()}
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />
            <pre>{JSON.stringify(values, null, 4)}</pre>
            {JSON.stringify(location)}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHall;
