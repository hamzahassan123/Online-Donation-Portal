import React from "react";
import "../Admin.css";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

function AddMedicine() {
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
                  Remove Medicine
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Admin can Remove medcine records.
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
                        name="name"
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter medicine name"
                        required
                      />
                    </div>
                  </div>
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        Quantity of medicines to remove
                      </label>
                      <input
                        type="number"
                        id="name"
                        name="name"
                        min="1"
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter medicine quantity"
                        required
                      />
                    </div>
                  </div>

                  <div class="p-2 w-full">
                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5">
                      Remove Medicines
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

export default AddMedicine;
