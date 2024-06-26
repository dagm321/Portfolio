import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Message_content({sender, date, email, subject, content, __id}) {
    const {id} = useParams();
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteMessage/'+ id)
        .then(result => {
            console.log(result)
            // window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className="message-items">
                <div className="message-sender-date"><p>{sender} </p><small>{date}</small></div>
                <div className="message-email"><p>{email}</p></div>
                <div className="message-subject"><p>{subject}</p></div>
                <div className="message-content"><p>{content}</p></div>
                <div className="message-line">
                    <svg style={{display: 'none'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    <div className="message-line-real"></div>
                    <button  style={{marginTop: '-25px'}} onClick={(e) => {e.preventDefault(); handleDelete(__id); }} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                </div>
            </div>
        </>
    );
}