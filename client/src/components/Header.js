import React from "react";
import './css/Header.css';
import './css/Responsive css/header_res.css';
import { useNavigate } from "react-router-dom";

function Header({props}) {

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

    return(
        <>
            <div className="header">
                <div className="logo">
                    <h2>Dagos</h2>
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