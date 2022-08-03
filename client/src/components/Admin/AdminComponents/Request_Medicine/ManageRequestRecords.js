import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";

const ManageRequestRecords = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getAllRequests();
  }, []);

  const getAllRequests = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/getrequestrecords",
        {
          withCredentials: true
        }
      );
      setRequests(response.data);
      // console.log(us);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRequestDetails = async (id) => {
    await deleteRequest(id);
  };

  const deleteRequest = async (id) => {
    try {
      await axios.delete("http://localhost:5000/deleterequest/" + id, { withCredentials: true });
      getAllRequests();
    } catch (error) {
      console.log("error while calling delete api");
    }
  };

  return (
    <>
      <Navbar />
      <section id="admin-bg ">
        <div id="admin-height" className="bg-gray-900 text-center ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 mt-20 text-white">
              Admin Panel
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
              Admin can manage requests records.
            </p>
          </div>
          {/* <h1>Member Configuration</h1> */}
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg bg-gray-900">
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
                  <th scope="col" class="py-3 px-6">
                    Edit
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="py-3 px-6"> {request.medicine_name}</td>
                    <td class="py-3 px-6"> {request.quantity}</td>
                    <td class="py-3 px-6"> {request.status}</td>
                    <td class="py-3 px-6">
                      {" "}
                      <Link to={"../editrequestrecord/" + request._id}>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td class="py-3 px-6">
                      {" "}
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteRequestDetails(request._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageRequestRecords;
