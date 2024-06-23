import React, { useState } from "react";
import './admin-css/add-project.css';
import axios from 'axios';

export default function Add_Skills() {
    const [title, setTitele] = useState();
    const [logo, setLogo] = useState();
    const [rating, setRating] = useState();

    const submit = (e) => {
        // e.preventDefault();
        axios.post('http://localhost:3001/createskill', {title, logo, rating})
        .then(result => console.log(result))
        .catch(err =>console.log(err))
    }

    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Skills</h2>
                    <form onSubmit={submit}>
                        <input type="text" placeholder="Skill Name"
                        onChange={(e) => {setTitele(e.target.value)}} />
                        <input type="text" placeholder="Icon" 
                        onChange={(e) => {setLogo(e.target.value)}}/>
                        <input type="text" placeholder="Rating"
                        onChange={(e) => {setRating(e.target.value)}} />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}