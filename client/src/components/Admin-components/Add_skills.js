import React, { useState } from "react";
import './admin-css/add-project.css';
import axios from 'axios';
import Popup from "./Popup";

export default function Add_Skills() {
    const [title, setTitele] = useState();
    const [logo, setLogo] = useState();
    const [rating, setRating] = useState();
    const [popup, setPopup] = useState(null);
    const[handlepop, sethandlepop] = useState(false); 
    const close = () => {
        sethandlepop(false);
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createskill', {title, logo, rating})
        .then(
            result => {
                console.log(result)
                setPopup(<Popup
                    status ={true}
                    message={"Succesfully Added to the server"}
                    closepopup={close}
                />);
                sethandlepop(true);
            }
        )
        .catch(err =>{
            setPopup(<Popup
                status ={false}
                message={"Inserting Data Failed: " + err}
                closepopup={close}
            />);
            sethandlepop(true);
            console.log(err)
        })
    }

    return(
        <>
            {handlepop ? (popup) : null}
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