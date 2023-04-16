import {Link} from 'react-router-dom';
const ProductsNameLink = ({_id, name}) => {
  
  return (
    <Link to={`/productsGalery?name=${name}`} className="list-group-item ">
     {name}
    </Link>
  );
};
export default ProductsNameLink;
