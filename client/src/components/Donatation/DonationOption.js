import React from "react";

import MedicineImg from "../img/med 1.png";
import MoneyImg from "../img/money 1.png";
import foodImg from "../img/food.png";
import clothesImg from "../img/clothes.png";
import bloodImg from "../img/blood.png";
import booksImg from "../img/books.png";
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
                This will be used for sending medicnes to needy ones.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <a
                  href="https://buy.stripe.com/test_4gw5llavn5E39C8dQQ"
                  target="_blank"
                >
                  {" "}
                  Donate Money
                </a>
              </button>
            </div>
            {/* test*/}
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={bloodImg}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Donate Blood
              </h2>
              <p class="leading-relaxed text-base">
                This will be used for sending blood to needy ones.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <NavLink exact to="/donateblood">
                  {" "}
                  Donate Blood
                </NavLink>
              </button>
            </div>
            {/* test*/}
            {/* test 2 */}
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={clothesImg}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Donate Clothes
              </h2>
              <p class="leading-relaxed text-base">
                This will be used for sending clothes to needy ones.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <NavLink exact to="/donateclothes">
                  {" "}
                  Donate Clothes
                </NavLink>
              </button>
            </div>
            {/* test 2 */}
            {/* test*/}
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={booksImg}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Donate Books
              </h2>
              <p class="leading-relaxed text-base">
                This will be used for sending Books to needy ones.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <NavLink exact to="/donatebooks">
                  {" "}
                  Donate Books
                </NavLink>
              </button>
            </div>
            {/* test*/}
            {/* test 2 */}
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={foodImg}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">
                Donate Food
              </h2>
              <p class="leading-relaxed text-base">
                This will be used for sending food to needy ones.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <NavLink exact to="/donatefood">
                  {" "}
                  Donate Food
                </NavLink>
              </button>
            </div>
            {/* test 2 */}

          </div>
        </div>
      </section>
    </div>
  );
}

export default DonationOption;
