import React, { useState, useEffect, useCallback } from "react";
import Header_nav from "../Common/Header/Header_nav";
import Main_rank from "./Main_rank";
import UseLocalHook from "../Common/Function/UseLocalHook";
import Main_title from "./Main_title_text";
import Main_Button from "../Common/Button/Main_Button";
import ReactModal from 'react-modal';
import Board_main from "../Board/Board_main";
import Directed_main from "../Directed/Directed_main";
import Join_main from "../Join/Join_main";
import Login_main from "../Login/Login_main";
import Notice_main from "../Notice/Notice_main";
import Rank_main from "../Rank/Rank_main";
import Bloodhouse_main from "../Bloodhouse/Bloodhouse_main";
import Header_nav_login from "../Common/Header/Header_nav_login";

import "./Main_base.css";
import Mypage_main from "../Mypage/Mypage_main";
import Directed_inquire from "../Directed/Directed_inquire";
var text="";
function Main_base() {
    var tmp;
    const modal_style = {


        overlay: {

            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0,0 )",

        },
        content: {

            left: 350,
            right: 350,
            top: 100,
            bottom: 100,
            zIndex: 0,
            padding: 10
        },

    };

    //새로고침해도 모달창이 안꺼지도록 하는 함수
    const [modalIsOpen, setModalIsOpen] = UseLocalHook("true", false)
    //새로고침해도 모달창에서 불러온 컴포넌트가 안꺼지게 하는 함수
    const [modal, setmodal] = useState(
        () => JSON.parse(window.localStorage.getItem("modal")) || 0
    );

    useEffect(() => {
        window.localStorage.setItem("modal", JSON.stringify(modal));
    }, [modal]);
    const [testvalue,settestvalue]=useState(true);
    const [getValue, setValue] = useState("");
    const getsetValue = (text) => {
        setValue(text);
        setModalIsOpen(true);
        setmodal(text);
    }
    const getsetValue1 = (text) => {
        console.log(text)
        alert("회원가입이 완료되었습니다.")
        setmodal("로그인");
    }
    const getsetValue2 = (text) => {
        console.log("여기로~")
      
        setmodal("지정헌혈조회");
    }
    const logoutsuccess=()=>
    {   //로그인수정 중복된값을 넣어서 새로 렌더링이안되었던거같음
        settestvalue(!testvalue)
        console.log("logout")
      
    }
    const loginsuccess = (text) => {
        console.log(text)
        setModalIsOpen(false)
    }
    const onChageClick=(menu,e)=>{
        setModalIsOpen(true);
        setmodal(menu);

    }
   useEffect(()=>{



   })
  
    return (
        <div className="Main-base-class">
            
            <div className="Main-base-Header-container-class">
          
            <div className="Main-base-Header-class"  >
                {/*</div><div className="Main-base-Header-class" onClick={() => setModalIsOpen(true)}>*/}
                {console.log("main",sessionStorage.getItem("userid"))}
                {sessionStorage.getItem("userId")===null?<Header_nav value={text} getsetValue={getsetValue}></Header_nav>:<Header_nav_login logoutsuccess={logoutsuccess}></Header_nav_login>}
                    {/*<div className="test1" onClick={() => onChageClick2(getValue)}> emry</div>
                    {console.log("test:"+text+"get:"+getValue)}*/}
                </div>
            </div>
            <div className="Main-base-title-container-class">
            <div className="Main-base-title-class">
                <Main_title></Main_title>
                </div>
            </div>
            <div className="Main-base-rank-container-class">
                {/* <Main_rank value={text} getsetValue={getsetValue}>000000000</Main_rank> */}
                {/* <div className="Main-base-rank-class" onClick={(e)=>{onChageClick("랭킹",e)}}> */}
                <div className="Main-base-rank-class" >
                <Main_rank getsetValue={getsetValue}></Main_rank>
            </div>
            </div>
            <div className="Main-base-list-container-class">
                <div className="Main-base-list-class" >
                    {/*<Main_list></Main_list>*/}
                    <div className="Main-base-list-button" onClick={(e)=>{onChageClick("헌혈증_기부",e)}}>                  
                        <Main_Button name={"헌혈증 기부"} ></Main_Button>
                    </div>
                    <div className="Main-base-list-button" onClick={(e)=>{onChageClick("지정헌혈",e)}}>
                        <Main_Button name={"지정헌혈"} ></Main_Button>
                    </div>
                    <div className="Main-base-list-button" onClick={(e)=>{onChageClick("헌혈의_집_예약",e)}}>
                        <Main_Button name={"헌혈의 집 예약"} ></Main_Button>
                    </div>

                    <div className="Main-base-list-button" onClick={(e)=>{onChageClick("공지사항",e)}}>
                        <Main_Button name={"공지사항"} ></Main_Button>
                    </div>
                </div>
            </div>



            <ReactModal style={modal_style} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>

                {
                
                {     
                       헌혈증_기부: <Board_main></Board_main>,
                       지정헌혈: <Directed_main getsetValue1={getsetValue1}></Directed_main>,
                       지정헌혈조회:<Directed_inquire ></Directed_inquire>,
                       //헌혈의_집_예약: <Bloodhouse_main></Bloodhouse_main>,
                        헌혈의_집_예약:<Mypage_main></Mypage_main>,                    
                       공지사항: <Notice_main></Notice_main>,
                       로그인: <Login_main loginsuccess={loginsuccess}></Login_main>,
                       회원가입: <Join_main getsetValue1={getsetValue1}></Join_main>,
                       랭킹: <Rank_main></Rank_main>,

                }[modal]
                
                }




            </ReactModal>
        </div>


    )

}

export default Main_base;
