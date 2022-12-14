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
    title: "Người tạo",
    dataIndex: "CreatedName",
    key: "CreatedName",
  },
  {
    title: "Số lượng sinh viên hiện tại",
    dataIndex: "CurrentStudentNumber",
    key: "CurrentStudentNumber",
    width: 200,
  },
  {
    title: "Số lượng sinh viên cần cho dự án",
    dataIndex: "TotalStudentNumber",
    key: "TotalStudentNumber",
    width: 200,
  },
  {
    title: "Ngày tạo",
    dataIndex: "CreatedDate",
    key: "CreatedDate",
    width: 200,
  },
  {
    title: "Ngày hết hạn",
    dataIndex: "CreatedDate",
    key: "CreatedDate",
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

export default function ResearchTicketAdmin({ data }) {
  return (
    <div className="flex bg-[#F1F6FD] h-[500px] m-5 rounded-xl items-start justify-center pt-10">
      <Table columns={columns} dataSource={data} size={"large"} />
    </div>
  );
}
