import React from "react";
import './css/Header.css';

function Header() {
    return(
        <>
            <div className="header">
                <div className="logo">
                    <h2>Dagos</h2>
                </div>
                <div className="menu">
                    <a href="/">Projects</a>
                    <a href="/">Skills</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
            </div>
        </>
    );
}
export default Header;