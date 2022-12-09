import React from "react";
import Products from "../component/Products";
import TabComponent from "./../component/tabTrw/TabComponent";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
const index = () => {
  return (
    <div className="container-page">
      <TabComponent />
      <Products />
    </div>
  );
};

export default index;
