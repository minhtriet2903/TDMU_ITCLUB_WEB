import SideBar from "../../src/components/SideBar";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag } from "antd";
import ResearchTicketAdmin from "./ResearchTicketAdmin";
import axios from "axios";

const { Search } = Input;
export default function Article() {
  const onSearch = (value) => console.log(value);
  const [menuIndex, setMenuIndex] = useState("nckh");

  const [data, setData] = useState([]);

  useEffect(() => {
    if (menuIndex == "nckh")
      axios
        .get("http://localhost:5035/ticket", {})
        .then(function (response) {
          console.log(response);
          setData(response.data.Ticket);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
  }, [menuIndex]);

  return (
    <div className="flex h-full">
      <SideBar setMenuIndex={setMenuIndex} />
      <div className="flex flex-col w-full h-full">
        <div className="h-[80px] flex justify-between">
          <div className="flex items-center ml-10">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#3380FF]"
            />
            <Space direction="vertical" className="ml-5">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                  width: 200,
                }}
              />
            </Space>
          </div>
          <div className="flex items-center mr-10">
            <FontAwesomeIcon icon={faBell} className="text-[#3380FF] mr-10" />
            <FontAwesomeIcon icon={faUser} className="text-[#3380FF]" />
          </div>
        </div>
        {menuIndex == "nckh" && <ResearchTicketAdmin data={data} />}
      </div>
    </div>
  );
}
