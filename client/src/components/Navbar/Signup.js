import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  let letters = /^[a-zA-Z ]*$/;
  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    role: "DONOR",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendUserData = () => {
    if (!user.name.match(letters)) {
      document.getElementById("name_error").innerHTML =
        "name must contain only alphabets";
      return false;
    } else if (!regx.test(user.email)) {
      document.getElementById("email_error").innerHTML =
        "invalid email address";
      return false;
    } else if (user.password.length < 8) {
      document.getElementById("password_error").innerHTML =
        "Password should contain 8 chracters atleast";

      return false;
    } else if (user.password !== user.cpassword) {
      document.getElementById("cpassword_error").innerHTML =
        "password and confirm password must be same";
      document.getElementById("password_error").innerHTML = "";
      return false;
    } else {
      document.getElementById("cpassword_error").innerHTML = "";
      document.getElementById("password_error").innerHTML = "";
      document.getElementById("name_error").innerHTML = "";
      document.getElementById("email_error").innerHTML = "";
      document.getElementById("role_error").innerHTML = "";
    }

    PostData();
  };

  const PostData = async (e) => {
    //e.preventDefault();

    //object destructuring
    const { name, email, password, cpassword, role } = user;

    const res = await fetch("http://localhost:5000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //it converts JSON to string because web servers dont understand JSON

        name,
        email,
        password,
        cpassword,
        role,
      }),
    });

    console.log(res);

    if (res.status === 201) {
      document.getElementById("role_error").innerHTML = "";
      document.getElementById("email_error").innerHTML = "";
      document.getElementById("name_error").innerHTML = "";
      document.getElementById("password_error").innerHTML = "";
      document.getElementById("cpassword_error").innerHTML = "";
      window.alert("Check your email for verfication link");
    } else if (res.status === 404) {
      document.getElementById("role_error").innerHTML =
        "NGO is not in our record contact admin";
      document.getElementById("name_error").innerHTML = "";
    } else if (res.status === 400) {
      document.getElementById("email_error").innerHTML = "Email already exist";
    }
  };

  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            {/* <div className="flex flex-col text-center w-full mb-12 ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white mt-20">
                Sign Up Page
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Sign Up to perform actions.
              </p>
            </div> */}
            <h1 class="title-font font-medium text-3xl text-white">
              Register your self to perform donations or request.
            </h1>
            <p class="leading-relaxed mt-4">
              You won't be able to perform any action without being Register.
            </p>
          </div>

          <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h1 class="text-white text-lg font-medium title-font mb-5">
              SIGN UP
            </h1>
            <div class="relativemb-4 mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user?.fullname}
                onChange={handleInputs}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your full name"
                required
              />
            </div>
            <label
              id="name_error"
              class="leading-7 text-sm text-gray-400 text-red-500 relative bottom-5"
            ></label>
            <div class="relative mb-5">
              <label for="femail-id" class="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user?.email}
                onChange={handleInputs}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your Email"
                required
              />
            </div>
            <label
              id="email_error"
              class="leading-7 text-sm text-gray-400 text-red-500 relative bottom-5"
            ></label>
            <div class="relative mb-5">
              <label for="password" class="leading-7 text-sm text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user?.password}
                onChange={handleInputs}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your Password"
                required
              />
            </div>
            <label
              id="password_error"
              for="email"
              class="leading-7 text-sm text-gray-400 text-red-500 relative bottom-5"
            ></label>

            <div class="relative mb-5">
              <label for="email" class="leading-7 text-sm text-gray-400">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                value={user?.cpassword}
                onChange={handleInputs}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Re-enter your password"
                required
              />
            </div>
            <label
              id="cpassword_error"
              className="text-red-200"
              for="email"
              class="leading-7 text-sm text-gray-400 text-red-500 relative bottom-5"
            ></label>

            <div class="relative mb-4">
              <label for="donor" class="leading-7 text-sm text-gray-400">
                Select Your Role
              </label>

              <select
                type="text"
                name="role"
                value={user?.role}
                onChange={handleInputs}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out "
              >
                <option className="bg-gray-900">DONOR</option>
                <option className="bg-gray-900 ">NGO</option>
              </select>
            </div>

            <label
              id="role_error"
              class="leading-7 text-sm text-gray-400  text-red-500 relative bottom-5"
            ></label>

            <button
              onClick={sendUserData}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign Up
            </button>
            <p class="text-xs mt-3 text-blue-600">
              <NavLink exact to="/signin">
                Already have an account?
              </NavLink>
            </p>
          </div>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
};

export default Signup;
