import SideBar from "../../src/components/SideBar";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag } from "antd";

const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
    width: 100,
  },
  {
    title: "Người đăng",
    dataIndex: "NamePost",
    key: "NamePost",
  },
  {
    title: "Tổng số lượng bài viết ",
    dataIndex: "Totalnumberofposts",
    key: "Totalnumberofposts",
    width: 200,
  },
  {
    title: "Số lượng bài viết hôm nay",
    dataIndex: "Numberofpoststoday",
    key: "Numberofpoststoday",
    width: 200,
  },
  {
    title: "Ngày đăng",
    dataIndex: "DateSubmitted",
    key: "DateSubmitted",
    width: 200,
  },
  {
    title: "Lượt tương tác",
    dataIndex: "interactions",
    key: "interactions",
    width: 200,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <button>Del</button>
      </Space>
    ),
    width: 400,
  },
];

export default function totalPost({ data }) {
  return (
    <div className="flex bg-[#F1F6FD] h-[500px] m-5 rounded-xl items-start justify-center pt-10">
      <Table columns={columns} dataSource={data} size={"large"} />
    </div>
  );
}
