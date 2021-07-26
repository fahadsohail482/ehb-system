import { useHistory, Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const SmallCard = ({
  h,
  handleHotelDelete,
  owner = true,
  showViewMoreButton = true,
}) => {
  const history = useHistory();
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={"https://via.placeholder.com/900x500.png?text=Hall+Booking"}
            alt="halls"
            className="card-img img img-fluid"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">
              {h.title}
              <span className="float-right text-primary">${h.price}</span>
            </h3>
            <p className="alert alert-info">{h.location}</p>
            <p className="card-text">{`${h.content.substring(0, 200)}...`}</p>
            <p className="card-text">
              <span className="float-right text-primary">for 3-4 Hours</span>
            </p>
            <br />
            <br />
            <div className="d-flex justify-content-between h4">
              {showViewMoreButton && (
                <button
                  className="btn btn-primary"
                  onClick={() => history.push(`/hotel/${h._id}`)}
                >
                  Show More
                </button>
              )}
              {owner && (
                <>
                  <Link to={`/hotel/edit/${h._id}`}>
                    <EditOutlined className="text-warning" />
                  </Link>
                  <DeleteOutlined
                    // onClick={() => handleHotelDelete(h._id)}
                    className="text-danger"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
