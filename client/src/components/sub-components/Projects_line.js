import React from "react";
import './sub-component css/Projects_line.css';
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
function Projects_line({height_in_vh}) {
    return(
        <>
            <div className="projects-line" style={{ height: `${height_in_vh}vh` }}>
                <div className="projects_line"></div>
            </div>
        </>
    );
}
export default Projects_line;