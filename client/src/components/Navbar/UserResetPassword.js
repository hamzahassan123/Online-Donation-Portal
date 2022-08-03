import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

function UserResetPassword() {
  const [user, setUser] = useState({
    password: "",
    cpassword: "",
  });
  const [searchParams] = useSearchParams();
  const user_id = searchParams.get("user_id");

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
    const { password, cpassword } = user;

    const res = await fetch(`/reset-password/${user_id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //it converts JSON to string because web servers dont understand JSON

        password,
        cpassword,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("there is some issue resetting password");
    } else {
      window.alert("password reset");
    }
  };

  return (
    <div>
      <section id="admin-bg ">
        <div id="admin-height" className="bg-gray-900  ">
          <section class="text-gray-400 bg-gray-900 body-font relative">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Reset Password
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  You can Reset password here.
                </p>
              </div>
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                  <div class="p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={user?.password}
                        onChange={handleInputs}
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter password"
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div class="block p-2 w-1/2">
                    <div class="relative">
                      <label for="name" class="leading-7 text-sm text-gray-400">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="name"
                        name="cpassword"
                        value={user?.cpassword}
                        onChange={handleInputs}
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Re-enter your password"
                        required
                      />
                    </div>
                  </div>

                  <div class="p-2 w-full">
                    <button
                      onClick={PostData}
                      class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5"
                    >
                      Change Password
                    </button>
                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <NavLink exact to="/">
                        Back
                      </NavLink>
                    </button>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default UserResetPassword;
