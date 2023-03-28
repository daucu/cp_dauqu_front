import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";
import { GIT_API } from "./ConstantTwo";

function Github() {
  const [apps, setApps] = useState([]);
  async function GetAllApps() {
    //Get request to backend to check if user is logged in
    await axios
      .get(`${GIT_API}/get-my-repos`)
      .then((res) => {
        console.log(res.data);
        setApps(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    GetAllApps();
  }, []);
  return (
    <div>
      <div>{/* <SecondHeader /> */}</div>
      <ProfileHeader>
        <div className="w-full">
          <div className="font-semibold text-[20px] mt-4">Repository List</div>
          {/* <div className="w-[150px] h-[150px]">
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
          </div> */}
        </div>
      </ProfileHeader>
    </div>
  );
}

export default Github;
