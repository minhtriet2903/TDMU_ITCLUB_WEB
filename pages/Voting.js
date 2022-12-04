import { Button, Avatar, List, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Voting = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <div>
      <div className="flex justify-center m-4 font-bold text-xl">
        AI SẼ LÀ NGƯỜI CHIẾN THẮNG TRONG CUỘC THI TDMU PROGRAMMING CONTEST 2022
      </div>
      <div className="ml-5 mt-5 flex justify-center">
        <div className="max-w-[250px] max-h-[500px] rounded overflow-hidden shadow-lg p-5 border mt-10">
          <div className="rounded relative h-[220px]">
            <img
              className="h-[200px] mx-auto"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <div class="absolute bottom-0 left-0">
              <img
                className="w-12 h-12 rounded-full mr-4"
                alt="example"
                src="https://sso.tdmu.edu.vn/self-service/assets/images/tdmu-icon-ldpi.png"
              />
            </div>
          </div>
          <div classNameName="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus
            </p>
          </div>
          <div className="pt-2 pb-2 flex">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
          </div>
          <Button className="w-full" type="primary">
            Vote
          </Button>
        </div>
        <div className="max-w-[250px] max-h-[500px] rounded overflow-hidden shadow-lg p-5 border ml-5">
          <div className="rounded relative h-[220px]">
            <img
              className="h-[200px] mx-auto"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <div class="absolute bottom-0 left-0">
              <img
                className="w-12 h-12 rounded-full mr-4"
                alt="example"
                src="https://sso.tdmu.edu.vn/self-service/assets/images/tdmu-icon-ldpi.png"
              />
            </div>
          </div>
          <div classNameName="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus
            </p>
          </div>
          <div className="pt-2 pb-2 flex">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
          </div>
          <Button className="w-full" type="primary">
            Vote
          </Button>
        </div>
        <div className="max-w-[250px] max-h-[500px] rounded overflow-hidden shadow-lg p-5 border mt-10 ml-5">
          <div className="rounded relative h-[220px]">
            <img
              className="h-[200px] mx-auto"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <div class="absolute bottom-0 left-0">
              <img
                className="w-12 h-12 rounded-full mr-4"
                alt="example"
                src="https://sso.tdmu.edu.vn/self-service/assets/images/tdmu-icon-ldpi.png"
              />
            </div>
          </div>
          <div classNameName="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus
            </p>
          </div>
          <div className="pt-2 pb-2 flex">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
          </div>
          <Button className="w-full" type="primary">
            Vote
          </Button>
        </div>
      </div>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">more</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Voting;
