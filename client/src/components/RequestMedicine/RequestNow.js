import React, { useState } from "react";
import "../Admin/Admin.css";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

function AddMedicine(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    medicine_name: "",
    quantity: "",
    NGO_Name: "",
    status: "pending",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    console.log(e.target.value);

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    // window.alert("i am working");

    //object destructuring
    const { medicine_name, quantity, NGO_Name, status } = user;

    const res = await fetch("/requestmedicineserver", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //it converts JSON to string because web servers dont understand JSON

        medicine_name,
        quantity,
        NGO_Name,
        status,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Request Failure");
    } else {
      window.alert("Request Successfull");

      navigate("/");
    }
  };
  return (
    <div>
      <Navbar /> <hr />
      <Header
        firsttitle={props.headerDetails.ftitle}
        secondtitle={props.headerDetails.stitle}
        headerText={props.headerDetails.htext}
      />
      <hr />
      <section id="admin-bg ">
        <div id="admin-height" className="bg-gray-900  ">
          <section class="text-gray-400 bg-gray-900 body-font relative">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Request Medicine
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  You can request medicine you want, it will be delivered to you
                  if it is available.
                </p>
              </div>
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <form method="POST" class="flex flex-wrap -m-2">
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        Medicine Name
                      </label>
                      <input
                        type="text"
                        id="med_name"
                        name="medicine_name"
                        value={user?.medicine_name}
                        onChange={handleInputs}
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter Medicine name you want"
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div class="block p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={user?.quantity}
                        onChange={handleInputs}
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter the meicine quantity you want"
                        required
                      />
                    </div>
                  </div>
                  <div class="block p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        NGO Name
                      </label>
                      <input
                        type="text"
                        id="ngo_name"
                        name="NGO_Name"
                        value={user?.NGO_Name}
                        onChange={handleInputs}
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter Your NGO name"
                        required
                      />
                    </div>
                  </div>

                  <div class="p-2 w-full">
                    <button
                      onClick={PostData}
                      class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5"
                    >
                      Submit Request
                    </button>
                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <NavLink exact to="/requestmedicine">
                        Back
                      </NavLink>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
}

export default AddMedicine;
