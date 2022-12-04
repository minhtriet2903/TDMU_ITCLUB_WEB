import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import Link from "next/link";

const Ticket = () => {
  return (
    <div>
      <div className="mt-10 font-bold text-2xl text-center">
        CÁC DỰ ÁN NGHIÊN CỨU KHOA HỌC
      </div>
      <div className="flex justify-center m-5">
        <RangePicker />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-5 flex-wrap">
          <Link href={"/Ticket/detail"}>
            <div
              className="w-1/4 cursor-pointer rounded-md transition duration-300 
          ease-in hover:-translate-y-1 hover:scale-110 m-4"
            >
              <img
                src="https://mant.vn/wp-content/uploads/2021/07/cover_image_1604499904.jpg.760x400_q85_crop_upscale.jpg"
                className="rounded-md"
              />
              <div className="m-2 font-bold text-lg">
                Tích hợp AR và mobile cloud computing
              </div>
            </div>
          </Link>
          <div
            className="w-1/4 cursor-pointer rounded-md transition duration-300 
          ease-in hover:-translate-y-1 hover:scale-110 m-4"
          >
            <img
              src="https://mant.vn/wp-content/uploads/2021/07/cover_image_1604499904.jpg.760x400_q85_crop_upscale.jpg"
              className="rounded-md"
            />
            <div className="m-2 font-bold text-lg">
              Tích hợp AR và mobile cloud computing
            </div>
            <div className="flex">
              <div className="text-gray-700 w-[100px]">Tham gia</div>
              <div className="text-gray-900 font-bold ml-3">
                Nghiên cứu khoa học sinh viên TDMU 2022 - 2023
              </div>
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
            <div className="flex">
              <div className="border bg-sky-300 p-[2px] text-white font-bold rounded">
                AR
              </div>
              <div
                className="border bg-sky-300 p-[2px] text-white font-bold rounded
              ml-2"
              >
                GAME
              </div>
            </div>
          </div>
          <div
            className="w-1/4 cursor-pointer rounded-md transition duration-300 
          ease-in hover:-translate-y-1 hover:scale-110 m-4"
          >
            <img
              src="https://mant.vn/wp-content/uploads/2021/07/cover_image_1604499904.jpg.760x400_q85_crop_upscale.jpg"
              className="rounded-md"
            />
            <div className="m-2 font-bold text-lg">
              Tích hợp AR và mobile cloud computing
            </div>
            <div className="flex">
              <div className="text-gray-700 w-[100px]">Tham gia</div>
              <div className="text-gray-900 font-bold ml-3">
                Nghiên cứu khoa học sinh viên TDMU 2022 - 2023
              </div>
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
            <div className="flex">
              <div className="border bg-sky-300 p-[2px] text-white font-bold rounded">
                AR
              </div>
              <div
                className="border bg-sky-300 p-[2px] text-white font-bold rounded
              ml-2"
              >
                GAME
              </div>
            </div>
          </div>
          <div
            className="w-1/4 cursor-pointer rounded-md transition duration-300 
          ease-in hover:-translate-y-1 hover:scale-110 m-4"
          >
            <img
              src="https://mant.vn/wp-content/uploads/2021/07/cover_image_1604499904.jpg.760x400_q85_crop_upscale.jpg"
              className="rounded-md"
            />
            <div className="m-2 font-bold text-lg">
              Tích hợp AR và mobile cloud computing
            </div>
            <div className="flex">
              <div className="text-gray-700 w-[100px]">Tham gia</div>
              <div className="text-gray-900 font-bold ml-3">
                Nghiên cứu khoa học sinh viên TDMU 2022 - 2023
              </div>
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
            <div className="flex">
              <div className="border bg-sky-300 p-[2px] text-white font-bold rounded">
                AR
              </div>
              <div
                className="border bg-sky-300 p-[2px] text-white font-bold rounded
              ml-2"
              >
                GAME
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
