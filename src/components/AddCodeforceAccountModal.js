import React, { useState } from "react";
import { Input, Modal, message } from "antd";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddCodeforceAccountModal = ({ isModalOpen, showModal, handleCancel }) => {
  const [newUserName, setNewUserName] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [submitInfo, setSubmitInfo] = useState({
    LastSubmit: Date.now,
    AcceptedInLast100Submission: 0,
  });
  const [messageApi, contextHolder] = message.useMessage();

  const handleFindCFAccount = () => {
    axios
      .get("https://codeforces.com/api/user.info?handles=" + newUserName, {})
      .then(function (response) {
        // console.log(response.data.result[0]);
        setUserInfo(response.data.result[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    axios
      .get(
        "https://codeforces.com/api/user.status?handle=" +
          newUserName +
          "&from=1&count=100",
        {}
      )
      .then(function (response) {
        // console.log(response.data);
        let acceptedInLast100Submission = response.data.result.filter(
          (x) => x.verdict == "OK"
        );
        setSubmitInfo({
          ...submitInfo,
          AcceptedInLast100Submission: acceptedInLast100Submission.length,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
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
          <div className="cursor-pointer" onClick={handleFindCFAccount}>
            Kiểm tra
          </div>
        </div>
        {userInfo != null && (
          <div className="w-1/2 justify-center flex flex-col">
            <div>Thông tin tài khoản</div>
            <div className="flex justify-between">
              <div>MaxRank</div>
              <div>{userInfo.maxRank}</div>
            </div>
            <div className="flex justify-between">
              <div>maxRating</div>
              <div>{userInfo.maxRating}</div>
            </div>
            <div className="flex justify-between">
              <div>Rank</div>
              <div>{userInfo.rank}</div>
            </div>
            <div className="flex justify-between">
              <div>rating</div>
              <div>{userInfo.rating}</div>
            </div>
            <div>Thông Submisson</div>
            <div className="flex justify-between">
              <div>ACC in Last 100 submissions</div>
              <div>{submitInfo && submitInfo.AcceptedInLast100Submission}</div>
            </div>
            <div className="cursor-pointer" onClick={hanldeAddAccount}>
              Thêm
            </div>
          </div>
        )}
      </Modal>
      <a
        class="block py-2 pr-4 pl-3 text-gray-700 rounded
                   hover:bg-gray-100 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0 dark:text-gray-400
                     md:dark:hover:text-white dark:hover:bg-gray-700
                      dark:hover:text-white md:dark:hover:bg-transparent"
        onClick={showModal}
      >
        Thêm tài khoản Codeforce
      </a>
    </>
  );
};
export default AddCodeforceAccountModal;
