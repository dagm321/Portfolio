import React, {useState} from "react";
import './admin-css/add-project.css';
import axios from 'axios';

export default function Add_colab() {

    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Collaboration Works</h2>
                    <form>
                        <input type="text" placeholder="Title" />
                        <textarea className="textarea" type="text" style={{height: '70px', marginLeft: "5px", borderRadius: '10px', width: "95%", marginTop: "4px"}} placeholder="Description"/>
                        <input type="text" placeholder="Upload Image" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}