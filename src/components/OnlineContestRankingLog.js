import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag, Tabs } from "antd";
import AddOnlineRankingModal from "./AddOnlineRankingModal";

const DataOnlineContestRankingLogcolumns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
    width: 100,
  },
  {
    title: "Tên",
    dataIndex: "userName",
    key: "UserName",
    width: 200,
  },
  {
    title: "Tên cuộc thi",
    dataIndex: "contestName",
    key: "ContestName",
    width: 200,
  },
  {
    title: "Ranking",
    dataIndex: "Ranking",
    key: "Ranking",
    width: 200,
  },
  {
    title: "Điểm",
    dataIndex: "Score",
    key: "Score",
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

export default function OnlineContestRankingLog({
  dataOnlineContestRankingLog,
}) {
  const [isModalOnlineRankingOpen, setIsModalOnlineRankingOpen] =
    useState(false);

  const showModalOnlineRanking = () => {
    setIsModalOnlineRankingOpen(true);
  };
  const handleCancelOnlineRankingModal = () => {
    setIsModalOnlineRankingOpen(false);
  };

  return (
    <div
      className="flex bg-[#F1F6FD] h-[500px] m-5 rounded-xl items-center
     pt-10 flex-col"
    >
      <AddOnlineRankingModal
        showModal={showModalOnlineRanking}
        isModalOpen={isModalOnlineRankingOpen}
        handleCancel={handleCancelOnlineRankingModal}
      />
      <Table
        columns={DataOnlineContestRankingLogcolumns}
        dataSource={dataOnlineContestRankingLog}
        size={"large"}
      />
    </div>
  );
}
