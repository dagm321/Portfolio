import React from "react";
import './admin-css/messages.css';
import Message_content from "./Message_content";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Messages() {
    const [contents, setContents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/getMessages')
        .then (result => {
            console.log(result)
            setContents(result.data)
        })
    }, [])
    return(
        <>

            <div className="message-body">
                <div className="message-box">
                    <div className="message-head">
                        <h1>Messages</h1>
                    </div>
                    <div className="messages">
                        {
                            contents.map((content) => {
                                return <Message_content
                                    sender = {content.name}
                                    date ={content.date}
                                    email={content.email}
                                    subject={content.subject}
                                    content={content.content}
                                    __id = {content._id}
                                />
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    );
}