import { Card, Avatar } from "antd";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk, faFax } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Meta from "antd/lib/card/Meta";
import NavBar from "../src/components/NavBar";
import Link from "next/link";

const images = ["/a.jpg", "/b.jpg", "/c.jpg"];

const Landing = () => {
  const handleClickArticle = () => {
    console.log(1);
  };

  return (
    <div>
      <NavBar></NavBar>
      <Slide autoplay={true}>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[0]})`,
              height: 350,
              backgroundSize: "contain",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[1]})`,
              height: 350,
              backgroundSize: "contain",
            }}
          ></div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[2]})`,
              height: 350,
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </Slide>
      <div className="mt-10 font-bold text-2xl text-center">
        CÁC HOẠT ĐỘNG NỔI BẬT
      </div>
      <Link href={"https://reactjs.org/docs/hooks-state.html"}>
        <div
          className="flex justify-center cursor-pointer"
          onClick={handleClickArticle}
        >
          <div className="flex justify-center mt-5 w-3/5">
            <Card
              style={{
                width: 300,
                margin: 8,
              }}
              cover={<img alt="example" src="/chinhphucmuathi.jpg" />}
              actions={[]}
            >
              <Meta
                className="flex-nowrap flex"
                title="Chương trình chinh phục mùa thi HK2 2022 - 2023 title"
                description="Chương trình chinh phục mùa thi hỗ trợ các bạn sinh
              viên ôn tập, chuẩn bị hành trang để đạt kết quả cao trong cuộc thi 
              cuối kì. Là sự kiện mỗi kì của CLB IT dành cho các bạn sinh viên"
              />
            </Card>
            <Card
              style={{
                width: 300,
                margin: 8,
              }}
              cover={<img alt="example" src="/chinhphucmuathi.jpg" />}
              actions={[]}
            >
              <Meta
                className="flex-nowrap flex"
                title="Chương trình chinh phục mùa thi HK2 2022 - 2023 title"
                description="Chương trình chinh phục mùa thi hỗ trợ các bạn sinh
              viên ôn tập, chuẩn bị hành trang để đạt kết quả cao trong cuộc thi 
              cuối kì. Là sự kiện mỗi kì của CLB IT dành cho các bạn sinh viên"
              />
            </Card>
          </div>
        </div>
      </Link>
      <div className="mt-10 font-bold text-2xl text-center">
        CÁC DỰ ÁN NGHIÊN CỨU KHOA HỌC
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-5 w-3/5">
          <div
            className="w-1/3 cursor-pointer rounded-md transition duration-300 
          ease-in hover:-translate-y-1 hover:scale-110"
          >
            <img
              src="https://mant.vn/wp-content/uploads/2021/07/cover_image_1604499904.jpg.760x400_q85_crop_upscale.jpg"
              className="rounded-md"
            />
            <div className="m-2 font-bold text-lg">
              Tích hợp AR và mobile cloud computing
            </div>
          </div>
          <div
            className="w-1/3 cursor-pointer rounded-md transition duration-300 
          ease-in hover:-translate-y-1 hover:scale-110 ml-4"
          >
            <img
              src="https://mant.vn/wp-content/uploads/2021/07/cover_image_1604499904.jpg.760x400_q85_crop_upscale.jpg"
              className="rounded-md"
            />
            <div className="m-2 font-bold text-lg">
              Tích hợp AR và mobile cloud computing
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px] bg-sky-200 flex justify-center items-center font-bold">
        <div>Phát triển bởi Câu lạc bộ IT TDMU</div>
        <div>
          <FontAwesomeIcon
            icon={faMailBulk}
            className="w-[20px] h-[20px] mx-2"
          />
          <FontAwesomeIcon icon={faPhone} className="w-[20px] h-[20px] mx-2" />
          <FontAwesomeIcon icon={faFax} className="w-[20px] h-[20px] mx-2" />
        </div>
      </div>
    </div>
  );
};
export default Landing;
