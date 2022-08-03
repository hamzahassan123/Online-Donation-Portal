import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { userMedDonation } from "../service/api";

function MedicineDonationForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    medicine_name: "",
    quantity: "",
    date: "",
    approval_status: "pending",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    //object destructuring
    const { medicine_name, quantity, date, approval_status } = user;

    const res = await fetch("/usermedicinedonation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //it converts JSON to string because web servers dont understand JSON

        medicine_name,
        quantity,
        date,
        approval_status,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Medicine Information or expiry date");
    } else {
      window.alert("Medicine Added Successfull");

      navigate("/");
    }
  };
  return (
    <section className="text-white bg-gray-900 body-font relative">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden ">
            <div className="flex flex-col text-center w-full mb-12 mt-20">
              <h1 className="sm:text-3xl top-10 text-2xl font-medium title-font mb-4 text-white">
                Donate Medicines
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Your medicines help the poor and needy people .
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-gray-900 sm:p-6">
                  <h1 className="sm:text-3xl top-10 text-2xl font-medium title-font mb-4 text-white">
                    Ship these Medicines On This address : "XYZ"
                  </h1>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        className="block text-sm font-medium text-gray-200"
                      >
                        Medicine name
                      </label>
                      <input
                        type="text"
                        name="medicine_name"
                        id="medicine_name"
                        value={user?.medicine_name}
                        onChange={(e) => handleInputs(e)}
                        autocomplete="given-name"
                        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-gray-900"
                        placeholder="Enter your medicine name"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="last-name"
                        className="block text-sm font-medium text-gray-200"
                      >
                        Medicine Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        min="1"
                        value={user?.quantity}
                        onChange={(e) => handleInputs(e)}
                        autocomplete="family-name"
                        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-gray-900"
                        placeholder="Enter the quantity of medicine"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="city"
                        className="block text-sm font-medium text-gray-200"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="Date"
                        name="date"
                        id="date"
                        value={user?.date}
                        onChange={(e) => handleInputs(e)}
                        autocomplete="address-level2"
                        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-gray-900"
                      />
                    </div>
                    {/* <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        className="block text-sm font-medium text-gray-200"
                      >
                        Status
                      </label>
                      <input
                        type="text"
                        name="medicine_name"
                        id="medicine_name"
                        value={user?.approval_status}
                        onChange={(e) => handleInputs(e)}
                        autocomplete="given-name"
                        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-gray-900"
                        placeholder="Enter your medicine name"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 bg-gray-900 space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2"></div>
              </div>
            </div>
            <div className="px-4 py-3  text-right sm:px-6 bg-gray-900">
              <button
                type="submit"
                onClick={PostData}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default MedicineDonationForm;
