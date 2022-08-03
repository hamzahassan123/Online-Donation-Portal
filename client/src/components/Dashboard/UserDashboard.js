import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../../App";

function UserDashboard() {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const {state: auth, dispatch} = useContext(UserContext);

  console.log(auth);

  const callUserDashboard = async () => {
    try {
      const res = await fetch("/userdashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
      setRecords(data);
    } catch (error) {
      console.log(error);
      navigate("/signin");
    }
  };

  useEffect(() => {
    callUserDashboard();
  }, []);

  return (
    <div>
      <div class="min-h-full">
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
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  <div class="ml-3 relative">
                    <form method="GET">
                      <span className="text-gray-300">WELCOME | </span>{" "}
                      <span className="text-white">{ auth?.name }</span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div class="px-4 py-6 sm:px-0">
              <div class="border-4 border border-gray-200 rounded-lg h-96">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="py-3 px-6">
                        Medicine Name
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Quantity
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => (
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="py-3 px-6"> {record.medicine_name}</td>
                        <td class="py-3 px-6"> {record.quantity}</td>
                        <td class="py-3 px-6"> {record.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
