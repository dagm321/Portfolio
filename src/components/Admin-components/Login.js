import React from "react";
import './admin-css/login.css';
import my_picture from '../../assets/images/me.png';
import Square from "../sub-components/Square";

export default function Login() {
    return(
        <>
            {/* ---------Header---------- */}
            <div className="header">
                <div className="logo">
                    <h2>Dagos</h2>
                </div>
                <div className="menu">
                    <Square/>
                </div>
            </div>
            {/*--------- end Header------ */}

            <div className="login-body">
                <div className="login-box1">
                    <img src={my_picture} alt="Dagy's Picture" />
                </div>
                <div className="login-box2">
                    <div className="login-line"></div>
                </div>
                <div className="login-box3">
                    <div className="login-input">
                        <h1>Log in</h1>
                        <form>
                            <input type="text" placeholder="Email" /><br/>
                            <input type="password" placeholder="Password" /><br/>
                            <button>Log in</button>
                        </form>
                    </div>
                </div>
            </div>


            {/* --------- Footer------- */}
            <div className="line"></div>
            <div className="footer">
                
                <div className="contents">
                    <p>All Right is received | 2024 </p>
                </div>
            </div>
            
        </>
    );
}