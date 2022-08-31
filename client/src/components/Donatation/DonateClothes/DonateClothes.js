import React from "react";
import Footer from "../../Footer";
import Header from "../../Home/Header";
import Navbar from "../../Navbar/Navbar";
import ClothesDonationForm from "./ClothesDonationForm";
import clothesImg from "../../img/clothes.png";

function DonateClothes(props) {
  return (
    <div>
      <Navbar />
      <hr />
      <Header
        Himg={clothesImg}
        firsttitle={props.headerDetails.ftitle}
        secondtitle={props.headerDetails.stitle}
        headerText={props.headerDetails.htext}
      />
      <hr />
      <ClothesDonationForm />
      <hr />
      <Footer />
    </div>
  );
}

export default DonateClothes;
