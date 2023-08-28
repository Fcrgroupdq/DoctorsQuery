import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors";
import Hospital from "../pages/Hospital";
import About from "../pages/About";
import SingleDoctor from "../pages/SingleDoctor";
import SingleHospital from "../pages/SingleHospital";
import Appointment from "../pages/Appointment";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";
import PrivateRouteUser from "./PrivateRouteUser";
import PrivateRouteAdmin from "./PrivateRouteAdmin";
import Allapointment from "../pages/Allapointment";
import Add_doctors from "../components/admin/doctor/AddNewDoctor";

const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route
        path="/admin"
        element={
          <PrivateRouteAdmin>
            <Admin />
          </PrivateRouteAdmin>
        }
      />
      <Route path="/doctors/:id" element={<SingleDoctor />} />
      <Route
        path="/doctors/:id/appointment"
        element={
          <PrivateRouteUser>
            <Appointment />
          </PrivateRouteUser>
        }
      />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/hospitals" element={<Hospital />} />
      <Route path="/admin/doctors" element={<Add_doctors />} />
      <Route path="/appointments" element={<Allapointment />} />
      <Route path="/hospitals/:id" element={<SingleHospital />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Allroute;
