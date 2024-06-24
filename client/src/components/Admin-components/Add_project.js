import React from "react";
import './admin-css/add-project.css';
import {useState} from "react";
import axios from "axios";

export default function Add_project() {
    const[title, setTitle] = useState();
    const[bio, setBio] = useState();
    const[descripition, setDescription] = useState();
    const[github_link, setGithub_link] = useState();
    const[image, setImage] = useState();

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createProject', {title, bio, descripition, github_link, image})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Project</h2>
                    <form onSubmit={submit}>
                        <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Title" />
                        <input onChange={(e) => {setBio(e.target.value)}} type="text" placeholder="Bio" />
                        <textarea onChange={(e) => {setDescription(e.target.value)}} className="textarea" type="text" style={{height: '70px', borderRadius: '10px', width: "95%", marginLeft: "5px", marginTop: "5px"}} placeholder="Description" />
                        <input onChange={(e) => {setImage(e.target.value)}} type="text" placeholder="Upload Image" />
                        <input onChange={(e) => {setGithub_link(e.target.value)}} type="text" placeholder="Github Link" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}