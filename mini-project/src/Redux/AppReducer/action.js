//Write the action creator functions here
import * as types from "./actionTypes";
import axios from "axios";


//get products
const getProducts = () => (dispatch) =>{
    dispatch({type:types.GET_PRODUCTS_REQUEST})

   return axios.get("https://mini-project-redux.herokuapp.com/products")
    .then((r)=>{dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})})
    .then((r)=>{dispatch({type:types.GET_PRODUCTS_FAILURE,payload:r})})
}

//Add products
const addProducts =(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_PRODUCT_REQUEST});

    return axios
    .post("https://mini-project-redux.herokuapp.com/products",payload)
    .then((r)=>{dispatch({type:types.ADD_PRODUCT_SUCCESS,paylod:r.data})})
    .catch((e)=>{dispatch({type:types.ADD_PRODUCT_FAILURE,paylod:e})})
}
//Edit Products
const editProducts = (id,payload) => (dispatch) =>{
    dispatch({type:types.EDIT_PRODUCT_REQUEST})

    return axios.patch(`https://mini-project-redux.herokuapp.com/products/${id}`,payload)
    .then((r)=>{dispatch({type:types.EDIT_PRODUCT_SUCCESS,payload:r.data})})
    .catch((e)=>{dispatch({type:types.EDIT_PRODUCT_FAILURE,payload:e})})
};


//delete products
const deleteProducts =(id)=> (dispatch) =>{
    dispatch({type:types.DELETE_PRODUCT_REQUEST})

    return axios.delete(`https://mini-project-redux.herokuapp.com/products/${id}`)
    .then((r)=>{dispatch({type:types.DELETE_PRODUCT_SUCCESS,payload:r})})
    .catch((e)=>{dispatch({type:types.DELETE_PRODUCT_FAILURE,payload:e})})
    
    }

export {getProducts,addProducts,editProducts,deleteProducts}