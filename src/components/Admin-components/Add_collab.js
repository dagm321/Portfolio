import React from "react";
import './admin-css/add-project.css';

export default function Add_colab() {
    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Collaboration Works</h2>
                    <form>
                        <input type="text" placeholder="Title" />
                        <input type="text" style={{height: '70px', borderRadius: '10px'}} placeholder="Description" />
                        <input type="text" placeholder="Upload Image" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}