import React from "react";
import Menu_nav_text from "../Common/Menu_nav_text";
import './Join_main.css';
import Join_low from "./Join_low";
import Join_checkbox from "./Join_checkbox";
import Join_userdata from "./Join_userdata";
import Common_Button from "../Common/Button/Common_Button";
function Join_main() {


    return (

        <div className="Join-main-container-class">
            <div className="Join-main-title-class">
                <Menu_nav_text name={"회원가입"}></Menu_nav_text>
            </div>
            <div className="Join-main-low-class">
                <div className="Join-main-low-info-class">
                    <p1>[회원가입을 위한 개인정보 수집 및 이용안내</p1><br></br>
                    <p1>
                        대한적십자사 혈액관리본부는 개인정보 보호법에 따라 회원가입을 위한 개인정보 수집 및 이용에 대해 아래와 같이 안내드립니다.
                    </p1>
                    <p1>
                        내용을 읽어보신 후 동의여부를 결정하여 주시기 바랍니다.
                    </p1>
                </div>
                <div className="Join-main-low-data-class">
                    <Join_low></Join_low>
                </div>
                <div className="Join-main-low-radiobox-class">
                    <Join_checkbox></Join_checkbox>
                </div>

            </div>
            <div className="Join-main-userdata-class">
                    <Join_userdata>dd</Join_userdata>
            </div>
            <div className="Join-main-btn-class">
                <Common_Button name={"가입완료"}></Common_Button>

            </div>
        </div>


    )

}

export default Join_main;