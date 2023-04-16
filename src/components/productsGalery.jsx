import { Link } from "react-router-dom";
import GalleryProductCard from "./galleryProductCard";
const ProductsGallery = ({ category, product, _id }) => {
  return (
    <div className=" container text-center ">
      <div className="row g-4">
        <h2>category/product name</h2>
      </div>
      <div className="row">
        <div className="d-grid mb-3 ">
          <Link
            className={`btn btn-outline-primary`}
            to={`/productGallery/createCard`}
          >
            צור מוצר חדש
          </Link>
        </div>
      </div>
      <div className="row d-flex justify-content-start ">
          <GalleryProductCard/>
          <GalleryProductCard/>
          <GalleryProductCard/>
          <GalleryProductCard/>
          <GalleryProductCard/>

        <div className="mb-10">
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;
