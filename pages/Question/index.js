import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCheck } from "@fortawesome/free-solid-svg-icons";

const Ticket = () => {
  return (
    <div>
      <div className="flex mt-10 justify-center">
        <div className="w-[110px] h-[190px] mr-5 flex flex-col justify-center ml-5">
          <div className="w-full bg-green-400 font-bold px-1 flex justify-end items-center">
            {" "}
            <FontAwesomeIcon icon={faCheck} className="text-[#3380FF] mr-2" />
            50 answers
          </div>
          <div className="w-full flex justify-end px-1">5000 views</div>
        </div>
        <div className="max-w-[900px] w-[900px] flex justify-center h-[190px]">
          <div className="border-t border-gray-400 p-4 flex flex-col justify-between">
            <i class="fa-solid fa-message-question"></i>
            <div className="mb-2">
              <div className="text-gray-900 font-bold text-base">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="text-[#3380FF] mr-3"
                />
                Thực tế ảo tăng cường game pokomon go
              </div>
              <div className="text-gray-700 text-base">
                Back in 2003 (when I was 17), I competed in a Battleship AI
                coding competition. Even though I lost that tournament, I had a
                lot of fun and learned a lot from it. … Now, I would like to
                resurrect this competi
              </div>
              <div className="flex">
                <div className="border p-2 rounded"> AR</div>
                <div className="border p-2 rounded ml-2"> GAME</div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                className="w-10 h-10 rounded-full mr-4"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
              <div className="text-[14px] flex">
                <div className="text-gray-900">Nguyễn Phạm Minh Triết</div>
                <div className="text-gray-900 ml-3">Sinh viên D19PM02</div>
                <div className="text-gray-600 ml-3">Created on Aug 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        <div className="w-[110px] h-[190px] mr-5 flex flex-col justify-center ml-5">
          <div className="w-full bg-green-400 font-bold px-1 flex justify-end items-center">
            {" "}
            <FontAwesomeIcon icon={faCheck} className="text-[#3380FF] mr-2" />
            50 answers
          </div>
          <div className="w-full flex justify-end px-1">5000 views</div>
        </div>
        <div className="max-w-[900px] w-[900px] flex justify-center h-[190px]">
          <div className="border-t border-gray-400 p-4 flex flex-col justify-between">
            <i class="fa-solid fa-message-question"></i>
            <div className="mb-2">
              <div className="text-gray-900 font-bold text-base">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="text-[#3380FF] mr-3"
                />
                Thực tế ảo tăng cường game pokomon go
              </div>
              <div className="text-gray-700 text-base">
                Back in 2003 (when I was 17), I competed in a Battleship AI
                coding competition. Even though I lost that tournament, I had a
                lot of fun and learned a lot from it. … Now, I would like to
                resurrect this competi
              </div>
              <div className="flex">
                <div className="border p-2 rounded"> AR</div>
                <div className="border p-2 rounded ml-2"> GAME</div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                className="w-10 h-10 rounded-full mr-4"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
              <div className="text-[14px] flex">
                <div className="text-gray-900">Nguyễn Phạm Minh Triết</div>
                <div className="text-gray-900 ml-3">Sinh viên D19PM02</div>
                <div className="text-gray-600 ml-3">Created on Aug 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
