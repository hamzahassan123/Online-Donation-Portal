import React from "react";

import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Causes from "./Causes";
import Footer from "../Footer";
import AppSteps from "./AppSteps";
import Statistics from "./Statistics";

function Home(props) {
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
      <Causes />
      <hr />
      <Statistics />
      <hr />
      <AppSteps />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
