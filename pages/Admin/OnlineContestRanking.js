import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag, Tabs } from "antd";
import AddOnlineRankingModal from "../../src/components/AddOnlineRankingModal";
import AddOnlineContestModal from "../../src/components/AddOnlineContestModal";

const DataOnlineContestcolumns = [
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
    width: 200,
  },
  {
    title: "Link Contest",
    dataIndex: "ContestUrl",
    key: "ContestUrl",
    width: 200,
  },
  {
    title: "Ngày tổ chức",
    dataIndex: "OrganizedDate",
    key: "OrganizedDate",
    width: 200,
  },
  {
    title: "Số lượng sinh viên tham gia",
    dataIndex: "JoinedStudent",
    key: "JoinedStudent",
    width: 200,
  },
  {
    title: "Trung bình số bài giải được",
    dataIndex: "AvgNumberOfAccProblem",
    key: "AvgNumberOfAccProblem",
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

const DataOnlineContestRankingcolumns = [
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
    width: 200,
  },
  {
    title: "Cuộc thi gần nhất",
    dataIndex: "LastContest",
    key: "LastContest",
    width: 200,
  },
  {
    title: "Ranking đạt được gần nhất",
    dataIndex: "LastRanking",
    key: "LastRanking",
    width: 200,
  },
  {
    title: "Ranking hiện tại",
    dataIndex: "CurrentRanking",
    key: "CurrentRanking",
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

export default function OnlineContestRanking({
  dataOnlineContest,
  dataOnlineContestRanking,
}) {
  const [isModalOnlineRankingOpen, setIsModalOnlineRankingOpen] =
    useState(false);
  const [isModalOnlineContestOpen, setIsModalOnlineContestOpen] =
    useState(false);

  const showOnlineConetsModal = () => {
    setIsModalOnlineContestOpen(true);
  };
  const handleOnlineConetsCancel = () => {
    setIsModalOnlineContestOpen(false);
  };

  const showModalOnlineRanking = () => {
    setIsModalOnlineRankingOpen(true);
  };
  const handleCancelOnlineRankingModal = () => {
    setIsModalOnlineRankingOpen(false);
  };

  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: "Online Contest",
          key: "contest",
          children: (
            <div
              className="flex bg-[#F1F6FD] h-[500px] m-5 rounded-xl items-center
         pt-10 flex-col"
            >
              <AddOnlineContestModal
                showModal={showOnlineConetsModal}
                isModalOpen={isModalOnlineContestOpen}
                handleCancel={handleOnlineConetsCancel}
              />
              <Table
                columns={DataOnlineContestcolumns}
                dataSource={dataOnlineContest}
                size={"large"}
              />
            </div>
          ),
        },
        {
          label: "Ranking",
          key: "ranking",
          children: (
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
                columns={DataOnlineContestRankingcolumns}
                dataSource={dataOnlineContestRanking}
                size={"large"}
              />
            </div>
          ),
        },
      ]}
    />
  );
}
