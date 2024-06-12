import React from "react";
import './admin-css/add-project.css';

export default function Add_Skills() {
    return(
        <>
            <div className="add-project-body">
                <div className="project_content">
                    <h2>Add Skills</h2>
                    <form>
                        <input type="text" placeholder="Skill Name" />
                        <input type="text" placeholder="Icon" />
                        <input type="text" placeholder="Rating" />
                        <input type="text" placeholder="Github Link" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}