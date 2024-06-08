import React from "react";
import './sub-component css/Projects_content.css';
import Projects_line from "./Projects_line";

function Projects_content({project_title, project_image, project_bio, project_paragraph, project_link, flex_direction}) {
    return(
        <>
            <div className="projects-content-body" style={{flexDirection: `${flex_direction}`}}>
                
                <div className="projects-content-box1">
                    <img src={project_image} alt="aio image" />
                </div>
                <div className="projects-content-box2">
                    <div className="content-box1">
                        <div className="paragraph-box">
                            <h1>{project_title}</h1>
                            <p>{project_bio}</p>
                        </div>
                    </div>
                    <div className="content-box2">
                        <div className="content-paragraph">
                            <p>
                            {project_paragraph}
                            <br/><br/>
                            I am available for freelance. All you have to do is contact me here:
                            </p>
                        </div>
                    </div>
                    <div className="content-box3">
                        <div className="view-button">
                            <a href={{project_link}} >View &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></a>
                        </div>
                    </div>
                </div>
            </div>
            <Projects_line
                height_in_vh={20}
            />
        </>
    );
}
export default Projects_content;