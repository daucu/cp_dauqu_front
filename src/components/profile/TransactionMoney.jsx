import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { API } from "../Constant";
import ProfileHeader from "../ProfileHeader";
import SecondHeader from "../SecondHeader";

function TransactionMoney() {
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
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    const F_email = user.email;
    await axios
      .get(`${API}/orders/email/${F_email}`)
      .then((res) => {
        setTransactions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("changes");
    if (user.email === undefined) return;
    getTransactions();
  }, [user]);

  return (
    <div>
      <div>
        <div>
          <SecondHeader />
        </div>
        <ProfileHeader>
          <div className="flex mt-8 items-center">
            <div className="bg-[#28C270]  w-[50px] h-[50px] flex rounded-md justify-center items-center ">
              <AiOutlineDollarCircle className="text-white text-2xl" />
            </div>
            <div className="text-black font-semibold ml-4 text-[20px]">
              Transaction History
            </div>
          </div>
          <hr className="my-2" />
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th>Plan Slug</th>
                  <th>Purchase Date</th>
                  <th>Start Date</th>
                  <th>Expiry Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item, index) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td data-column="Plan Slug" className="text-center">
                          {/* print 1,2,3 */}
                          {index + 1}
                        </td>
                        <td data-column="Plan Slug">{item.product_slug}</td>
                        <td data-column="Purchase Date">
                          {item.date.split("T")[0]}
                        </td>
                        <td data-column="Start Date">
                          {item.plan_start_date.split("T")[0]}
                        </td>
                        <td data-column="Expiry Date">
                          {item.plan_expiry_date.split("T")[0]}
                        </td>

                        <td data-column="Twitter" className="text-center">
                          {item.product_price}
                        </td>
                        <td data-column="Twitter">
                          {item.product_price == 880
                            ? "Basic"
                            : item.product_price == 2320
                            ? "Popular"
                            : item.product_price == 9200
                            ? "Premium"
                            : null}
                        </td>
                        <td data-column="Twitter">{item.city}</td>
                        <td data-column="Twitter">
                          {item.payment_Status == "success" ? (
                            <div className="bg-green-400 text-white p-2 text-center rounded-3xl">
                              Active
                            </div>
                          ) : (
                            <div className="bg-red-400 text-white p-2 text-center rounded-3xl">
                              Un-Active
                            </div>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ProfileHeader>
      </div>
    </div>
  );
}

export default TransactionMoney;
