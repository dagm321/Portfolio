import React from "react";
import Projects_footer from "./sub-components/Projects_footer";
import Projects_content from "./sub-components/Projects_content";
import aio from '../assets/images/aio.jpg';
import bookingapp from '../assets/images/bookingapp.jpg';
import cityaddis from '../assets/images/cityaddis.jpg';
import {Buffer} from "buffer";
import Projects_header from "./sub-components/Projects_header";
import Projects_colab from "./sub-components/Projects_colab";
import axios from "axios";
import {useState, useEffect} from "react";

function Projects_body() {
    const[projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/getProjects')
        .then(result => {
            console.log(result)
            setProjects(result.data)
        })
        .catch(err => console.log(err))
    })
    function bufferToDataURL(bufferData, contentType) {
        return `data:${contentType};base64,${Buffer.from(bufferData).toString('base64')}`;
    }
    return(
        <>
            <Projects_header/>
            {
                projects.map((project, index) => {
                    return <Projects_content
                        project_title={project.title}
                        project_bio={project.bio}
                        project_paragraph={project.descripition}
                        project_link={project.github_link}
                        project_image={bufferToDataURL(project.image.data, project.image.contentType)}
                        flex_direction={
                            index % 2 === 0 ? ("row-reverse") : ("")
                        }
                    />
                })
            }
            <Projects_colab/>
            <Projects_footer/>

        </>
    );
}
export default Projects_body;