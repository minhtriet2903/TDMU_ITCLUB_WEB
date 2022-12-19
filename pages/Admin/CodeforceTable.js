import SideBar from "../../src/components/SideBar";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag } from "antd";
import AddCodeforceAccountModal from "../../src/components/AddCodeforceAccountModal";

const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
    width: 100,
  },
  {
    title: "Tên",
    dataIndex: "UserName",
    key: "UserName",
  },
  {
    title: "Accepted / 100 bài gần nhất",
    dataIndex: "AcceptedInLast100Submission",
    key: "AcceptedInLast100Submission",
    width: 200,
  },
  {
    title: "Submit ngày gần nhất",
    dataIndex: "LastSubmit",
    key: "LastSubmit",
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

export default function CodeforceTable({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex bg-[#F1F6FD] h-[500px] m-5 rounded-xl items-center
     pt-10 flex-col"
    >
      <AddCodeforceAccountModal
        showModal={showModal}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
      <Table columns={columns} dataSource={data} size={"large"} />
    </div>
  );
}
