import { Button, Modal, Input, DatePicker } from "antd";
import React, { useState } from "react";

const Ticket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-center w-screen">
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Upload CV</p>
        <p>Ma so sinh vien</p>
        <Input placeholder="MSSV" />
        <p>Lop</p>
        <Input placeholder="Lop" />
        <p>Mong muon cua ban than khi tham gia</p>
        <Input placeholder="Basic usage" />
      </Modal>
      <div className="flex flex-col mt-5 w-1/2">
        <div className="flex">
          <img
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none 
          lg:rounded-l text-center overflow-hidden"
            alt="TicketImage"
            src="https://mant.vn/wp-content/uploads/2021/07/cover_image_1604499904.jpg.760x400_q85_crop_upscale.jpg"
          />
          <div className="flex flex-col ml-5">
            <div className="text-gray-900 font-bold text-xl">
              Thực tế ảo tăng cường game pokomon go
            </div>
            <div className="text-gray-700 text-base mt-3">
              Dự án tham gia chương trình khởi nghiệp Quốc gia
            </div>
            <div className="flex">
              <div className="text-gray-700 text-base">Hạn chót tham gia</div>
              <div className="text-gray-900 font-bold ml-3">10-10-2022</div>
            </div>
            <div className="flex">
              <div className="text-gray-700 text-base">
                Số lượng thành viên hiện tại
              </div>
              <div className="text-gray-900 font-bold ml-3">4/5</div>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-2/3">
            <div className="font-bold text-lg my-5">Thông tin</div>
            <div className="w-full">
              <div className="font-bold">Mô tả về cuộc thi</div>
              <div className="mt-1">
                Diễn đàn là cầu nối hữu ích cho HSSV tham gia vào Hành trình
                Khởi nghiệp tại các trường ĐH, CĐ, TC và các trường THPT trên
                toàn quốc, qua đó giúp HSSV hiểu được ý nghĩa, vai trò và tầm
                quan trọng của hành trình Khởi nghiệp đối với sự phát triển của
                Quốc gia, đồng thời, nâng cao tư duy, kiến thức, kỹ năng và lập
                thân, lập nghiệp cho HSSV
              </div>
            </div>
            <div className="w-full mt-4">
              <div className="font-bold">Mô tả về dự án</div>
              <div className="mt-1">
                Công ty VETC được thành lập với mục tiêu trở thành đơn vị triển
                khai và vận hành hệ thống thu phí tự động ETC (Electronic Toll
                Collection) tại Việt Nam. Mong muốn của VETC là mang đến giải
                pháp thu phí ứng dụng công nghệ hiện đại góp phần tăng tốc cho
                sự phát triển chung của lĩnh vực Giao thông Vận tải nói riêng và
                nền kinh tế Việt Nam nói chung. Ý tưởng đầu tư hệ thống thu phí
                tự động không dừng của VETC được bắt nguồn từ những đánh giá về
                lợi ích mà hệ thống này mang lại, đồng thời dựa trên thực tế
                thành công của nhiều quốc gia/vùng lãnh thổ trên thế giới.
              </div>
            </div>
            <div>Vi tri trong du an</div>
            <div>Yeu cau cong viec</div>
            <div>1 nam lam viec voi Nodejs</div>
            <div>co the lam viec voi mongodb</div>
            <div className="flex">
              <div className="border p-2 rounded"> AR</div>
              <div className="border p-2 rounded ml-2"> GAME</div>
            </div>
          </div>
          <div className="w-1/3">
            <div
              className="bg-sky-200 text-red-600 w-full h-[50px] m-3
              font-bold cursor-pointer flex justify-center items-center rounded-md
              hover:bg-sky-500 hover:text-white"
              onClick={showModal}
            >
              Ứng tuyển ngay
            </div>
            <div className="mt-2 m-3">
              <div className="font-bold">Yêu cầu kinh nghiệm</div>
              <div>Backend dev</div>
              <div>Nodejs</div>
            </div>
            <div className="mt-2 m-3">
              <div className="font-bold">Yêu cầu kỹ năng</div>
              <div>Làm việc nhóm</div>
              <div>Giao tiếp</div>
              <div>Đọc tài liệu tiếng Anh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
