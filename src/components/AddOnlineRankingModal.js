import React, { useState } from "react";
import { Input, Modal, message, DatePicker } from "antd";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddOnlineRankingModal = ({ isModalOpen, showModal, handleCancel }) => {
  const [newUserName, setNewUserName] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [submitInfo, setSubmitInfo] = useState({
    LastSubmit: Date.now,
    AcceptedInLast100Submission: 0,
  });
  const [messageApi, contextHolder] = message.useMessage();

  const hanldeAddAccount = () => {
    axios
      .get("http://localhost:5035/codeforceAccount", {})
      .then(function (response) {
        let checkExist = response.data.CodeforceAccount.filter(
          (x) => x.UserName == newUserName
        );
        if (checkExist.length > 1) {
          messageApi.open({
            type: "error",
            content: "This account has already existed",
          });
        } else {
          axios
            .post("http://localhost:5035/codeforceAccount", {
              userName: newUserName,
              lastSubmit: submitInfo.LastSubmit,
              acceptedInLast100Submission:
                submitInfo.AcceptedInLast100Submission,
            })
            .then(function (response) {
              console.log(response);
              messageApi.open({
                type: "success",
                content: "Success",
              });
              oncancel();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const onChangeOrganizeDate = (date, dateString) => {
    console.log(date, dateString);
  };

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
            Tên tài khoản{" "}
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
              onChange={(e) => setNewUserName(e.target.value)}
              value={newUserName}
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
              onChange={(e) => setNewUserName(e.target.value)}
              value={newUserName}
            />
          </div>
        </div>
        <div
          className="w-[400px] items-center flex h-[50px] rounded-md
        justify-center cursor-pointer"
        >
          <div className="w-2/5 flex items-center">
            Tên cuộc thi
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
              placeholder="Tên cuộc thi"
              onChange={(e) => setNewUserName(e.target.value)}
              value={newUserName}
            />
          </div>
        </div>
        <div
          className="w-[400px] items-center flex h-[50px] rounded-md
        justify-center cursor-pointer"
        >
          <div className="w-2/5 flex items-center">
            Ngày tổ chức
            <div className="flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={faStarOfLife}
                className="w-[8px] h-[8px] ml-1 text-red-600"
              />
            </div>
          </div>
          <div className="w-3/5 flex">
            <DatePicker onChange={onChangeOrganizeDate} />
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
              onChange={(e) => setNewUserName(e.target.value)}
              value={newUserName}
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
        Thêm tài kết quả online Contest
      </a>
    </>
  );
};
export default AddOnlineRankingModal;
