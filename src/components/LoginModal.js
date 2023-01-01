import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = ({ isModalOpen, showModal, handleCancel, setLoginData }) => {
  const clientId =
    "970715451237-9qd17nt9v25sfchrado553vvt7j9svgq.apps.googleusercontent.com";

  const onSuccess = (credentialResponse) => {
    var userData = jwt_decode(credentialResponse.credential);
    console.log(userData);
    setLoginData(userData);
    localStorage.setItem("loginData", JSON.stringify(userData));
    handleCancel();
  };

  const handleFailure = (result) => {
    alert(result.error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
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
          {/* <img src="/googleLogo.png" className="h-[20px] w-[20px]" />
          <span className="ml-5 text-white font-bold text-lg">
            Đăng nhập bằng tài khoản Google
          </span> */}
          <GoogleLogin onSuccess={onSuccess} onError={handleFailure} />
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
    </GoogleOAuthProvider>
  );
};
export default Login;
