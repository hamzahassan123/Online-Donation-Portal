import React from "react";
import Footer from "../../Footer";
import Header from "../../Home/Header";
import Navbar from "../../Navbar/Navbar";
import BloodDonationForm from "./BloodDonationForm";
import bloodImg from "../../img/blood.png";

function DonateBlood(props) {
  return (
    <div>
      <Navbar />
      <hr />
      <Header
        Himg={bloodImg}
        firsttitle={props.headerDetails.ftitle}
        secondtitle={props.headerDetails.stitle}
        headerText={props.headerDetails.htext}
      />
      <hr />
      <BloodDonationForm />
      <hr />
      <Footer />
    </div>
  );
}

export default DonateBlood;
