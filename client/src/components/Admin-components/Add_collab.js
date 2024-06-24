import React, {useState} from "react";
import './admin-css/add-project.css';
import axios from 'axios';

export default function Add_colab() {
    const [title, setTitle] = useState();
    const [descripition, setDescription] = useState();
    const[image, setImage] = useState();
    
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createColabWorks', {title, descripition, image})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Collaboration Works</h2>
                    <form onSubmit={submit}>
                        <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Title" />
                        <textarea onChange={(e) => {setDescription(e.target.value)}} className="textarea" type="text" style={{height: '70px', marginLeft: "5px", borderRadius: '10px', width: "95%", marginTop: "4px"}} placeholder="Description"/>
                        <input onChange={(e) => {setImage(e.target.value)}} type="text" placeholder="Upload Image" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}