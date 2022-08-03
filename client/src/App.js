import "./App.css";
import "./components/Navbar/Navbar.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import DonateNow from "./components/Donatation/DonateNow";
import RequestMedicine from "./components/RequestMedicine/RequestMedicine";
import DonateMedicine from "./components/Donatation/DonateMedicine/DonateMedicine";
import DonateMoney from "./components/Donatation/Donatemoney/DonateMoney";
import Admin from "./components/Admin/Admin";
import AddNGO from "./components/Admin/AdminComponents/AddNGO";
// import RemoveMedicine from "./components/Admin/AdminComponents/RemoveMedicine";
// import AdminResetPassword from "./components/Admin/AdminComponents/AdminResetPassword";
import RequestNow from "./components/RequestMedicine/RequestNow";
import Signin from "./components/Navbar/Signin";
import Signup from "./components/Navbar/Signup";
import Logout from "./components/Navbar/Logout";
import UserDashboard from "./components/Dashboard/UserDashboard";
import MedicineRecords from "./components/Dashboard/MedicineRecords";
import ManageAllRecords from "./components/Admin/AdminComponents/Medicine_Donation/ManageDonationRecords";
import UserForgotPassword from "./components/Navbar/UserForgotPassword";
import UserResetPassword from "./components/Navbar/UserResetPassword";
import EditMedicineRecord from "./components/Admin/AdminComponents/Medicine_Donation/EditDonationRecord";

import { createContext, useEffect, useReducer } from "react";

import { initialState, reducer } from "../src/reducer/UseReducer";
import EmailVerified from "./components/Navbar/EmailVerified";
import AdminRoutes from "./components/Admin/routes";

//context api
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/checkauth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      const user = await res.json();

      if (res.status !== 200) {
        dispatch({ type: "USER", payload: null });
      }

      dispatch({ type: "USER", payload: user });
    }

    checkAuth();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                headerDetails={{
                  ftitle: "Save Medicine , ",
                  stitle: "Save Life",
                  htext:
                    "That don't lights. Blessed land spirit creature divide our made two itself upon you'll dominion waters man second good you they're divided upon winged were replenish night",
                }}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About
                headerDetails={{
                  ftitle: " ",
                  stitle: "ABOUT US",
                  htext:
                    "We are BSSE F-18 batch students working on our final year project",
                }}
              />
            }
          />

          <Route
            exact
            path="/contact"
            element={
              <Contact
                headerDetails={{
                  ftitle: " ",
                  stitle: "CONTACT US",
                  htext:
                    "We always need your feedbacks and querise becuase helps us in improving aour project.",
                }}
              />
            }
          />
          <Route exact path="/donatenow" element={<DonateNow />} />

          <Route
            exact
            path="/requestmedicine"
            element={
              <RequestMedicine
                headerDetails={{
                  ftitle: " ",
                  stitle: "REQUEST MEDICINE",
                  htext:
                    "NGO's have to verify them before requesting medicines.",
                }}
              />
            }
          />

          <Route
            exact
            path="/donatemedicine"
            element={
              <DonateMedicine
                headerDetails={{
                  ftitle: " ",
                  stitle: "DONATE MEDICINE",
                  htext:
                    "Here you can donate unused medicines that might help poor people who cant afford medicines.",
                }}
              />
            }
          />

          <Route
            exact
            path="/donatemoney"
            element={
              <DonateMoney
                headerDetails={{
                  ftitle: " ",
                  stitle: "DONATE MONEY",
                  htext:
                    "This money will be used to send medicine to NGO's who request for medicine.",
                }}
              />
            }
          />
          <Route
            exact
            path="/requestnow"
            element={
              <RequestNow
                headerDetails={{
                  ftitle: " ",
                  stitle: "REQUEST MEDICINE",
                  htext:
                    "Here you can request an unused medicines that might help poor people who cant afford medicines.",
                }}
              />
            }
          />
          <Route path="/admin/*" element={<AdminRoutes/>} >
          </Route>
          
          {/* <Route exact path="/removemedicine" element={<RemoveMedicine />} /> */}
          {/* <Route
            exact
            path="/adminresetpassword"
            element={<AdminResetPassword />}
          /> */}
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/userdashboard" element={<UserDashboard />} />
          <Route exact path="/medicinerecords" element={<MedicineRecords />} />

          <Route
            exact
            path="/userresetpassword"
            element={<UserResetPassword />}
          />
          <Route
            exact
            path="/userforgotpassword"
            element={<UserForgotPassword />}
          />
          <Route
            exact
            path="/verified-email"
            element={<EmailVerified />}
          />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
