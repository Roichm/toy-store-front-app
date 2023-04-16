import Category from "./category";
import { Link } from "react-router-dom";
const ProductsOfCategoriesHolder = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Backdrop with scrolling
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <Category name={"kyky"}/>
          <Category name={"lyky"} />
          <Link to={`/signIn`}>התחבר</Link>
          
        </div>
      </div>
    </div>
  );
};
export default ProductsOfCategoriesHolder;
