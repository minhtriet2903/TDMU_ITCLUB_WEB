import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag, Tabs } from "antd";
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
    dataIndex: "OrganitzedDate",
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

export default function ContestTable({ dataOnlineContest }) {
  const [isModalOnlineContestOpen, setIsModalOnlineContestOpen] =
    useState(false);

  const showOnlineConetsModal = () => {
    setIsModalOnlineContestOpen(true);
  };
  const handleOnlineConetsCancel = () => {
    setIsModalOnlineContestOpen(false);
  };

  return (
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
  );
}
