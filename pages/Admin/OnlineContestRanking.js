import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "antd";
import OnlineRanking from "../../src/components/OnlineRanking";
import OnlineContestRankingLog from "../../src/components/OnlineContestRankingLog";
import ContestTable from "../../src/components/ContestTable";
import axios from "axios";

export default function OnlineContestRanking({
  dataOnlinRanking,
  setDataOnlinRanking,
}) {
  const [onlineContests, setOnlineContests] = useState([]);
  const [onlineContestRankings, setOnlineContestRankings] = useState([]);

  const onChange = (key) => {
    if (key == "contest") {
      axios
        .get("http://localhost:5035/onlineContest", {})
        .then(function (response) {
          setOnlineContests(response.data.allOnlineContests);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else if (key == "ranking") {
      axios
        .get("http://localhost:5035/onlineRanking", {})
        .then(function (response) {
          setDataOnlinRanking(response.data.allOnlineRanking);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:5035/onlineContestRanking", {})
        .then(function (response) {
          setOnlineContestRankings(response.data.allOnlineContestRanking);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    // console.log(key);
  };

  return (
    <Tabs
      defaultActiveKey="2"
      items={[
        {
          label: "Online Contest",
          key: "contest",
          children: (
            <ContestTable dataOnlineContest={onlineContests}></ContestTable>
          ),
        },
        {
          label: "Ranking",
          key: "ranking",
          children: (
            <OnlineRanking dataOnlineRanking={dataOnlinRanking}></OnlineRanking>
          ),
        },
        {
          label: "Ranking Log",
          key: "rankingLog",
          children: (
            <OnlineContestRankingLog
              dataOnlineContestRankingLog={onlineContestRankings}
            ></OnlineContestRankingLog>
          ),
        },
      ]}
      onChange={onChange}
    />
  );
}
