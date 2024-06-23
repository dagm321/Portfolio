import React from "react";
import Square from "./sub-components/Square";
import './css/About_body.css';
import me from '../assets/images/me.png';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

function About_body() {
    const navigate = useNavigate();
    const gotocontact = (e) => {
        e.preventDefault();
        navigate('/contact');
    }
    const [description, setDescription] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/getAbout')
        .then(result => {
            console.log(result)
            setDescription(result.data)
        })
        .catch(err => console.log(err))
    })
    return(
        <>
            <div className="about-body">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-content">
                    <div className="about-box1">
                        <div className="about-square_space">
                            <div className="invisible"></div>
                            <div className="invisible"></div>
                            <Square/>
                        </div>
                        <div className="about-image">
                            <img src={me} alt="Dagy's Picture"/>
                        </div>
                    </div>
                    <div className="about-line"></div>
                    <div className="about-box2">
                        <div className="about-paragraph">
                            <p>
                            {
                                description.map((text) => {
                                    return <p>
                                        {text.description}
                                    </p>
                                })
                            }
                            <br/><br/>
                            I am available for freelance. All you have to do is contact me here:
                            </p>
                        </div>
                        <div className="about-button">
                            <a href="/contact" onClick={gotocontact} >Contact<svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About_body;