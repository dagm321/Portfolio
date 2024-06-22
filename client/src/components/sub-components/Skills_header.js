import React from "react";
import './sub-component css/Skills_header.css';
import Square from "./Square";

export default function Skills_header() {
    let conde =0;
    return(
        <>
            <div className="skills_head">
                <div className="skills_box1"></div>
                <div className="skills_box2">
                    <h1>My Skills</h1>
                </div>
                <div className="skills_box3">
                    <Square/>
                </div>
            </div>
        </>
    );
}