import React from "react";
import './admin-css/add-project.css';
import {useState} from "react";
import Popup from "./Popup";
import axios from "axios";
import "./admin-css/popup.css";

export default function Add_project() {
    const[title, setTitle] = useState('');
    const[bio, setBio] = useState('');
    const[descripition, setDescription] = useState('');
    const[github_link, setGithub_link] = useState('');
    const[image, setImage] = useState(null);
    const [popup, setPopup] = useState(null);
    const[handlepop, sethandlepop] = useState(false); 
    const close = () => {
        sethandlepop(false);
    }
    const submit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('bio', bio);
        formdata.append('descripition', descripition);
        formdata.append('github_link', github_link);
        formdata.append('image', image);
        try {
            const result = await axios.post('http://localhost:3001/createProject', formdata, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
            setPopup(<Popup
                status ={true}
                message={"Succesfully Added to the server"}
                closepopup={close}
            />);
            sethandlepop(true);
            console.log(result);
        } catch (err) {
            setPopup(<Popup
                status ={false}
                message={"Inserting Data Failed: " + err}
                closepopup={close}
            />);
            sethandlepop(true);
            console.log(err);
        }
    }

    return(
        <>
            {handlepop ? (popup) : null}
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Project</h2>
                    <form onSubmit={submit} mult>
                        <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Title" required/>
                        <input onChange={(e) => {setBio(e.target.value)}} type="text" placeholder="Bio" required/>
                        <textarea onChange={(e) => {setDescription(e.target.value)}} className="textarea" type="text" style={{height: '70px', borderRadius: '10px', width: "95%", marginLeft: "5px", marginTop: "5px"}} placeholder="Description" required/>
                        <input onChange={(e) => {setImage(e.target.files[0])}} type="file" placeholder="Upload Image" required/>
                        <input onChange={(e) => {setGithub_link(e.target.value)}} type="text" placeholder="Github Link" required/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}