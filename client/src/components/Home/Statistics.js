import React from "react";
import statsimg from "../img/stats.jpg";
import "../Navbar/Navbar.css";

function Statistics() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-white">
                MEDONOR STATISTICS
              </h1>
              <div class="leading-relaxed">
                These are the statistics for last month.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">1.8K</h2>
              <p class="leading-relaxed">Total money Donated</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">35</h2>
              <p class="leading-relaxed">Total medicines Donated</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">4</h2>
              <p class="leading-relaxed">Medicines sent</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center stats-img-height"
              src={statsimg}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
