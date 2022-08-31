import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "./Navbar.css";

import { UserContext } from "../../App";

const Signin = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      document.getElementById("password_error").innerHTML =
        "Email or password is incorrect";
      return false;
    } else {
      dispatch({ type: "USER", payload: data.data });
      window.alert("Login Successfull");
      document.getElementById("password_error").innerHTML = "";

      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <section id="signin_height" class="text-gray-400 bg-gray-900 body-font">
        {/* <div className="flex flex-col text-center w-full mb-12 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white mt-20">
            Sign In Page
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Sign in to perform actions.
          </p>
        </div> */}
        <form
          method="POST"
          class="container px-5 py-24 mx-auto flex flex-wrap items-center"
        >
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-white">
              Log your self in to perform donations or request.
            </h1>
            <p class="leading-relaxed mt-4">
              You won't be able to perform any action without being Sign In.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-white text-lg font-medium title-font mb-5">
              SIGN IN
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your Email"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your Password"
              />
            </div>{" "}
            <label
              id="password_error"
              class="leading-7 text-sm text-gray-400 text-red-500 relative bottom-5"
            ></label>
            <button
              onClick={loginUser}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign In
            </button>
            <p class="text-sm mt-3 text-blue-600">
              <NavLink exact to="/signup">
                Dont have an account?
              </NavLink>
            </p>
            <p class=" mt-3 text-blue-600 text-sm">
              <NavLink exact to="/userforgotpassword">
                Forget Password?
              </NavLink>
            </p>
          </div>
        </form>
      </section>
      <hr />
      <Footer />
    </div>
  );
};

export default Signin;
