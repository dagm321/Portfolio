import React from "react";
import './admin-css/messages.css';
import Message_content from "./Message_content";

export default function Messages() {
    return(
        <>

            <div className="message-body">
                <div className="message-box">
                    <div className="message-head">
                        <h1>Messages</h1>
                    </div>
                    <div className="messages">
                        <Message_content
                            sender = {"Dr Tesfaye Gabiso"}
                            date ={"June 5, 2024"}
                            email={"zerubabelfilimon54@gmail.com"}
                            subject={"Work Interview"}
                            content={"Outside of coding, I enjoy playing lead guitar, combining  my technical and creative skills in both Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both"}
                        />
                        <Message_content
                            sender = {"Dr Tesfaye Gabiso"}
                            date ={"June 5, 2024"}
                            email={"zerubabelfilimon54@gmail.com"}
                            subject={"Work Interview"}
                            content={"Outside of coding, I enjoy playing lead guitar, combining  my technical and creative skills in both Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both"}
                        />
                        <Message_content
                            sender = {"Dr Tesfaye Gabiso"}
                            date ={"June 5, 2024"}
                            email={"zerubabelfilimon54@gmail.com"}
                            subject={"Work Interview"}
                            content={"Outside of coding, I enjoy playing lead guitar, combining  my technical and creative skills in both Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both"}
                        />
                        <Message_content
                            sender = {"Dr Tesfaye Gabiso"}
                            date ={"June 5, 2024"}
                            email={"zerubabelfilimon54@gmail.com"}
                            subject={"Work Interview"}
                            content={"Outside of coding, I enjoy playing lead guitar, combining  my technical and creative skills in both Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both"}
                        />
                    </div>
                </div>
            </div>


        </>
    );
}