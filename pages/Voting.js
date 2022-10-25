import { Card, Button, Radio, Divider } from "antd";
import React from "react";
const { Meta } = Card;

const Voting = () => (
  <div className="ml-5 mt-5">
    fsdfsdfsdf
    Thắng
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <Button type="primary">Vote</Button>
    </Card>
  </div>
);

export default Voting;
