import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Home/Header";
import Navbar from "../Navbar/Navbar";
import RequestSection from "./RequestSection";

function RequestMedicine(props) {
  useEffect(() => {
    document.title = "MEDONOR - Request Medicine";
  });
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
      <RequestSection />
      <hr />
      <Footer />
    </div>
  );
}

export default RequestMedicine;
