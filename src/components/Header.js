import React from "react";
import './css/Header.css';

function Header({props}) {
    let project_active = '';
    let skills_active = '';
    let about_active = '';
    let contact_acitve = '';

    if (props == 'projects') {
        project_active = 'active';
    } else if (props == 'skills') {
        skills_active = 'active';
    } else if (props == 'about') {
        about_active = 'active';
    } else if (props == 'contact') {
        contact_acitve = 'active';
    }

    return(
        <>
            <div className="header">
                <div className="logo">
                    <h2>Dagos</h2>
                </div>
                <div className="menu">
                    <a className={project_active} href="/">Projects</a>
                    <a className={skills_active} href="/">Skills</a>
                    <a className={about_active} href="/">About</a>
                    <a className={contact_acitve} href="/">Contact</a>
                </div>
            </div>
        </>
    );
}
export default Header;