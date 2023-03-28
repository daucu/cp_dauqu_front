import React from "react";
import { MdDelete } from "react-icons/md";
import ProfileHeader from "../ProfileHeader";
import "../../assets/css/domaintable.css";
function DomainsPage() {
  const data = [
    {
      id: 1,
      domain: "https://install.dauqu.com",
      ip: "457.545.748",
      createdat: "2023-03-25 07:21:39",
    },
    {
      id: 2,
      domain: "https://install.dauqu.com",
      ip: "457.545.748",
      createdat: "2023-03-25 07:21:39",
    },
    {
      id: 3,
      domain: "https://install.dauqu.com",
      ip: "457.545.748",
      createdat: "2023-03-25 07:21:39",
    },
  ];

  return (
    <div>
      <div>
        <div>{/* <SecondHeader /> */}</div>
        <ProfileHeader>
          <section className=" w-full">
            <div className="w-full mt-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="md:mt-0 mt-2">
                      <th className="lg:text-center">ID</th>
                      <th>Domain</th>
                      <th>IP Address</th>
                      <th>Created At</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <>
                          <tr className="md:mt-0 mt-6 ">
                            <td
                              data-column="#"
                              className="lg:text-center border border-gray-300"
                            >
                              {item.id}
                            </td>
                            <td
                              data-column="Plan Slug"
                              className="border border-gray-300"
                            >
                              {item.domain}
                            </td>
                            <td
                              data-column="Purchase Date"
                              className="border border-gray-300"
                            >
                              {item.ip}
                            </td>
                            <td
                              data-column="Start Date"
                              className="border border-gray-300"
                            >
                              {item.createdat}
                            </td>
                            <td
                              data-column="Expiry Date"
                              className="border border-gray-300 cursor-pointer   "
                            >
                              <div className="flex md:justify-center md:items-center">
                                <MdDelete size={20} />
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </ProfileHeader>
      </div>
    </div>
  );
}

export default DomainsPage;
