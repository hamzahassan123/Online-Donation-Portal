import React from "react";
import Footer from "../../Footer";
import Header from "../../Home/Header";
import Navbar from "../../Navbar/Navbar";
import FoodDonationForm from "./FoodDonationForm";
import foodImg from "../../img/food.png";

function DonateFood(props) {
  return (
    <div>
      <Navbar />
      <hr />
      <Header
        Himg={foodImg}
        firsttitle={props.headerDetails.ftitle}
        secondtitle={props.headerDetails.stitle}
        headerText={props.headerDetails.htext}
      />
      <hr />
      <FoodDonationForm />
      <hr />
      <Footer />
    </div>
  );
}

export default DonateFood;
