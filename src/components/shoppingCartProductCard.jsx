import PlusminusInputCounter from "./common/plusminusInputCounter";
const ShoppingCartProductCard = ({ _id, name, description, image, price }) => {

  return (
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
              <PlusminusInputCounter/>

              <p className="d-inline">
                <strong>10$</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCartProductCard;
