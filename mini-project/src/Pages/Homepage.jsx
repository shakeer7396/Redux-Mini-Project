import React from "react";
import Sidebar from "../Components/Sidebar";
import Productpage from "./Productpage";

const Homepage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Productpage />
    </div>
  );
};

export default Homepage;
