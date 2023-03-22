import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import "../assets/css/Footer.css";
import axios from "axios";
import { API } from "./Constant";
import { CountryDropdown } from "react-country-region-selector";
import { toast } from "react-toastify";

function Footer() {
  // code to send email to backend
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/email_newsletter`, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        country: country,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setTimeout(() => {
          setEmail("");
          setFirstname("");
          setLastname("");
          setCountry("");
        }, [2000]);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
        setTimeout(() => {
          setEmail("");
          setFirstname("");
          setLastname("");
          setCountry("");
        }, [2000]);
      });
  };

  return (
    <div className="bg-[#FAFAFA]  p-6">
      <div className="lg:w-1/2 min-w-[280px]  md:p-10 m-auto items-center text-center xl:p-[120px]">
        <div className="flex justify-center">
          <IoMdMail
            className="shadow-lg"
            style={{
              color: "#165461",
              border: "10px solid #FFFFFF",
              fontSize: "55px",
            }}
          />
        </div>
        <div className="text-[#333333] md:text-[40px] font-bold mt-4">
          Join Our (Free) Open Beta
        </div>
        <div className="">
          Enter your email to subscribe to our latest updates and events
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="w-full">
            <input
              type="email"
              placeholder="Email address"
              className="inputt rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <button
              className="arrowbtn bg-[#165461] lg:w-[150px] md:w-[100px] sm:w-[85px] min-w-[70px] flex justify-center hover:sha"
              onClick={handleSubmit}
            >
              <BsArrowUpRight
                style={{
                  color: "white",
                  fontSize: "42px",
                  padding: "2px",
                  textAlign: "center",
                }}
              />
            </button>
          </div>
        </div>
        <div>
          <div className="mt-8   md:flex items-center justify-between   ">
            <div className="md:w-[45%] w-[100%]">
              <input
                type="text"
                className="border bg-[#FFFFFF] border-[#9B9B9B] rounded w-full md:w-[100%]"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="md:w-[45%] w-[100%]  md:mt-0 mt-8">
              <input
                type="text"
                className="border bg-[#FFFFFF] border-[#9B9B9B] rounded w-full md:w-[100%]"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full mt-8">
            <CountryDropdown
              className="border bg-[#FFFFFF] border-[#9B9B9B] rounded w-full"
              value={country}
              onChange={(val) => setCountry(val)}
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgb(255,255,255)] flex flex-col text-center md:flex-row  md:items-start  m-auto xl:p-8  my-6    justify-evenly ">
        <div className="md:w-[20%] text-left my-5 md:my-0">
          <div className="">
            <div className="text-[45px] text-[#124957] font-semibold">
              Dauqu
            </div>
            <div className="text-[#3A3A3A] ">
              Dauqu is a cloud based platform that allows you to deploy your app
              in minutes.
            </div>
          </div>
          <div className="mt-2 text-[#3A3A3A]">Copyright 2022 by Dauqu</div>
          <div className="text-[#3A3A3A] md:w-[100%] w-[50%]   cursor-pointer md:mt-2 mt-8 flex    ">
            <div className="md:w-[15%] w-[30%] hover:text-[#1773EB]">
              <FaFacebookF style={{ fontSize: "20px" }} />
            </div>
            <div className="md:w-[15%] w-[30%] hover:text-[#1363BC]">
              <FaLinkedinIn style={{ fontSize: "20px" }} />
            </div>
            <div className="md:w-[15%] w-[30%] hover:text-[#8a3ab9]">
              <FaInstagram style={{ fontSize: "20px" }} />
            </div>
            <div className="md:w-[15%] w-[30%] hover:text-[#33A9EC]">
              <AiOutlineTwitter style={{ fontSize: "20px" }} />
            </div>
          </div>
        </div>
        <div className="md:w-[20%] text-left  md:my-0 ">
          <div className="text-[25px] items-center mt-2 text-[#3A3A3A] font-semibold">
            About
          </div>
          <div className="">
            <div className="text-[#3A3A3A]  cursor-pointer  mt-2">
              Software Programme
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              App Solutions
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Social Media Management
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Business analycis
            </div>
          </div>
        </div>

        <div className="md:w-[20%] text-left  md:my-0 ">
          <div className="text-[25px] items-center mt-2 text-[#3A3A3A] font-semibold">
            Pages
          </div>
          <div className="">
            <div className="text-[#3A3A3A]  cursor-pointer  mt-2">
              Software Programme
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              App Solutions
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Social Media Management
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              Business analycis
            </div>
          </div>
        </div>
        <div className="md:w-[20%] text-left  md:my-0 ">
          <div className="text-[25px] items-center mt-2 text-[#3A3A3A] font-semibold">
            Contact
          </div>
          <div className="">
            <div className="text-[#3A3A3A]  cursor-pointer  mt-2">
              <b>Address: &nbsp;</b> 809, 8th Floor, Pearls Best Heights 1, NSP,
              Pitampura, New Delhi-110034
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              <b>Email: &nbsp;</b>info@dauqu.com
            </div>
            <div className="text-[#3A3A3A]  cursor-pointer mt-2">
              <b>Phone: &nbsp;</b>+91 9369390970
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[#124957] font-bold">
        Copyright &copy; 2022 by Dauqu
      </div>
    </div>
  );
}

export default Footer;
