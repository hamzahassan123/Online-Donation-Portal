import React from "react";

import medicineimg from "../img/med 5.png";
import { NavLink } from "react-router-dom";

function RequestSection() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Request your required
              <br class="hidden lg:inline-block" />
              Medicines here
            </h1>
            <p class="mb-8 leading-relaxed">
              NGO's after verifying thereselves can request medicines they need
              , if those medicines are available , those medicines will be
              delivered using money donated by donors.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <NavLink exact to="/requestnow">
                  Request Now
                </NavLink>
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={medicineimg}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default RequestSection;
