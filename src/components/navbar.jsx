import ProductsOfCategoriesHolder from "./productsOfCategoriesHolder";
import ShoppingCartHolder from "./shoppingCartHolder";
import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
      <>
        <nav className="navbar ">
          <div className="container-fluid">
            <div className="d-inline">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <ProductsOfCategoriesHolder/>

              {/* <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
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
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          צעצועים
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body overflow-y-auto">
                          <ul className="list-group list-group-flush">
                            <a href="#" className="list-group-item">
                              בובות
                            </a>
                            <a href="#" className="list-group-item">
                              מכוניות
                            </a>
                            <a href="#" className="list-group-item">
                              כלי נגינה
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          משחקים
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            <a href="#" className="list-group-item">
                              בובות
                            </a>
                            <a href="#" className="list-group-item">
                              מכוניות
                            </a>
                            <a href="#" className="list-group-item">
                              כלי נגינה
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          יצירה ופנאי
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            <a href="#" className="list-group-item">
                              בובות
                            </a>
                            <a href="#" className="list-group-item">
                              מכוניות
                            </a>
                            <a href="#" className="list-group-item">
                              כלי נגינה
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}


            </div>
  
            <div className="d-inline">
              <Link href="/">
                <img
                  src="https://d1ozqqh7vh3ykm.cloudfront.net/2023/09/106461641/temp20230302-11185-u2236h.png"
                  alt=""
                  id="logo"
                />
              </Link>
            </div>
  
            <div className="d-inline">
              <Link className="navbar-brand" to="/signIn">
                <i className="bi bi-person"></i>
              </Link>
  
              <a
                className="navbar-brand"
                data-bs-toggle="offcanvas"
                href="#offcanvasCart"
                role="button"
                aria-controls="offcanvasCart"
              >
                <i className="bi bi-cart3"></i>
              </a>
  
              {/* <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabindex="-1"
                id="offcanvasCart"
                aria-labelledby="offcanvasCartLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasCartLabel">
                    סל קניות
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="card mb-3" style={{ "max-width": "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="https://cdn.pixabay.com/photo/2018/05/31/15/06/see-no-evil-3444212__340.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some description card</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              >
                                <i className="bi bi-plus"></i>
                              </button>
                              <input
                                id="quantityForm"
                                min="0"
                                name="quantity"
                                value="1"
                                type="number"
                                className="form-control form-control-sm"
                              />
                              <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              >
                                <i className="bi bi-dash"></i>
                              </button>
                            </div>
  
                            <p className="d-inline">
                              <strong>10$</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <ShoppingCartHolder/>

              <NavLink className="navbar-brand" to="/about">
                אודות
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
  };
  export default Navbar;
  