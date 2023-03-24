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
import Register from "./components/Register";
import SecondHeader from "./components/SecondHeader";
import Slider from "./components/Slider";
import StripePayment from "./components/StripePayment";
import Update_psw from "./components/Update_psw";
import Pymnt_succss from "./components/Pymnt_succss";
import Brand_new_profile from "./components/Brand_new_profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileHeader from "./components/ProfileHeader";
import Profilee from "./components/profile/Profilee";
import Github from "./components/profile/Github";
import SubscriptionPage from "./components/profile/SubscriptionPage";
import DomainsPage from "./components/profile/DomainsPage";
import TransactionMoney from "./components/profile/TransactionMoney";
import Invoice from "./components/profile/Invoice";
import Security from "./components/profile/Security";
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
        <Route path="/updatepsw" element={<Update_psw />} />
        <Route path="/stripepayment" element={<StripePayment />} />
        <Route path="/cart/:slug" element={<Cart />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/ss" element={<SecondHeader />} />
        <Route path="/payment-success" element={<Pymnt_succss />} />
        <Route path="/profileheader" element={<ProfileHeader />} />
        {/* ---------- */}

        <Route path="/profilee" element={<Profilee />} />
        <Route path="/github" element={<Github />} />
        <Route path="/subscibe" element={<SubscriptionPage />} />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/transmoney" element={<TransactionMoney />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/updatepswrd" element={<Security />} />
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
