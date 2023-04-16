import ProductNameLink from "./productsNameLink";
import {Link} from 'react-router-dom';
const Category = ({name}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <Link
          className="accordion-button collapsed link"
          type="btn"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
          to={`/${name}`}
        >
          {name}
        </Link>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className="accordion-body">
          <ul className="list-group list-group-flush">
            <ProductNameLink name={"בובות"} _id={1} />
            <ProductNameLink name={"מכוניות"} _id={2} />
            <ProductNameLink name={"כלי נגינה"} _id={3} />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Category;
