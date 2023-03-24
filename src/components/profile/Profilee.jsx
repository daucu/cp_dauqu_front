import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImUserTie } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { API } from "../Constant";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";
import { AiOutlineDollarCircle, AiOutlineHome } from "react-icons/ai";
import { GiDiamondTrophy, GiMoneyStack } from "react-icons/gi";

function Profilee() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  async function GetUsers() {
    try {
      const response = await axios.get(`${API}/profile`, {
        withCredentials: true,
      });
      setUser(response.data.data);
      console.log(response.data.data);
      if (response.data.status !== "success") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }
  React.useEffect(() => {
    GetUsers();
  }, []);
  return (
    <div>
      <div>
        {/* <SecondHeader /> */}
      </div>
      <div>
        <ProfileHeader>
          <div className=" ">
            <div className=" w-full  ">
              <div className="p-3 px-2  rounded-md">
                <div className="flex justify-between px-2 items-center w-full">
                  <div className="flex w-1/2 ">
                    <div className="text-[20px] font-normal text-black">
                      Information
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-sm  rounded-none">
                      Make Payment
                    </button>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="md:flex items-center md:mt-8 justify-between ">
                  <div className="p-2 border w-[300px]  md:m-0 m-auto  ">
                    <div className="flex items-center justify-between">
                      <div className="text-[#333] font-semibold text-[20px]">
                        Current Balance
                      </div>
                      <div>
                        <AiOutlineDollarCircle size={25} />
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                      <div
                        className="w-[180px]  p-2 text-[30px]  font-bold text-left  "
                        style={{
                          background:
                            "linear-gradient(to right, #b2ff42 0%, #0d8773 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        $333
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border w-[300px]  md:m-0 m-auto  ">
                    <div className="flex items-center justify-between">
                      <div className="text-[#333] font-semibold text-[20px]">
                        Rewards
                      </div>
                      <div>
                        <GiDiamondTrophy size={25} />
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                      <div
                        className="w-[180px]  p-2 text-[30px]  font-bold text-left  "
                        style={{
                          background:
                            "linear-gradient(to right, #b2ff42 0%, #0d8773 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        $100
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border w-[300px]  md:m-0 m-auto  ">
                    <div className="flex items-center justify-between">
                      <div className="text-[#333] font-semibold text-[20px]">
                        Last Debited
                      </div>
                      <div>
                        <GiMoneyStack size={25} />
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                      <div className="w-[180px]  p-2 text-[30px] text-red-600 font-bold text-left  ">
                        $14
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========input fields start==== */}

              <div className=" md:flex mt-12 lg:flex">
                <div className="mt-4 w-full px-4">
                  <div className="font-semibold">Uniquekey</div>
                  <div>
                    <input
                      type="text"
                      value={user.uniqueKey}
                      className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none  sm:p-3 md:h-[36px]"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-4 w-full px-4">
                  <div className="font-semibold">Username</div>
                  <div>
                    <input
                      type="text"
                      value={user.username}
                      className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex lg:flex">
                <div className="mt-4 w-full px-4">
                  <div className="font-semibold">Email</div>
                  <div>
                    <input
                      type="text"
                      value={user.email}
                      className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-4 w-full px-4">
                  <div className="font-semibold">Phone</div>
                  <div>
                    <input
                      type="text"
                      value={user.phone}
                      className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex lg:flex">
                <div className="mt-4 w-full px-4">
                  <div className="font-semibold">Country</div>
                  <div>
                    <input
                      type="text"
                      value={user.country}
                      className="input input-bordered w-full  border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-4 w-full px-4">
                  <div className="font-semibold">Address</div>
                  <div>
                    <input
                      type="text"
                      value={user.address}
                      className="input input-bordered w-full border-[#5CA2D6]  rounded max-w-xl focus:outline-none sm:p-3 md:h-[36px]"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div>{/* <SubscibedPlan /> */}</div>
            </div>
          </div>
        </ProfileHeader>
      </div>
    </div>
  );
}

export default Profilee;
