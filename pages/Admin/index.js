import SideBar from "../../src/components/SideBar";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag } from "antd";
import Link from "next/link";

const { Search } = Input;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: 200,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 400,
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
    width: 400,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function Article() {
  const onSearch = (value) => console.log(value);

  return (
    <div className="flex h-full">
      <SideBar />
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
        <div className="flex bg-[#F1F6FD] h-[500px] m-5 rounded-xl items-start justify-center pt-10">
          <Table columns={columns} dataSource={data} size={"large"} />
        </div>
        <Link href={"/Voting"}>
          <a>
            <button>Voting</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
