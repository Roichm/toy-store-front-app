import { Link } from "react-router-dom";
const GalleryProductCard = ({ _id }) => {
  return (
    <div className="card mx-3 my-4" style={{ width: "30%" }}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
        className="card-img-top hover-overlay"
        alt="Sunset Over the Sea"
      />
      <div className="card-body">
        <h5 className="card-title">10$</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <div className="d-grid mb-3 ">
          <Link
            className={`btn btn-outline-primary`}
            to={`/productDescription`}
          >
            פרטים נוספים
          </Link>
        </div>

        <div className="d-grid mb-3 ">
          <Link
            className={`btn btn-outline-success`}
            to={`/productGallery/edit/${_id}`}
          >
            עריכה
          </Link>
        </div>

        <div className="d-grid mb-3 ">
          <Link
            className={`btn btn-outline-danger`}
            to={`/productGallery/delete/${_id}`}
          >
            מחיקה
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryProductCard;
