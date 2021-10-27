import React from "react";
import Menu_nav_text from "../Common/Menu_nav_text";
import axios from "axios";
import "./Rank_main.css";
function Rank_main() {
  // axios({
  //   method: "GET",
  //   url: "http://localhost:8080"
  // })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div>
      <div className="title">
        <Menu_nav_text name={"(아이콘)랭킹"}></Menu_nav_text>
      </div>
      <div className="top">
        "최고봉(닉네임) 기부천사(등급)님의 포인트는 1000P(현재 포인트)입니다.
        현재 랭킹은 1(순위)위 입니다!"
      </div>
    </div>
  );
}

export default Rank_main;
