import React from "react";
import './css/Header.css';

function Header({props}) {
    
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
                    <a className={project_active} href="/">Projects</a>
                    <a className={skills_active} href="/">Skills</a>
                    <a className={about_active} href="/">About</a>
                    <a className={contact_active} href="/">Contact</a>
                </div>
            </div>
        </>
    );
}
export default Header;