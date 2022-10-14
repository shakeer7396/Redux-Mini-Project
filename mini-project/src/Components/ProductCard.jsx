import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts, getProducts } from "../Redux/action";

const ProductCard = ({ item }) => {
  const dispatch=useDispatch();

  const deleteHandler =(id)=>{
    dispatch(deleteProducts(id))
    .then(()=>dispatch(getProducts()));
  };

  return (
    <div  key={item.id} style={{border:"1px solid black",borderRadius:"5px",padding:"10px",width:"300px"}} >
      <div>{item.title}</div>
      <div>{item.category}</div>
      <div style={{height:"210px"}}>
        <img  src={`${item.imageSrc}`} alt="Product" style={{width:"100%",height:"inherit"}} />
      </div>
      <div  style={{paddingTop:"5px"}}>💰{item.price}</div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        {/* Add a onClick handler for delete functionality */}
        <button  onClick={()=>deleteHandler(item.id)} className="danger"> Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <Link to={`/edit/${item.id}`}>
        <button  className="edit">Edit Product</button>
        </Link>
      </div>
    </div>
  );
};
// data-cy={`product-card-${item.id}`}

export default ProductCard;
