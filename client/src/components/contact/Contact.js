import React from "react";
import Footer from "../Footer";
import Header from "../Home/Header";
import Navbar from "../Navbar/Navbar";
import ContactForm from "./ContactForm";

function Contact(props) {
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
      <ContactForm />
      <hr />
      <Footer />
    </div>
  );
}

export default Contact;
