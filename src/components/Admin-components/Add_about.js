import React from "react";
import './admin-css/add-project.css';

export default function Add_about() {
    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add About us paragraph</h2>
                    <form>
                        <input type="text" style={{height: '100px', borderRadius: '10px'}} placeholder="Description" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}