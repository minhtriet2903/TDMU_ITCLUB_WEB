import React, { useState } from "react";
import { Modal } from "antd";

const QuestionModal = ({ isModalOpen, showModal, handleCancel }) => {
  return (
    <>
      <Modal
        title="Đặt câu hỏi"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="flex justify-center"
      >
       <div id="content" style={{backgroundColor: "#cafafe", width: "500px",marginLeft: "35%",marginTop: "5%", borderRadius: "10%"}}>
        <div className="container py-5">
            <div className="row justify-content-center ">
                <div className="col-6"> 
                <h1 className="text-center" style={{fontSize: "250%", color: "blue", fontFamily: "arial"}}><b>ĐẶT CÂU HỎI</b></h1>
                    <from >
                    <div className="mb-3" style={{marginLeft: "20%"}}>
                            <label htmlFor="id" style={{fontFamily: "arial"}}><b>Tên :</b></label>
                           <div> <input
                             type = "id" id="id" name="id" className="form-control" placeholder="Tên..." style={{borderRadius: "15px",width: "300px", height: "40px", padding: "3%"}}/></div>
                    </div>
                    <div className="mb-3" style={{marginLeft: "20%"}}>
                            <label htmlFor="email" style={{fontFamily: "arial"}}><b>Email:</b></label>
                            <div><input type = "email" id="email" name="email" className="form-control" placeholder="Email..." style={{padding: "3%",borderRadius: "15px",width: "300px", height: "40px"}}/></div>
                        </div>
                        <div className="mb-3" style={{marginLeft: "20%"}}>
                            <label htmlFor="phone" style={{fontFamily: "arial"}}><b>Số điện thoại:</b></label>
                            <div><input type = "phone" id="phone" name="phone" className="form-control" placeholder="Số điện thoại..." style={{padding: "3%",borderRadius: "15px",width: "300px", height: "40px"}}/></div>
                        </div>
                        <div className="mb-3" style={{marginLeft: "20%"}}>
                            <label htmlFor="question" style={{fontFamily: "arial"}}><b>Câu hỏi :</b></label>
                            <div><input type = "question" id="question" name="question" className="form-control" placeholder="Viết câu hỏi..." style={{padding: "3%", borderRadius: "15px",width: "300px", height: "40px"}}/></div>
                            
                        </div>
                        <button className="btn btn-primary" style={{backgroundColor: "blue",color:"white",  borderRadius: "20px", borderWidth: "2px", borderColor: "black", marginLeft: "40%", width: "100px", height: "40px"}}>
                            Gửi
                        </button> 
                    </from>
                </div>
            </div>
        </div>
        </div>
        <div></div>
      </Modal>
      <a
        class="block py-2 pr-4 pl-3 text-gray-700 rounded
                   hover:bg-gray-100 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0 dark:text-gray-400
                     md:dark:hover:text-white dark:hover:bg-gray-700
                      dark:hover:text-white md:dark:hover:bg-transparent"
        onClick={showModal}
      >
        Đặt câu hỏi
      </a>
    </>
  );
};
export default QuestionModal;
