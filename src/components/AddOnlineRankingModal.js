import React, { useEffect, useState } from "react";
import { Input, Modal, message, Select } from "antd";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddOnlineRankingModal = ({ isModalOpen, showModal, handleCancel }) => {
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [idContest, setIdContest] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  const hanldeAddAccount = () => {};

  const onChangeIdContest = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearchContest = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5035/onlineContest", {})
      .then(function (response) {
        const newArrayOfObj = response.data.allOnlineContests.map(
          ({ ContestName: value, ...rest }) => ({
            value,
            ...rest,
          })
        );
        setIdContest(newArrayOfObj);
      });
  }, [isModalOpen]);

  return (
    <>
      {contextHolder}
      <Modal
        title="Thêm tài khoản Codeforce"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="flex justify-center"
      >
        <div
          className="w-[400px] items-center flex h-[50px] rounded-md
        justify-center cursor-pointer"
        >
          <div className="w-2/5 flex items-center">
            Tên tài khoản
            <div className="flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faStarOfLife}
                className="w-[8px] h-[8px] ml-1 text-red-600"
              />
            </div>
          </div>
          <div className="w-3/5 flex">
            <Input
              className="!mr-2"
              placeholder="userName"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
        </div>
        <div
          className="w-[400px] items-center flex h-[50px] rounded-md
        justify-center cursor-pointer"
        >
          <div className="w-2/5 flex items-center">
            Ranking
            <div className="flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faStarOfLife}
                className="w-[8px] h-[8px] ml-1 text-red-600"
              />
            </div>
          </div>
          <div className="w-3/5 flex">
            <Input
              className="!mr-2"
              placeholder="ranking trong cuộc thi"
              onChange={(e) => setRanking(e.target.value)}
              value={ranking}
            />
          </div>
        </div>
        <div
          className="w-[400px] items-center flex h-[50px] rounded-md
        justify-center cursor-pointer"
        >
          <div className="w-2/5 flex items-center">
            Điểm
            <div className="flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faStarOfLife}
                className="w-[8px] h-[8px] ml-1 text-red-600"
              />
            </div>
          </div>
          <div className="w-3/5 flex">
            <Input
              className="!mr-2"
              placeholder="Điểm thi"
              onChange={(e) => setScore(e.target.value)}
              value={score}
            />
          </div>
        </div>
        <div
          className="w-[400px] items-center flex h-[50px] rounded-md
        justify-center cursor-pointer"
        >
          <div className="w-2/5 flex items-center">
            Contest Tham gia
            <div className="flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faStarOfLife}
                className="w-[8px] h-[8px] ml-1 text-red-600"
              />
            </div>
          </div>
          <div className="w-3/5 flex">
            <Select
              showSearch
              placeholder="Select contest"
              optionFilterProp="children"
              onChange={onChangeIdContest}
              onSearch={onSearchContest}
              filterOption={(input, option) =>
                (option?.value ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={idContest}
            />
          </div>
        </div>

        <div className="cursor-pointer" onClick={hanldeAddAccount}>
          Thêm
        </div>
      </Modal>
      <a
        class="block py-2 pr-4 pl-3 text-gray-700 rounded
                   hover:bg-gray-100 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0 dark:text-gray-400
                     md:dark:hover:text-white dark:hover:bg-gray-700
                      dark:hover:text-white md:dark:hover:bg-transparent"
        onClick={showModal}
      >
        Thêm kết quả online Contest
      </a>
    </>
  );
};
export default AddOnlineRankingModal;
