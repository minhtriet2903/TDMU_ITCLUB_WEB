import React, { useState } from "react";
import { Modal } from "antd";

const Login = ({ isModalOpen, showModal, handleCancel }) => {
  return (
    <>
      <Modal
        title="Đăng nhập"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="flex justify-center"
      >
        <div
          className="w-[400px] items-center flex bg-red-400 h-[50px] rounded-md
        justify-center cursor-pointer"
        >
          <img src="/googleLogo.png" className="h-[20px] w-[20px]" />
          <span className="ml-5 text-white font-bold text-lg">
            Đăng nhập bằng tài khoản Google
          </span>
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
        Tham gia
      </a>
    </>
  );
};
export default Login;
