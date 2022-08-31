import React, { useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Causes from "./Causes";
import Footer from "../Footer";
import AppSteps from "./AppSteps";
import Statistics from "./Statistics";
import donationIMG from '../img/donation.jpg'

function Home(props) {
  useEffect(() => {
    document.title = "MEDONOR - Home";
  });
  return (
    <div>
      <Navbar />
      <hr />
      <Header
        Himg={donationIMG}
        firsttitle={props.headerDetails.ftitle}
        secondtitle={props.headerDetails.stitle}
        phadith={props.headerDetails.hadith}
        headerText={props.headerDetails.htext}
      />
      <hr />
      <Causes />
      <hr />

      <AppSteps />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
