import React from "react";
import './css/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from 'react';
import axios from 'axios';
import DOMPurify from "dompurify";

function Footer() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getskills")
        .then(result => {
            setSkills(result.data)
            console.log(result)
        })
        .catch(err => console.log(err))
    })
    return (
        <>
            <div className="line"></div>
            <div className="footer">
                
                <div className="contents">
                    {
                        skills.map((skill) => {
                            const sanitizedLogo = DOMPurify.sanitize(skill.logo);
                            return <p>{skill.title} <span dangerouslySetInnerHTML={{__html: sanitizedLogo}} /> </p>
                        })
                    }
                </div>
            </div>
            
        </>
    );
}
export default Footer;