import React from "react";
import './css/Skills_body.css';
import Skills_header from "./sub-components/Skills_header";
import Skills_item from "./sub-components/Skills_item";
import axios from 'axios';
import {useState, useEffect} from 'react';
import DOMPurify from 'dompurify';

export default function Skills_body () {
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
            <Skills_header/>
            <div className="skills_body">
                <div className="skills">
                    {
                        skills.map((skill) => {
                            const sanitizedLogo = DOMPurify.sanitize(skill.logo);
                            return <Skills_item rating={skill.rating} language_name={skill.title} svg={sanitizedLogo}/>
                        })
                    }
                </div>
            </div>
        </>
    );
}