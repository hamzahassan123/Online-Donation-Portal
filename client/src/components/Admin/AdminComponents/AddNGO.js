import React, { useState } from "react";
import "../Admin.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AddNGO() {
  let letters = /^[a-zA-Z ]*$/;
  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const [NGO, setNGO] = useState({
    name: "",
    NGO_email: "",
  });

  const addNGOHandler = async () => {
    if (!NGO.name.match(letters)) {
      document.getElementById("name_error").innerHTML =
        "name must contain only alphabets";
      return false;
    } else if (!regx.test(NGO.NGO_email)) {
      document.getElementById("email_error").innerHTML =
        "invalid email address";
      document.getElementById("name_error").innerHTML = "";
      return false;
    } else {
      document.getElementById("name_error").innerHTML = "";
      document.getElementById("email_error").innerHTML = "";
    }

    const res = await axios.post("/add-NGO", NGO);

    if (res.status !== 200) {
      window.alert("Somethin went wrong!");
    }

    window.alert("NGO added!");
  };

  const handleInputs = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setNGO((NGO) => {
      return { ...NGO, [name]: value };
    });
  };

  return (
    <div>
      {" "}
      <section id="admin-bg ">
        <div id="admin-height" className="bg-gray-900  ">
          <section class="text-gray-400 bg-gray-900 body-font relative">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Add NGO To System Record
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  You can add NGOs.
                </p>
              </div>
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        NGO Name
                      </label>
                      <input
                        onChange={(e) => handleInputs(e)}
                        type="text"
                        id="name"
                        name="name"
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter NGO Name"
                        required
                      />
                    </div>
                    <label
                      id="name_error"
                      class="leading-7 text-sm text-gray-400 text-red-500 relative bottom-0"
                    ></label>
                  </div>
                  <br />
                  <div class="block p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        NGO's Official Email ID
                      </label>
                      <input
                        onChange={(e) => handleInputs(e)}
                        type="text"
                        id="name"
                        name="NGO_email"
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter NGO's Official Email"
                        required
                      />
                    </div>
                    <label
                      id="email_error"
                      class="leading-7 text-sm text-gray-400 text-red-500 relative bottom-0"
                    ></label>
                  </div>

                  <div class="p-2 w-full">
                    <button
                      onClick={addNGOHandler}
                      class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5"
                    >
                      Add NGO
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

export default AddNGO;
