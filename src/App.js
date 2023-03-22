import axios from "axios";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Icons_slider from "./components/Icons_slider";
import ImgSlider from "./components/ImgSlider";
import Login from "./components/Login";
import Forget_pass from "./components/Forget_pass";
import Navbar from "./components/Navbar";
import Newprofile from "./components/Newprofile";
import New_profile from "./components/New_profile";
import Profile from "./components/Profile";
import Register from "./components/Register";
import SecondHeader from "./components/SecondHeader";
import Slider from "./components/Slider";
import StripePayment from "./components/StripePayment";
import SubscibedPlan from "./components/SubscibedPlan";
import Test from "./components/Test";
import Update_psw from "./components/Update_psw";
import Pymnt_succss from "./components/Pymnt_succss";
import Brand_new_profile from "./components/Brand_new_profile";
import Demo_onclick_active from "./components/Demo_onclick_active";
import Profile_information from "./components/Profile_information";
import Github_information from "./components/Github_information";
// allow axios credentials

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/imgslider" element={<ImgSlider />} />
        <Route path="/iconSlider" element={<Icons_slider />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<Forget_pass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Brand_new_profile />} />
        {/*this is currently working profile*/}
        <Route path="/updatepsw" element={<Update_psw />} />
        <Route path="/test" element={<Test />} />
        <Route path="/stripepayment" element={<StripePayment />} />
        <Route path="/newprofile" element={<Newprofile />} />
        <Route path="/cart/:slug" element={<Cart />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/subs" element={<SubscibedPlan />} />
        <Route path="/ss" element={<SecondHeader />} />
        <Route path="/payment-success" element={<Pymnt_succss />} />
        <Route
          path="/demo-onclick-active-unactive"
          element={<Demo_onclick_active />}
        />{" "}
        {/*this page is not working*/}
        <Route
          path="/personal-details"
          element={<Profile_information />}
        />{" "}
        {/*this page is inside profile main page */}
        <Route path="/github-details" element={<Github_information />} />{" "}
        {/*this page is inside profile main page */}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
