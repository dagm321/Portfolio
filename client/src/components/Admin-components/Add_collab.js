import React, {useState} from "react";
import './admin-css/add-project.css';
import axios from 'axios';
import Popup from "./Popup";

export default function Add_colab() {
    const [title, setTitle] = useState('');
    const [descripition, setDescription] = useState('');
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
        formdata.append('descripition', descripition);
        formdata.append('image', image);
        try {
            const result = await axios.post('http://localhost:3001/createColabWorks', formdata, {
                headers : {
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
        // axios.post('http://localhost:3001/createColabWorks', {title, descripition, image})
        // .then(result => console.log(result))
        // .catch(err => console.log(err))
    }

    return(
        <>
            {handlepop ? (popup) : null}
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Collaboration Works</h2>
                    <form onSubmit={submit}>
                        <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Title" required/>
                        <textarea onChange={(e) => {setDescription(e.target.value)}} className="textarea" type="text" style={{height: '70px', marginLeft: "5px", borderRadius: '10px', width: "95%", marginTop: "4px"}} placeholder="Description" required/>
                        <input onChange={(e) => {setImage(e.target.files[0])}} type="file" placeholder="Upload Image" required/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}