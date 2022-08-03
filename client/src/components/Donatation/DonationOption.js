import React from "react";

import MedicineImg from "../img/med 1.png";
import MoneyImg from "../img/money 1.png";
import { NavLink } from "react-router-dom";

function DonationOption() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                What Will You Donate
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                You can choose whatever you want to donate.
              </p>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={MedicineImg}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Donate Medicine
              </h2>
              <p class="leading-relaxed text-base">
                Here you can donate unused medicines that might help poor people
                who cant afford medicines.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <NavLink exact to="/donatemedicine">
                  {" "}
                  Donate Medicine
                </NavLink>
              </button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={MoneyImg}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Donate Money
              </h2>
              <p class="leading-relaxed text-base">
                This will be used for dending medicnes to needy ones.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <NavLink exact to="/donatemoney">
                  {" "}
                  Donate Money
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DonationOption;
