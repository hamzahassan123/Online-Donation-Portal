import React from "react";

function Causes() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-10">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Causes
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            These are the causes behind this idea.
          </p>
        </div>
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-white text-lg title-font font-medium mb-3">
                      Wastage of Medicine
                    </h2>
                    <p class="leading-relaxed text-base">
                      A large amount of medicines get expired every day without
                      being used.These medicines after getting expired become a
                      waste.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2 md:w-full">
                <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-white text-lg title-font font-medium mb-3">
                      People Can't Afford
                    </h2>
                    <p class="leading-relaxed text-base">
                      About 68% people in Pakistan can't afford prescribed
                      medicines Due to high poverty rate in Pakistan and its
                      continuously increasing day by day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Causes;
