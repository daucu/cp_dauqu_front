import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosPersonAdd } from "react-icons/io";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";

function SubscriptionPage() {
  return (
    <div>
      {" "}
      <div>
        <div>
          <SecondHeader />
        </div>
        <ProfileHeader>
          <section className=" mt-8 w-full ">
            <div>
              <div className="flex flex-wrap justify-between md:justify-around lg:justify-between mt-4">
                <div className="flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border">
                  <div className="">
                    <p>Approved drivers</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
                <div className="flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border">
                  <div className="">
                    <p>Active drivers</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
                <div className="flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border">
                  <div className="">
                    <p>Unapproved drivers</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
                <div className="flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-4 border">
                  <div className="">
                    <p>Earnings</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4">
                <div className="font-semibold">
                  Last 7-Days Taxi Ride Statics
                </div>
              </div>
              <div className="flex flex-wrap justify-between md:justify-around lg:justify-between mt-3">
                <div className="flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border">
                  <div className="">
                    <p>Total Rides</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
                <div className="flex  justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border">
                  <div className="">
                    <p>Completed Rides</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
                <div className="flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border">
                  <div className="">
                    <p>Running Rides</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
                <div className="flex justify-between w-full sm:w-[300px] md:w-[250px] xl:w-[23%] rounded-md shadow-md p-4 mt-3 border">
                  <div className="">
                    <p>Cancelled Rides</p>
                    <h1 className="text-lg font-bold">256</h1>
                  </div>
                  <div className="shadow-md rounded-full flex justify-center border items-center w-[50px] h-[50px] ">
                    <IoIosPersonAdd size={30} className="text-[#28C270]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-between mt-5">
                <div className="p-4 w-full md:w-[47%] border shadow-md">
                  <div className="text-xl font-semibold border-b-2">
                    Ride status
                  </div>
                  <div></div>
                </div>
                <div className="p-4 w-full md:w-[47%] border mt-4 md:mt-0 shadow-md">
                  <div className="text-xl font-semibold border-b-2">
                    Driver statistics
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </section>
        </ProfileHeader>
      </div>
    </div>
  );
}

export default SubscriptionPage;
