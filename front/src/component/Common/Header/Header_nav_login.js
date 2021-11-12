import React, { useState } from "react";
import "./Header_nav.css";
import Message from "../../Message/Message";

const Header_nav=(props)=>{
    const sendValue=(text)=>{
                 props.getsetValue(text);
             }
    const logout=()=>{
        sessionStorage.clear();
        props.logoutsuccess()

    }
    const [messageShow, setMessageShow] = useState(false);
    return (

        <div className="Header-nav-class">
            <div className="Header-nav-list-class">
                <div className="Header-nav-Login-class" onClick={logout}>
                    로그아웃
                </div>
                <div className="Header-nav-Join-class" onClick={()=>sendValue("회원가입")}>
                    마이페이지
                </div>
                <div className="Header-nav-Message-class" onClick={Message}>
                    메시지
                </div>
            </div>
        </div>

    )

}

export default Header_nav;