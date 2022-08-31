import React from "react";
import Footer from "../../Footer";
import Header from "../../Home/Header";
import Navbar from "../../Navbar/Navbar";
import BookDonationForm from "./BookDonationForm";
import bookImg from "../../img/books.png";

function DonateBook(props) {
  return (
    <div>
      <Navbar />
      <hr />
      <Header
        Himg={bookImg}
        firsttitle={props.headerDetails.ftitle}
        secondtitle={props.headerDetails.stitle}
        headerText={props.headerDetails.htext}
      />
      <hr />
      <BookDonationForm />
      <hr />
      <Footer />
    </div>
  );
}

export default DonateBook;
