import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag } from "antd";
import AddOnlineRankingModal from "../../src/components/AddOnlineRankingModal";

const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
    width: 100,
  },
  {
    title: "Tên",
    dataIndex: "ContestName",
    key: "ContestName",
  },
  {
    title: "Ranking gần nhất",
    dataIndex: "LastRanking",
    key: "LastRanking",
    width: 200,
  },
  {
    title: "Contest gần nhất",
    dataIndex: "LastContest",
    key: "LastContest",
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

export default function OnlineContestRanking({ data }) {
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
      <AddOnlineRankingModal
        showModal={showModal}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
      <Table columns={columns} dataSource={data} size={"large"} />
    </div>
  );
}
