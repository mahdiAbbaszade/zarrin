import React from "react";
import Product from "./CardProduct";
import P1 from "./../assest/p1.jpg";
import P2 from "./../assest/p2.png";
import P3 from "./../assest/p3.png";
import P4 from "./../assest/p4.jpeg";
import P5 from "./../assest/p5.jpeg";
import P6 from "./../assest/p6.jpeg";
import Slider from "./Slider";

const Products = () => {
  return (
    <div className="mt-5">
      <Slider />
      <div className="container-products">
        <Product
          src={P3}
          explain="PITMAN ARM هزار خاری جعبه فرمان"
        />
        <Product
          src={P2}
          explain="براکت نصب جعبه فرمان بر روی شاسی"
        />
        <Product src={P1} explain="OIL TANK" />
      </div>
      <div className=" container-products mt-2">
        <Product
          src={P6}
          explain="کنس بلبرینگ جعبه فرمان 8098"
        />
        <Product
          src={P5}
          explain="کیت تعمیرات جعبه فرمان 8098"
        />
        <Product
          src={P4}
          explain="مجموعه سیستم فرمان خودرو"
        />
      </div>
    </div>
  );
};

export default Products;
