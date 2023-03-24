import React, { useState } from "react";
import SecondHeader from "./SecondHeader";
import "../assets/css/profileheader.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiGithub, FiPower } from "react-icons/fi";
import { RiMoneyDollarCircleLine, RiSecurePaymentLine } from "react-icons/ri";
import { BiCodeCurly } from "react-icons/bi";
import { GrClose, GrMenu, GrTransaction } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ImUserTie } from "react-icons/im";
import axios from "axios";
import { API } from "./Constant";
import { toast } from "react-toastify";
import NavBarProfile from "./profile/NavBarProfile";
function ProfileHeader({ children }) {
  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState("profile");
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  // console.log(user.length);
  async function GetUsers() {
    try {
      const response = await axios.get(`${API}/profile`, {
        withCredentials: true,
      });
      setUser(response.data);
      // console.log(response.data.message);
      if (response.data.message !== "You are login") {
        navigate("/login");
      }
    } catch (error) {
      // console.log(error);
      navigate("/login");
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);

  // logout
  const HandleLogout = async () => {
    // alert prompt to confirm logout
    const confirm = window.confirm("Are you sure you want to logout?");
    if (!confirm) return;

    try {
      const response = await axios.get(`${API}/logout`, {
        withCredentials: true,
      });
      console.log(response);
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  // alert
  const HandleAlert = () => {
    alert("This feature will be available soon...");
  };
  return (
    <div>
      <div className="flex justify-between shadow-md px-4 py-3 items-center">
        <Link to="/">
          <div className="font-bold text-black text-[20px]">Dauqu</div>
        </Link>
        <div className="flex items-center">
          <div className="cursor-pointer" onClick={HandleAlert} >
            <IoIosNotificationsOutline size={25} />
          </div>
          <div className="hiddenMenuBtn flex   justify-end">
            {active ? (
              <button onClick={() => setActive(false)}>
                <GrClose className="text-[#4614B9]" size={20} />
              </button>
            ) : (
              <button onClick={() => setActive(true)}>
                <GrMenu className="text-[#4614B9]" size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="  maincont ">
        <div className="leftcont h-screen   border-2">
          {/* first link */}
          <div className="p-2"></div>
          <NavLink
            to="/profilee"
            className={({ isActive }) =>
              isActive
                ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                : "flex items-center hover:bg-gray-200  px-4 py-2 "
            }
          >
            <div className="w-[40px]">
              <CgProfile size={20} />
            </div>
            <div
              className="text-[18px] "
              style={{
                width: `calc(100% - 40px)`,
              }}
            >
              Profile
            </div>
          </NavLink>
          {/* second Link */}
          <div className="p-2"></div>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive
                ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                : "flex items-center hover:bg-gray-200  px-4 py-2 "
            }
          >
            <div className="w-[40px]">
              <FiGithub size={20} />
            </div>
            <div
              className="text-[18px] "
              style={{
                width: `calc(100% - 40px)`,
              }}
            >
              Github
            </div>
          </NavLink>
          {/*  third Link */}
          <div className="p-2"></div>
          <NavLink
            to="/subscibe"
            className={({ isActive }) =>
              isActive
                ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                : "flex items-center hover:bg-gray-200  px-4 py-2 "
            }
          >
            <div className="w-[40px]">
              <RiMoneyDollarCircleLine size={20} />
            </div>
            <div
              className="text-[18px] "
              style={{
                width: `calc(100% - 40px)`,
              }}
            >
              Subscriptions
            </div>
          </NavLink>
          {/*  fourth Link */}
          <div className="p-2"></div>
          <NavLink
            to="/domains"
            className={({ isActive }) =>
              isActive
                ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                : "flex items-center hover:bg-gray-200  px-4 py-2 "
            }
          >
            <div className="w-[40px]">
              <BiCodeCurly size={20} />
            </div>
            <div
              className="text-[18px] "
              style={{
                width: `calc(100% - 40px)`,
              }}
            >
              Domains
            </div>
          </NavLink>
          {/*  fivth Link */}
          <div className="p-2"></div>
          <NavLink
            to="/transmoney"
            className={({ isActive }) =>
              isActive
                ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                : "flex items-center hover:bg-gray-200  px-4 py-2 "
            }
          >
            <div className="w-[40px]">
              <GrTransaction size={20} />
            </div>
            <div
              className="text-[18px] "
              style={{
                width: `calc(100% - 40px)`,
              }}
            >
              Transaction
            </div>
          </NavLink>
          {/*  sixth Link */}
          <div className="p-2"></div>
          <NavLink
            to="/invoice"
            className={({ isActive }) =>
              isActive
                ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                : "flex items-center hover:bg-gray-200  px-4 py-2 "
            }
          >
            <div className="w-[40px]">
              <RiSecurePaymentLine size={20} />
            </div>
            <div
              className="text-[18px] "
              style={{
                width: `calc(100% - 40px)`,
              }}
            >
              Invoice
            </div>
          </NavLink>
          {/*  seventh Link */}
          <div className="p-2"></div>
          <NavLink
            to="/updatepswrd"
            className={({ isActive }) =>
              isActive
                ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                : "flex items-center hover:bg-gray-200  px-4 py-2 "
            }
          >
            <div className="w-[40px]">
              <MdOutlineSecurity size={20} />
            </div>
            <div
              className="text-[18px] "
              style={{
                width: `calc(100% - 40px)`,
              }}
            >
              Security
            </div>
          </NavLink>
          {/*  eigth Link */}
          <div className="p-2"></div>
          <div className="    px-4 py-2 ">
            <button
              className="flex  items-center cursor-pointer"
              onClick={HandleLogout}
            >
              <div className="w-[40px]">
                <FiPower size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Logout
              </div>
            </button>
          </div>
        </div>
        {active ? (
          <div className="hiddendiv fixed shadow-2xl  h-screen top-[65px] p-4 animate-slide_right">
            {/* first link */}
            <div className="p-2"></div>
            <NavLink
              to="/profilee"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <CgProfile size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Profile
              </div>
            </NavLink>
            {/* second Link */}
            <div className="p-2"></div>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <FiGithub size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Github
              </div>
            </NavLink>
            {/*  third Link */}
            <div className="p-2"></div>
            <NavLink
              to="/subscibe"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <RiMoneyDollarCircleLine size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Subscriptions
              </div>
            </NavLink>
            {/*  fourth Link */}
            <div className="p-2"></div>
            <NavLink
              to="/domains"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <BiCodeCurly size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Domains
              </div>
            </NavLink>
            {/*  fivth Link */}
            <div className="p-2"></div>
            <NavLink
              to="/transmoney"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <GrTransaction size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Transaction
              </div>
            </NavLink>
            {/*  sixth Link */}
            <div className="p-2"></div>
            <NavLink
              to="/three"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <RiSecurePaymentLine size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Invoice
              </div>
            </NavLink>
            {/*  seventh Link */}
            <div className="p-2"></div>
            <NavLink
              to="/updatepswrd"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <MdOutlineSecurity size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Security
              </div>
            </NavLink>
            {/*  eighth Link */}
            <div className="p-2"></div>
            <NavLink
              to="/updatepswrd"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] hover:bg-gray-200  px-4 py-2  border-[#05232A] flex items-center"
                  : "flex items-center hover:bg-gray-200  px-4 py-2 "
              }
            >
              <div className="w-[40px]">
                <FiPower size={20} />
              </div>
              <div
                className="text-[18px] "
                style={{
                  width: `calc(100% - 40px)`,
                }}
              >
                Logout
              </div>
            </NavLink>
          </div>
        ) : null}

        <div className="p-4 rightcont   ">
          <div className="flex items-center justify-between ">
            <div className="flex w-[60%] ">
              <div className="bg-[#28C270] w-[40px] h-[40px] flex rounded-md justify-center items-center ">
                <ImUserTie className="text-white  " size={20} />
              </div>
              <div className="ml-[20px]">
                <h1 className="text-[25px] font-semibold ">Profile</h1>
              </div>
            </div>
          </div>
          <hr className="my-[10px] " />
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
