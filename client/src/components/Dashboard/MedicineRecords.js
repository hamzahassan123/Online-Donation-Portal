import React from "react";
import { NavLink } from "react-router-dom";

function MedicineRecords() {
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <NavLink
                  className="ml-3 text-xl text-gray-300 "
                  exact
                  to="/userdashboard"
                >
                  MEDONOR |
                </NavLink>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    exact
                    to="/"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    exact
                    to="/medicinerecords"
                  >
                    Medicine Records
                  </NavLink>

                  <NavLink
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    exact
                    to="/"
                  >
                    Reports
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <div class="ml-3 relative">
                  <div>
                    <span className="text-gray-300">WELCOME | </span>{" "}
                    <span className="text-white">Abid Majeed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Medicines you donated !
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">Medicines detail</p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Medicines Name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Margot Foster , Panadol , paracetamol
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Quantity</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                34 , 5 ,47
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">status</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Pending
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default MedicineRecords;
