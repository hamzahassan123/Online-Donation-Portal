import React, { useContext } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { UserContext } from "../../App";

function Navbar() {
  const { state: auth, dispatch } = useContext(UserContext);

  console.log(auth);

  const isNGO = auth?.role === "NGO";
  const isDONOR = auth?.role === "DONOR";
  const isAdmin = auth?.role === "ADMIN";

  console.log(isNGO);

  const RenderMenu = () => {
    return (
      <>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {/* {auth && (
            <NavLink exact to="/userdashboard" className="nav-link underline">
              Dashboard
            </NavLink>
          )} */}
          {isDONOR && (
            <NavLink exact to="/userdashboard" className="nav-link underline">
              Dashboard
            </NavLink>
          )}
          {isDONOR && (
            <NavLink exact to="/donatenow" className="nav-link  underline">
              Donate Now
            </NavLink>
          )}

          {isNGO && (
            <NavLink exact to="/userdashboard" className="nav-link underline">
              Dashboard
            </NavLink>
          )}
          {isNGO && (
            <NavLink
              exact
              to="/requestmedicine"
              className="nav-link  underline"
            >
              Request Medicine
            </NavLink>
          )}

          <NavLink exact to="/about" className="nav-link  underline">
            About Us
          </NavLink>
          <NavLink exact to="/contact" className="nav-link  underline">
            Contact Us
          </NavLink>
          {isAdmin && (
            <NavLink exact to="/admin" className="nav-link  underline">
              Admin
            </NavLink>
          )}
        </nav>

        <button class=" mx-2 inline-flex items-center bg-indigo-600 border-0 py-2 px-3 focus:outline-none hover:bg-white hover:text-indigo-600 hover:border-solid border-2 border-indigo-600  rounded text-white mt-4 md:mt-0">
          <NavLink exact to={`${auth ? "/logout" : "/signin"}`}>
            {auth ? "Logout" : "Signin"}
          </NavLink>
        </button>
      </>
    );
  };

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink className="ml-3 text-xl nav-link" exact to="/">
          MEDONOR
        </NavLink>
        {/* <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">MEDONOR</span>
        </a> */}
        <RenderMenu />
      </div>
    </header>
  );
}

export default Navbar;
