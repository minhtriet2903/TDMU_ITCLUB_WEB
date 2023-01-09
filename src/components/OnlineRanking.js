import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Input, Space, Table, Tag, Tabs } from "antd";

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

export default function OnlineRanking({ dataOnlineRanking }) {
  return (
    <div
      className="flex bg-[#F1F6FD] h-[500px] m-5 rounded-xl items-center
     pt-10 flex-col"
    >
      <Table
        columns={DataOnlineContestRankingcolumns}
        dataSource={dataOnlineRanking}
        size={"large"}
      />
    </div>
  );
}
