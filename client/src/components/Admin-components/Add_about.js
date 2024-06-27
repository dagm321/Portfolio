import React from "react";
import './admin-css/add-project.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Popup from "./Popup";

export default function Add_about() {
    const [description, setDescription] = useState();
    const [text, setText] = useState();
    const [popup, setPopup] = useState(null);
    const [handlepop, setHandlepop] = useState(false);
    const close = () => {
        setHandlepop(false);
    }
    useEffect(() => {
        axios.get('http://localhost:3001/getAbout')
        .then(result => {
            console.log(result)
            setText(result.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    const submit_description = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createAboutMe', {description})
        .then(result => {
            setPopup(
                <Popup
                    status={true}
                    message={"Successfully Added to the server"}
                    closepopup={close}
                />
            );
            setHandlepop(true);
            console.log(result)
        })
        .catch(err => {
            setPopup(
                <Popup
                    status={false}
                    message={"Error: " + err}
                    closepopup={close}
                />
            );  
            setHandlepop(true);
            console.log(err)
        })
    }
    return(
        <>
            {handlepop ? (popup) : null}
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add About us paragraph</h2>
                    <form onSubmit={submit_description}>
                        <textarea className="textarea" maxLength={500} type="text" style={{height: '100px', borderRadius: '10px'}} placeholder="Description"
                        onChange={(e) => {setDescription(e.target.value)}} value={text}/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}