import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../Redux/AppReducer/action";
import { useSearchParams } from "react-router-dom";

const Productpage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((store) => store.AppReducer.products);
  const [searchParams] = useSearchParams();

  const compareFunction = (a, b) => {
    let getSortBy = searchParams.get("sortBy")
    if (getSortBy === 'asc') {
      return Number(a.price) - Number(b.price);
    }
    else if (getSortBy === "desc") {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  };

  useEffect(() => {
    if (productList?.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, productList?.length]);


  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,3fr))", justifyItems: "center", gap: "10px", border: "1px solid black" }}>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
        {productList?.length > 0 && productList?.sort(compareFunction).map((item) => {
          return <ProductCard key={item.id} item={item} />

        })}
      </div>
    </div>
  );
};


export default Productpage;
