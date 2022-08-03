import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Admin.css";

const defaultValue = {
  medicine_name: "",
  quantity: "",
  date: "",
  approval_status: "",
};

function EditMedicineRecord() {
  const [medicine, setMedicine] = useState(defaultValue);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadMedicineDetails();
  }, []);

  const loadMedicineDetails = async () => {
    try {
      const response = await axios.get("/getdonationbyid/" + id, { withCredentials: true });
      setMedicine(response.data);
    } catch (err) {
      console.log(err);
    }
  };


  let name, value;

  const handleInputs = (e) => {
    //console.log(e);
    name = e.target.name;
    value = e.target.value;
    setMedicine(medicine => { return { ...medicine, [name]: value } });
  };

  const editMedicineDetails = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/edit-donation/${id}`,
        medicine,
        {
          withCredentials: true
        }
      );

      if (res.status !== 200) {
        window.alert("Update failed!");
        return;
      }

      console.log(res);

      window.alert("Medicine updated!");
      navigate("../../managerecords");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section
        id="bg_size"
        className="text-white bg-gray-900 body-font relative"
      >
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow sm:rounded-md sm:overflow-hidden ">
            <div className="flex flex-col text-center w-full mb-12 mt-20">
              <h1 className="sm:text-3xl top-10 text-2xl font-medium title-font mb-4 text-white">
                Edit Medicine Record
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                You can edit/update medicine record{" "}
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-gray-900 sm:p-6">
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
                        value={medicine?.medicine_name}
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
                        value={medicine?.quantity}
                        onChange={(e) => handleInputs(e)}
                        autocomplete="family-name"
                        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-gray-900"
                        placeholder="Enter the quantity of medicine"
                      />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2"> */}
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
                        value={medicine?.date}
                        onChange={(e) => handleInputs(e)}
                        autocomplete="address-level2"
                        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-gray-900"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        className="block text-sm font-medium text-gray-200"
                      >
                        Status
                      </label>
                      <input
                        type="text"
                        name="approval_status"
                        id="status"
                        value={medicine?.approval_status}
                        onChange={(e) => handleInputs(e)}
                        autocomplete="given-name"
                        className="mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md bg-gray-900"
                        placeholder="Enter  medicine status"
                      />
                    </div>
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
                onClick={editMedicineDetails}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditMedicineRecord;
