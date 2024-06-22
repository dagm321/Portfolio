import React from "react";
import './sub-component css/Projects_header.css';
import Square from './Square';
function Projects_header () {
    return(
        <>
         <div className="projects-header">
            <div className="projects-header-box1"></div>
            <div className="projects-header-box2">
                <h1>Projects</h1>
            </div>
            <div className="projects-header-box3">
                <Square/>
            </div>
         </div>
        </>
    );
}
export default Projects_header;