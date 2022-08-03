import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const UserForgotPassword = () => {
  const [user, setUser] = useState({
    email: "",
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
    const { email } = user;

    const res = await fetch("/forgot-password", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //it converts JSON to string because web servers dont understand JSON
        email,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Email");
    } else {
      window.alert("A password reset link has been set to your email");
    }
  };
  return (
    <div>
      <div>
        {" "}
        <section id="admin-bg ">
          <div id="admin-height" className="bg-gray-900  ">
            <section class="text-gray-400 bg-gray-900 body-font relative">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    Reset Password
                  </h1>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                  <form method="POST" className="flex flex-wrap -m-2">
                    <div class=" p-2 w-1/2 ">
                      <div class="relative">
                        <label
                          for="name"
                          class="leading-7 text-sm text-gray-400"
                        >
                          Enter your email to get password reset link
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={user?.email}
                          onChange={handleInputs}
                          className="w-full bg-gray-900 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                          placeholder="Enter Email"
                          required
                        />
                      </div>
                    </div>
                    <br />

                    <div class="p-2 w-full">
                      <button
                        onClick={PostData}
                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5"
                      >
                        Get Reset Link
                      </button>
                      <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <NavLink exact to="/signin">
                          Back
                        </NavLink>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserForgotPassword;
