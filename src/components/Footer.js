import React from "react";
import storeImg from "../img/storeicon.png";

const Footer = () => {
  return (
    <div className="text-center p-4 border-top">
      <img src={storeImg} alt="" width={30} className="me-2" />
      <span className="text-dark fw-bold"> Aduke Stores </span> | All Rights
      Reserved.
    </div>
  );
};

export default Footer;
