import { List } from "antd";
import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const data = [
    { icon: faEnvelope, title: "Trang chủ" },
    { icon: faBookOpenReader, title: "Nghiên cứu khoa học" },
    { icon: faRankingStar, title: "Bảng xếp hạng" },
    { icon: faCalendarDays, title: "Sự kiện" },
    { icon: faCode, title: "Codeforce" },
    { icon: faCheckToSlot, title: "Voting" },
    { icon: faQuestion, title: "Hỏi đáp" },
    { icon: faHeadset, title: "Hỗ trợ yêu cầu" },
    { icon: faGear, title: "Cài đặt" },
  ];

  return (
    <List
      size="large"
      header={
        <div className="flex flex-col w-full cursor-pointer">
          <div className="w-full flex justify-center">
            <img src="/logo.png" className="w-[100px] h-[50px]"></img>
          </div>
          <div className="font-bold flex justify-center">CLB IT WEBSITE</div>
        </div>
      }
      footer={
        <div className="flex justify-center mt-[50px]">
          Copy by TDMU IT CLUB
        </div>
      }
      dataSource={data}
      renderItem={(item) => (
        <div
          className="flex justify-start hover:bg-[#ECF4FF] hover:border-r-[3px] border-[#3380FF] 
        ml-[15px] my-[15px] items-center pl-[30px] h-[40px] cursor-pointer mt-3"
        >
          <FontAwesomeIcon icon={item.icon} className="text-[#3380FF]" />
          <div className="ml-3 font-bold">{item.title}</div>
        </div>
      )}
      className="w-[300px]"
    />
  );
};

export default SideBar;
