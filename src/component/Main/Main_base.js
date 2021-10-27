import React, { useState, useEffect } from "react";
import Header_nav from "../Common/Header/Header_nav";
import Main_rank from "./Main_rank";
import UseLocalHook from "../Common/UseLocalHook";
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
import Main_list from "./Main_list";
import "./Main_base.css";
var text = "";
function Main_base() {
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

            left: 200,
            right: 200,
            top: 100,
            bottom: 100,
            zIndex: 0,
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

    const [getValue, setValue] = useState("랭킹");
    const getsetValue = (text) => {
        setValue(text);
    }
    const onChageClick=(menu)=>{
        setModalIsOpen(true);
        setmodal("헌혈증_기부");

    }

    return (
        <div className="Main-base-class">
            <div className="Main-base-Header-container-class">
                <div className="Main-base-Header-class" onClick={() => setModalIsOpen(true)}>
                    <Header_nav></Header_nav>
                </div>
            </div>
            <div className="Main-base-title-class">
                <Main_title></Main_title>
            </div>
            <div className="Main-base-rank-container-class">
                {/* <Main_rank value={text} getsetValue={getsetValue}>000000000</Main_rank> */}
                <Main_rank></Main_rank>
            </div>
            <div className="Main-base-list-container-class">
                <div className="Main-base-list-class" >
                    {/*<Main_list></Main_list>*/}
                    <div onClick={onChageClick}>                  
                        <Main_Button name={"헌혈증 기부"} ></Main_Button>
                    </div>
                    <div onClick={onChageClick}>
                        <Main_Button name={"지정헌혈"} ></Main_Button>
                    </div>
                    <div onClick={onChageClick}>
                        <Main_Button name={"헌혈의 집 예약"} ></Main_Button>
                    </div>

                    <div onClick={onChageClick}>
                        <Main_Button name={"공지사항"} ></Main_Button>
                    </div>
                </div>
            </div>



            <ReactModal style={modal_style} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>


                {{
                       헌혈증_기부: <Board_main></Board_main>,
                       지정헌혈: <Directed_main></Directed_main>,
                       지헌혈의_집_예약: <Bloodhouse_main></Bloodhouse_main>,
                       공지사항: <Notice_main></Notice_main>,
                       로그인: <Login_main></Login_main>,
                       회원가입: <Join_main></Join_main>,
                       랭킹: <Rank_main></Rank_main>,

                }[modal]
                }




            </ReactModal>
        </div>


    )

}

export default Main_base;
