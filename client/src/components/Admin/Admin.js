import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Admin.css";
import NavBar from "../Navbar/Navbar";

function Admin() {
  return (
    <>
      <NavBar />
      <section id="admin-bg ">
        <div id="admin-height" className="bg-gray-900 text-center ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-20 text-white">
              Admin Panel
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
              Admin can manage medicines records.
            </p>
          </div>
          {/* <h1>Member Configuration</h1> */}

          <ul>
            <li>
              <NavLink  to="/admin/medicine-donation/managerecords">
                <button className="btn admin-setting hover:bg-gray-900 hover:text-white p-1.5">
                  {" "}
                  Manage Medicine Donation Records
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/admin/medicine-request/managerecords">
                <button className="btn admin-setting hover:bg-gray-900 hover:text-white p-1.5">
                  {" "}
                  Manage Medicine Request Records
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/add-NGO">
                <button className="btn admin-setting hover:bg-gray-900 hover:text-white p-1.5">
                  {" "}
                  Add NGO
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/medicine-donation/add">
                <button className="btn admin-setting hover:bg-gray-900 hover:text-white p-1.5">
                  {" "}
                  Add Medicine Donation
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/medicine-request/add">
                <button className="btn admin-setting hover:bg-gray-900 hover:text-white p-1.5">
                  {" "}
                  Add Medicine Request
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/">
                <button className="btn admin-setting hover:bg-gray-900 hover:text-white p-1.5">
                  {" "}
                  Back{" "}
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Admin;
