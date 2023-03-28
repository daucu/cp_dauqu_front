import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";

function Invoice() {
  return (
    <div>
      <ProfileHeader>
        <div className="">
          <div className="md:flex  md:mt-8 mt-4">
            <div className="md:w-[330px] w-[250px] border p-4">
              <div className="font-bold text-black text-[20px]">Premium</div>
              <div className="flex mt-2 items-center justify-between">
                <div>Duration</div>
                <div>1 Year</div>
              </div>
              <div className="flex mt-2 items-center justify-between">
                <div>My Payment</div>
                <div> $154</div>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <div>Purchase Date</div>
                <div>14/1/2023</div>
              </div>
              <div className="flex mt-2 items-center justify-between">
                <div>Expiry Date</div>
                <div>14/1/2024</div>
              </div>
            </div>
            <div className="md:w-[330px] w-[250px] ml-8 border p-4">
              <div className="font-bold text-black text-[20px]">My Wallet</div>
              <div className="flex mt-2 items-center justify-between">
                <div>Balance</div>
                <div>$85</div>
              </div>
              <div className="flex mt-2 items-center justify-between">
                <div>Time Left</div>
                <div> 5 months</div>
              </div>

              <div className="flex mt-2 items-center justify-between">
                <div>Purchase Date</div>
                <div>14/1/2023</div>
              </div>
              <div className="flex mt-2 items-center justify-between">
                <div>Expiry Date</div>
                <div>14/1/2024</div>
              </div>
            </div>
          </div>
        </div>
      </ProfileHeader>
    </div>
  );
}

export default Invoice;
