import React, { useState } from "react";
import "../../Admin.css";
import { NavLink } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import axios from "axios";

function AddMedicineRequest() {
  const [request, setRequest] = useState({
    medicine_name: "",
    quantity: "",
    status: "",
  });

  const addRequestHandler = async () => {
    const res = await axios.post(
      "/add/medicine-request",
      request,
      {
        withCredentials: true
      }
    );

    if (res.status !== 200) {
      window.alert("Somethin went wrong!");
    }

    window.alert("Medicine Request added!");
  }

  const handleInputs = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setRequest(request => { return { ...request, [name]: value } });
  };
  return (
    <div>
      <Navbar />
      {" "}
      <section id="admin-bg ">
        <div id="admin-height" className="bg-gray-900  ">
          <section class="text-gray-400 bg-gray-900 body-font relative">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Add new Medicine
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Admin can add medcine request records.
                </p>
              </div>
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        Medicine Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="medicine_name"
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter medicine name"
                        required
                        onChange={(e) => handleInputs(e)}
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label
                        for="email"
                        class="leading-7 text-sm text-gray-400"
                      >
                        Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                        onChange={(e) => handleInputs(e)}
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <div class="relative">
                      <label
                        for="message"
                        class="leading-7 text-sm text-gray-400"
                      >
                        Approval Status
                      </label>
                      <input
                        type="text"
                        id="status"
                        name="status"
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                        onChange={(e) => handleInputs(e)}
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <button onClick={addRequestHandler} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5">
                      Add Medicine Request
                    </button>
                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <NavLink exact to="/admin">
                        Back
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default AddMedicineRequest;
