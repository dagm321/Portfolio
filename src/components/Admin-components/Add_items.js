import React from "react";
import './admin-css/add-items.css';
import Add_project from "./Add_project";
import Add_Skills from "./Add_skills";
import Add_about from "./Add_about";
import Add_colab from "./Add_collab";
import { useState } from "react";
import Message_box from "../sub-components/Message_box";

export default function Add_items() {
    const [page, setpage] = useState(<Add_project/>);
    const [active, setactive] = useState('add_project');
    const [messagebox, setmessagebox] = useState(<Message_box/>);
    function set_skills() {
        setpage(<Add_Skills/>);
        setactive('add_skills');
    }
    function set_about() {
        setpage(<Add_about/>);
        setactive('add_about');
    }
    function set_colab() {
        setpage(<Add_colab/>);
        setactive('add_colab');
    }
    function set_project() {
        setpage(<Add_project/>);
        setactive('add_project');
    }
    function set_messagebox () {
        setmessagebox(<Message_box/>);
    }
    function close_messagebox() {
        setmessagebox('');
    }

    
    return(
        <>

            
            <div className="add_item-body">
                <div className="add-item-main-box">
                    <div className="item_menu">
                        <button className={active === 'add_project' ? 'menu-active' : ''} onClick={set_project}>Add Project</button>
                        <button className={active === 'add_colab' ? 'menu-active' : ''} onClick={set_colab}>Add Collaboration Works</button>
                        <button className={active === 'add_skills' ? 'menu-active' : ''} onClick={set_skills}>Add Skills</button>
                        <button className={active === 'add_about' ? 'menu-active' : ''} onClick={set_about}>Add About me paragraph</button>
                    </div>
                    {page}
                </div>
            </div>
            {/* {messagebox} */}

        </>
    );
}