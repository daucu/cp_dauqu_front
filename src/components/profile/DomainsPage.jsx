import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";

function DomainsPage() {
  return (
    <div>
      <div>
        <div>
          {/* <SecondHeader /> */}
        </div>
        <ProfileHeader>
          <section className=" w-full">
            <div className="w-full mt-8">
              <div className=" shadow-md border mt-4 p-4">
                <div className="text-xl font-bold tracking-wider">
                  Customer details
                </div>
                <div className="flex flex-wrap justify-between">
                  <div className="sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full">
                    <label
                      for="Contact number"
                      className="text-xl font-semibold py-2"
                    >
                      Contact number
                    </label>
                    <input
                      type="text"
                      placeholder="Contact number"
                      className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10"
                    />
                  </div>
                  <div className="sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full">
                    <label
                      for="customer name"
                      className="text-xl font-semibold py-2"
                    >
                      customer name
                    </label>
                    <input
                      type="text"
                      placeholder="customer name"
                      className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10"
                    />
                  </div>
                  <div className="sm:w-full sm:flex sm:justify-between md:flex md:flex-col md:w-[400px] px-2 py-3 w-full">
                    <label
                      for="customer email"
                      className="text-xl font-semibold py-2"
                    >
                      customer email
                    </label>
                    <input
                      type="text"
                      placeholder="customer email"
                      className="p-2 input input-bordered rounded-none outline-none input-info w-full  md:max-w-md h-10"
                    />
                  </div>
                </div>
              </div>

              <div className="shadow-md border mt-4">
                <div className="text-xl font-bold tracking-wider p-4">
                  Ride details of taxi ride
                </div>
                <div className="md:flex w-full">
                  <div className="w-full md:w-1/2 py-2">
                    <div className="sm:w-full sm:justify-between md:flex md:flex-col px-4 py-2 w-full">
                      <label
                        for="Pickup Address"
                        className="text-xl font-semibold py-2"
                      >
                        Pickup Address
                      </label>
                      <input
                        type="text"
                        placeholder=" Enter Pickup Address"
                        className="p-2 input input-bordered rounded-none outline-none input-info w-full h-10"
                      />
                    </div>
                    <div className="sm:w-full sm:justify-between md:flex md:flex-col px-4 py-2 w-full">
                      <label
                        for="Destination Address"
                        className="text-xl font-semibold py-2"
                      >
                        Destination Address
                      </label>
                      <input
                        type="text"
                        placeholder=" Enter Destination Address"
                        className="p-2 input input-bordered rounded-none outline-none input-info w-full h-10"
                      />
                    </div>
                    <div className="sm:w-full sm:justify-between md:flex md:flex-col px-4 py-2 w-full">
                      <label
                        htmlFor="pickup date"
                        className="text-xl font-semibold py-2"
                      >
                        Pickup date
                      </label>
                      <input
                        type="date"
                        className="p-2 input input-bordered rounded-none outline-none input-info w-full  h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ProfileHeader>
      </div>
    </div>
  );
}

export default DomainsPage;
