import React from "react";
import {useState} from "react"
import {useSearchParams} from "react-router-dom"
import {useEffect} from "react"
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
   const [Searchparams,SetSearchparams]=useSearchParams()
  const [category,Setcategory]=useState(Searchparams.getAll("category")||[]);
 const dispatch=useDispatch();
//  const [singledata,SetSingle]=useState({});


  useEffect(()=>{
    
      SetSearchparams({category:category})
      let categoryparams={
            params:{
            category:Searchparams.getAll("category")
            }
      }
      dispatch(getProducts(categoryparams))


  },[category,Searchparams,dispatch,SetSearchparams])

console.log(category)
  const handleCheckBox=(e)=>{
    const point=e.target.value;
      let newList=[...category];
      if(category.includes(point)){
        newList.splice(newList.indexOf(point),1)
      }
      else{
        newList.push(point)
      }
    Setcategory(newList)
  }
   
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div>
        <div>
          <input type="checkbox" value="Electronics" onChange={handleCheckBox} defaultChecked={category.includes("Electronics")}/>
          <label>Electronics</label>
        </div>
        <div>
          <input type="checkbox" value="Cosmetics" onChange={handleCheckBox} defaultChecked={category.includes("Cosmetics")}/>
          <label>Cosmetics</label>
        </div>
        <div>
          <input type="checkbox" value="Shoes" onChange={handleCheckBox} defaultChecked={category.includes("Shoes")}/>
          <label>Shoes</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
