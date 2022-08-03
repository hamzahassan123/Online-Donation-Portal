import React from "react";
import Footer from "../../Footer";
import Header from "../../Home/Header";
import Navbar from "../../Navbar/Navbar";
import MedicineDonationForm from "./MedicineDonationForm";

function DonateMedicine(props) {
  return (
    <div>
      <Navbar />
      <hr />
      <Header
        firsttitle={props.headerDetails.ftitle}
        secondtitle={props.headerDetails.stitle}
        headerText={props.headerDetails.htext}
      />
      <hr />
      <MedicineDonationForm />
      <hr />
      <Footer />
    </div>
  );
}

export default DonateMedicine;
