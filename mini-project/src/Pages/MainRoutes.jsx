import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import AddProduct from "./AddProduct";
import Editpage from "./Editpage";
import Homepage from "./Homepage";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/add" element={
      <ReqAuth><AddProduct /></ReqAuth>} />
      <Route path="/edit/:id" element={<Editpage />} />
    </Routes>
  );
};

export default MainRoutes;
