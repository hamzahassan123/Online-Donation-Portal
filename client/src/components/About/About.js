import React, { useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import "../Navbar/Navbar.css";
import Header from "../Home/Header";
import Team from "./Team";
import Footer from "../Footer";

function About(props) {
  // document.title("MEDONOR - About Us");

  useEffect(() => {
    document.title = "MEDONOR - About Us";
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
      <Team />
      <hr />
      <Footer />
    </div>
  );
}

export default About;
