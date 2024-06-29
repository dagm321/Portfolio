import React, {useState} from "react";
import './css/Header.css';
import './css/Responsive css/header_res.css';
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

function Header({props}) {
    const [menu, setMenu] = useState();
    const navigate = useNavigate();

    const gotohome = (e) => {
        e.preventDefault();
        navigate('/');
    }
    const gotoskills = (e) => {
        e.preventDefault();
        navigate('/skills');
    }
    const gotoprojects = (e) => {
        e.preventDefault();
        navigate('/projects');
    }
    const gotocontact = (e) => {
        e.preventDefault();
        navigate('/contact');
    }
    const gotoabout = (e) => {
        e.preventDefault();
        navigate('/about');
    }
    
    let project_active = '';
    let skills_active = '';
    let about_active = '';
    let contact_active = '';

    // if (props = 'projects') {
    //     project_active = 'active';
    //     skills_active = '';
    //     about_active = '';
    //     contact_active = '';
    // }  if (props = 'skills') {
    //     skills_active = 'active';
    // }  if (props = 'about') {
    //     about_active = 'active';
    // }  if (props = 'contact') {
    //     contact_active = 'active';
    // }
    const closepop = () => {
        setMenu(null);
    }

    return(
        <>
            {menu}
            <div className="header">
                <div className="logo">
                    <h2>Dagos</h2>
                </div>
                <div className="menu-icon">
                    <a onClick={() => {setMenu(<Menu closepopup={closepop}/>)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </a>
                </div>
                <div className="menu">
                    <a href="/" onClick={gotohome}>Home</a>
                    <a className={project_active} href="/projects" onClick={gotoprojects}>Projects</a>
                    <a className={skills_active} href="/skills" onClick={gotoskills}>Skills</a>
                    <a className={about_active} href="/about" onClick={gotoabout}>About</a>
                    <a className={contact_active} href="/contact" onClick={gotocontact}>Contact</a>
                </div>
            </div>
        </>
    );
}
export default Header;