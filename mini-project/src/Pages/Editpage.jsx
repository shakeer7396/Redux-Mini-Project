import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProducts, getProducts } from "../Redux/action";

const Editpage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {id}=useParams();

  const productList =useSelector((store)=>store.reducer.products)
  const [productTitle,setProductTitle] = useState('');
  const [productPrice,setProductPrice] = useState(0);

  const updateHandler = () =>{
    if(productTitle && productPrice){
      const payload={
        title:productTitle,
        price:productPrice,
      }

      dispatch(editProducts(id,payload))
      .then(()=>dispatch(getProducts()))
      .then(()=>{
        navigate("/");
      })
    } 
  };

  useEffect(()=>{
    if(productList.length===0){
      dispatch(getProducts());
    }
  });

  useEffect(()=>{
    if(id){
      const currentProduct = productList.find(
        (product)=>product.id === Number(id)
      );
      if(currentProduct){
        setProductTitle(currentProduct.title);
        setProductPrice(currentProduct.price);
      }
    }
  },[id,productList])

  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>

      <div>
        <label>Product Title</label>
        <input type="text" value={productTitle} onChange={(e)=>setProductTitle(e.target.value)} />
      </div>

      <div>
        <label>Product Price</label>
        <input type="number" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} />
      </div>

      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button onClick={updateHandler}>Update</button>
      </div>

    </div>
  );
};

export default Editpage;
