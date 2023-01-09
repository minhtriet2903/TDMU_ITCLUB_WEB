import { List } from "antd";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGear,
  faCalendarDays,
  faRankingStar,
  faCode,
  faHeadset,
  faBookOpenReader,
  faQuestion,
  faCheckToSlot,
  faCalendar,
  faCalendarCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Quản lý học thuật",
    "dashboard",
    <FontAwesomeIcon icon={faEnvelope} className="text-[#3380FF]" />,
    [
      getItem(
        "Nghiên cứu khoa học",
        "nckh",
        <FontAwesomeIcon icon={faBookOpenReader} className="text-[#3380FF]" />
      ),
      getItem(
        "Bảng xếp hạng thi trực tuyến",
        "onlineContestRanking",
        <FontAwesomeIcon icon={faRankingStar} className="text-[#3380FF]" />
      ),
      getItem(
        "Codeforce",
        "codeforce",
        <FontAwesomeIcon icon={faCode} className="text-[#3380FF]" />
      ),
    ]
  ),
  getItem(
    "Lịch",
    "calendar",
    <FontAwesomeIcon icon={faCalendarDays} className="text-[#3380FF]" />
  ),
  getItem(
    "Sự kiện",
    "event",
    <FontAwesomeIcon icon={faCalendarCheck} className="text-[#3380FF]" />,
    [
      getItem(
        "Voting",
        "voting",
        <FontAwesomeIcon icon={faCheckToSlot} className="text-[#3380FF]" />
      ),
    ]
  ),
  getItem(
    "Thành viên",
    "member",
    <FontAwesomeIcon icon={faUser} className="text-[#3380FF]" />
  ),
  getItem(
    "Hỏi đáp",
    "question",
    <FontAwesomeIcon icon={faQuestion} className="text-[#3380FF]" />
  ),
  getItem(
    "Hỗ trợ yêu cầu",
    "help",
    <FontAwesomeIcon icon={faHeadset} className="text-[#3380FF]" />
  ),
  getItem(
    "Cài đặt",
    "settings",
    <FontAwesomeIcon icon={faGear} className="text-[#3380FF]" />
  ),
];

const SideBar = ({ setMenuIndex }) => {
  const onClick = (e) => {
    setMenuIndex(e.key);
    // console.log("click ", e);
  };
  return (
    <div>
      <div className="flex flex-col w-full cursor-pointer">
        <div className="w-full flex justify-center">
          <img src="/logo.png" className="w-[100px] h-[50px]"></img>
        </div>
        <div className="font-bold flex justify-center">CLB IT WEBSITE</div>
      </div>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <div className="flex justify-center mt-[50px]">Copy by TDMU IT CLUB</div>
    </div>
  );
};

export default SideBar;
