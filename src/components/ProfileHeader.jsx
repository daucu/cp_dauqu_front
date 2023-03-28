import React, { useState } from "react";
import SecondHeader from "./SecondHeader";
import "../assets/css/profileheader.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgMenu, CgProfile } from "react-icons/cg";
import { FiGithub, FiPower } from "react-icons/fi";
import { RiMoneyDollarCircleLine, RiSecurePaymentLine } from "react-icons/ri";
import { BiCodeCurly } from "react-icons/bi";
import { GrClose, GrMenu, GrTransaction } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ImUserTie } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
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
      <div className="flex justify-between bg-[#1E293B] shadow-md px-6 py-3 items-center">
        <div className="flex items-center">
          <div className="hiddenMenuBtn mr-4  ">
            {active ? (
              <button onClick={() => setActive(false)}>
                <AiOutlineClose
                  className="text-white"
                  color="white"
                  size={16}
                />
              </button>
            ) : (
              <button onClick={() => setActive(true)}>
                <CgMenu className="text-white" color="white" size={16} />
              </button>
            )}
          </div>
          <Link to="/">
            <div className="font-bold text-white text-[20px]">Dauqu</div>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="cursor-pointer" onClick={HandleAlert}>
            <IoIosNotificationsOutline className="text-white" size={25} />
          </div>
          <div className="ml-4 w-[35px] cursor-pointer h-[35px] bg-slate-300 rounded-full flex justify-center items-center">
            <img
              src="https://faces-img.xcdn.link/image-lorem-face-5660.jpg"
              className="w-[100%] h-[100%] rounded-full"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="  maincont ">
        <div className="leftcont h-screen   border-2">
          {/* first link */}

          <div className="p-2"></div>
          <NavLink
            to="/profilee"
            // className={({ isActive }) =>
            //   isActive
            //     ? "btn rounded-none border-b-[2px] hover:bg-gray-300   px-6 py-2  border-[#05232A] flex items-center"
            //     : "btn rounded-none flex items-center hover:bg-gray-200  px-6 py-2"
            // }

            className={({ isActive }) =>
              isActive
                ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            }
          >
            <div className="w-[40px] ">
              <CgProfile size={20} />
            </div>
            <div
              className="  "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
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
                ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            }
          >
            <div className="w-[40px]">
              <FiGithub size={20} />
            </div>
            <div
              className=" "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
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
                ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            }
          >
            <div className="w-[40px]">
              <RiMoneyDollarCircleLine size={20} />
            </div>
            <div
              className=" "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
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
                ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            }
          >
            <div className="w-[40px]">
              <BiCodeCurly size={20} />
            </div>
            <div
              className=" "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
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
                ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            }
          >
            <div className="w-[40px]">
              <GrTransaction size={20} />
            </div>
            <div
              className=" "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
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
                ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            }
          >
            <div className="w-[40px]">
              <RiSecurePaymentLine size={20} />
            </div>
            <div
              className=" "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
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
                ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            }
          >
            <div className="w-[40px]">
              <MdOutlineSecurity size={20} />
            </div>
            <div
              className=" "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
              }}
            >
              Security
            </div>
          </NavLink>
          <div className="p-2"></div>
          <NavLink
            onClick={HandleLogout}
            className="btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
          >
            <div className="w-[40px]">
              <FiLogOut size={20} />
            </div>
            <div
              className=" "
              style={{
                width: `calc(100% - 40px)`,
                textAlign: "left",
              }}
            >
              Logout
            </div>
          </NavLink>
          {/*  eigth Link */}
          <div className="p-2"></div>
        </div>
        {active ? (
          <div className="hiddendiv fixed shadow-2xl z-10 h-screen top-[65px]  animate-slide_right">
            {/* first link */}
            <div className="p-2"></div>
            <NavLink
              to="/profilee"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                  : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
              }
            >
              <div className="w-[40px]">
                <CgProfile size={20} />
              </div>
              <div
                className=" "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
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
                  ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                  : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
              }
            >
              <div className="w-[40px]">
                <FiGithub size={20} />
              </div>
              <div
                className=" "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
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
                  ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                  : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
              }
            >
              <div className="w-[40px]">
                <RiMoneyDollarCircleLine size={20} />
              </div>
              <div
                className=" "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
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
                  ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                  : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
              }
            >
              <div className="w-[40px]">
                <BiCodeCurly size={20} />
              </div>
              <div
                className=" "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
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
                  ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                  : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
              }
            >
              <div className="w-[40px]">
                <GrTransaction size={20} />
              </div>
              <div
                className=" "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
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
                  ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                  : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
              }
            >
              <div className="w-[40px]">
                <RiSecurePaymentLine size={20} />
              </div>
              <div
                className=" "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
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
                  ? "btn btn-sm w-full  rounded-none flex items-center justify-start"
                  : "btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
              }
            >
              <div className="w-[40px]">
                <MdOutlineSecurity size={20} />
              </div>
              <div
                className=" "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
                }}
              >
                Security
              </div>
            </NavLink>
            {/*  eighth Link */}
            <div className="p-2"></div>
            <NavLink
              onClick={HandleLogout}
              className="btn-sm flex w-full  rounded-none font-semibold uppercase   items-center justify-start "
            >
              <div className="w-[40px]">
                <FiPower size={20} />
              </div>
              <div
                className="  "
                style={{
                  width: `calc(100% - 40px)`,
                  textAlign: "left",
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
