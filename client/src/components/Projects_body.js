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
            {/* <Projects_content
                project_image={aio}
                project_title={"AIO"}
                project_bio={"An online Market Place"}
                project_paragraph={ "My name is Dagim Teshome, a passionate software develCurrently, I am a third-year Software Engineering student at Bits College. I specialize in web Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in bothmusic and software development.My name is Dagim Teshome, a passionate software develCurrently, I am a third-year Software Engineering student at Bits College. I specialize in webOutside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both music and software development.  "}
                project_link={""}
            />
            <Projects_content
                project_image={bookingapp}
                project_title={"Booking App"}
                project_bio={"An online cinema booking app"}
                project_paragraph={ "My name is Dagim Teshome, a passionate software develCurrently, I am a third-year Software Engineering student at Bits College. I specialize in web Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in bothmusic and software development.My name is Dagim Teshome, a passionate software develCurrently, I am a third-year Software Engineering student at Bits College. I specialize in webOutside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both music and software development.  "}
                project_link={""}
                flex_direction={"row-reverse"}
            />
            <Projects_content
                project_image={cityaddis}
                project_title={"City Addis"}
                project_bio={"Tour Guider website"}
                project_paragraph={ "My name is Dagim Teshome, a passionate software develCurrently, I am a third-year Software Engineering student at Bits College. I specialize in web Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in bothmusic and software development.My name is Dagim Teshome, a passionate software develCurrently, I am a third-year Software Engineering student at Bits College. I specialize in webOutside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both music and software development.  "}
                project_link={""}
            /> */}
            <Projects_colab/>
            <Projects_footer/>

        </>
    );
}
export default Projects_body;