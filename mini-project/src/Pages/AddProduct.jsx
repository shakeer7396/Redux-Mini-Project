import React from "react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts, getProducts } from "../Redux/AppReducer/action";

const initialState = {
  title: "",
  category: "",
  imageSrc: "",
  price: 0
}

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "category":
      return { ...state, category: action.payload };
    case "image":
      return { ...state, imageSrc: action.payload };
    case "price":
      return { ...state, price: action.payload };

    default:
      return state;
  }
};


const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productState, setProductState] = useReducer(
    reducerFunction,
    initialState
  );

  const addHandler = () => {
    if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
      dispatch(addProducts(productState))
        .then(() => dispatch(getProducts()))
        .then(() => {
          navigate("/")
        });
    }
  };

  return (
    <div>
      <h3>Add Product</h3>
      <div style={{ textAlign: "left", fonstSize: "19px,width:fit-content", margin: "auto", width: "30%", boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", padding: "20px", }}>

        <div style={{ padding: "5px 0", display: "flex" }}>
          <label style={{ width: "160px" }}>Product title</label>
          <input type="text" value={productState.title}
            onChange={(e) =>
              setProductState({ type: "title", payload: e.target.value })} />
        </div>

        <div style={{ padding: "5px 0", display: "flex" }}>
          <label style={{ width: "160px" }}>Product Category</label>
          <select value={productState.category}
            onChange={(e) => setProductState({ type: "category", payload: e.target.value })}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>

        <div style={{ padding: "5px 0", display: "flex" }}>
          <label style={{ width: "160px" }}>Product Image</label>
          <input
            type="url"
            placeholder="Image URL"
            value={productState.image}
            onChange={(e) =>
              setProductState({ type: "image", payload: e.target.value })} />
        </div>

        <div style={{ padding: "5px 0", display: "flex" }}>
          <label style={{ width: "160px" }}>Product Price</label>
          <input type="text"
            value={productState.price} onChange={(e) =>
              setProductState({ type: "price", payload: e.target.value })} />
        </div>

        <div style={{ textAlign: "center" }}>
          <button onClick={addHandler}>Add</button>
        </div>

      </div>
    </div>
  );
};

export default AddProduct;
