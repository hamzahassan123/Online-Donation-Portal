import React from "react";

import my_img from "../img/my-image.png";
import ali_img from "../img/tariq.png";
// import "../Navbar.css";

function Team() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              We are a team of duo working on Final Year Project.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={my_img}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-white">
                    Hamza Hassan
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI & backend Developer</h3>
                  <p class="mb-4">
                    UI design and Development and Backend development
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={ali_img}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-white">
                    Muhammad Tariq
                  </h2>
                  <h3 class="text-gray-500 mb-3">Data Base & Testing </h3>
                  <p class="mb-4">
                    Database configuration and testing of the project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
