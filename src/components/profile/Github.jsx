import React from "react";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";

function Github() {
  return (
    <div>
      <div>
        <SecondHeader />
      </div>
      <ProfileHeader>
        <div className="flex flex-col md:p-32 p-8 justify-center items-center w-full   ">
          <div className="w-[150px] h-[150px]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1409/1409819.png"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="md:text-gray-600 font-bold md:text-[30px] text-[20px]">
            We are working on this page
          </div>
          <div className="md:text-gray-600 font-bold md:text-[27px] text-[19px]">
            This will be available soon
          </div>
          <div className="md:text-gray-600 font-bold md:text-[22px] text-[17px] md:mt-8">
            We will notify you....
          </div>
        </div>
      </ProfileHeader>
    </div>
  );
}

export default Github;
