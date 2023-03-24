import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../Constant";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";

function Security() {
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

  const [old_password, setOld_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const updatePassword = async (e) => {
    console.log(old_password, new_password, confirm_password);
    axios
      .patch(`${API}/getuser/update/password/${user._id}`, {
        old_password: old_password,
        new_password: new_password,
        confirm_password: confirm_password,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      <div>{/* <SecondHeader /> */}</div>
      <div>
        <ProfileHeader>
          <div className="mt-8">
            <div className="font-semibold text-black">Change Password</div>
            <hr className="my-2" />
          </div>
          <div className="md:flex mt-6 items-center">
            <div className="text-black md:w-[15%] md:mb-0 mb-2">
              Old password
            </div>
            <div className="md:w-[85%]">
              <input
                type="password"
                className="input input-bordered w-full rounded-none "
                value={old_password}
                onChange={(e) => setOld_password(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex mt-6 items-center">
            <div className="text-black md:w-[15%] md:mb-0 mb-2">
              New password
            </div>
            <div className="md:w-[85%]">
              <input
                type="password"
                className="input input-bordered w-full rounded-none "
                value={new_password}
                onChange={(e) => setNew_password(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex mt-6 items-center">
            <div className="text-black md:w-[15%] md:mb-0 mb-2">
              Confirm password
            </div>
            <div className="md:w-[85%]">
              <input
                type="password"
                className="input input-bordered w-full rounded-none "
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mt-6  justify-center items-center">
            <button
              className="btn btn-outline btn-accent rounded-none btn-sm hover:bg-[#165461] text-black hover:text-white "
              onClick={() => updatePassword()}
            >
              Change Password
            </button>
          </div>
        </ProfileHeader>
      </div>
    </div>
  );
}

export default Security;
