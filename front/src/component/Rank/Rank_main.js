import React, { useState, useEffect } from "react";
import Menu_nav_text from "../Common/Header/Menu_nav_text";
import axios from "axios";
import "./Rank_main.css";
import FIRST from "../../Img/RankIMG/rank1.png";
import SECOND from "../../Img/RankIMG/rank2.png";
import THIRD from "../../Img/RankIMG/rank3.png";
import RANKIMG from "../../Img/RankIMG/rankicon.png";
import PROFILEICON from "../../Img/RankIMG/profileicon.png";
import PROFILEICON1 from "../../Img/RankIMG/profileicon1.png";
function Rank_main() {
  const [ranks, setRanks] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-18-219-208-124.us-east-2.compute.amazonaws.com:8000/rank/rankings"
      )
      .then(function (response) {
        setRanks(response.data);
        // console.log("rr" + response.data[0]["id"]);
      });
  }, []);

  const [my, setMyRank] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-18-219-208-124.us-east-2.compute.amazonaws.com:8000/rank/rankings/" +
          sessionStorage.getItem("userId")
      )
      .then(function (response) {
        setMyRank(response.data);
      });
  }, []);

  const rankfunction = (ranking) => {
    if (ranking === 1) return;
    else if (ranking === 2) return <img className="rank-2" src={SECOND}></img>;
    else if (ranking === 3) return <img className="rank-3" src={THIRD}></img>;
  };
  const dividerank = (inputrank) => {
    if (inputrank.userRank == 1) {
      return (
        <div className="rank-1-container">
          <div className="rank-3-img-container">
            <img className="rank-3-img" src={PROFILEICON1}></img>
          </div>
          <div className="rank-1-p">
            {inputrank.nickname} <br></br> {inputrank.point}P
          </div>
          <img className="rank-1" src={FIRST}></img>
        </div>
      );
    } else if (inputrank.userRank == 2) {
      return (
        <div className="rank-2-container">
          <div className="rank-3-img-container">
            <img className="rank-3-img" src={PROFILEICON}></img>
          </div>
          <div className="rank-2-p">
            {inputrank.nickname} <br></br> {inputrank.point}P
          </div>
          <img className="rank-2" src={SECOND}></img>
        </div>
      );
    } else if (inputrank.userRank == 3) {
      return (
        <div className="rank-3-container">
          <div className="rank-3-img-container">
            <img className="rank-3-img" src={PROFILEICON}></img>
          </div>
          <div className="rank-3-p">
            {inputrank.nickname} <br></br> {inputrank.point}P
          </div>
          <img className="rank-3" src={THIRD}></img>
        </div>
      );
    }
  };

  const dividerankother = (otherrank) => {
    if (otherrank.userRank > 3)
      return (
        <p className="rank-other-p">
          {otherrank.userRank}. {otherrank.profile} {otherrank.nickname}{" "}
          {otherrank.point}P
        </p>
      );
  };
  return (
    <div className="rank-main-container">
      <div className="rank-main-nav-container">
        <div className="rank-main-nav-class">
          <Menu_nav_text name={"랭킹"} imgname={RANKIMG}></Menu_nav_text>
        </div>
      </div>
      <div className="rank-main-myrank-container">
        <div className="rank-main-myrank-class">
          {sessionStorage.getItem("userId") === null ? (
            <div>"당신도 피로회복에 참여해보세요!"</div>
          ) : (
            <div>
              {console.log("sdfsdf")} "{my.nickname}님의 포인트는{" "}
              {my.point}점입니다. 현재 랭킹은 {my.userRank}위 입니다!"
            </div>
          )}
        </div>
      </div>
      <div className="rank-main-all-container">
        <div className="rank-main-all-top-class">
          {ranks.map(
            (rank) => dividerank(rank)
            /* {rank.userRank} {rank.userNickname} {rank.userPoint} */
            /* {rankfunction(rank.userRank)} */
          )}
        </div>
      </div>
      <div className="rank-main-all-other-container">
        <div className="rank-main-all-other-class">
          {ranks.map((rank) => dividerankother(rank))}
        </div>
      </div>
      <div className="rank-bottom">
        <p>매월 1일 00시 정각 기준 랭킹 1위에게는 소정의 상품이 증정됩니다!</p>
        <p>랭킹은 매시간 마다 갱신됩니다.</p>
      </div>
    </div>
  );
}
export default Rank_main;