import React from "react";
import './css/Home_body.css';
import me from '../assets/images/me.png'
import Square from "./sub-components/Square";

function Home_body() {
    return(
        <>
            <div className="body">
                <div className="col-1">
                    <div className="item1">
                        <Square/>
                    </div>
                    <div className="item2">
                        <h2>
                            Welcome to my Portfolio, <br/>
                            I'm <color> Dagim Teshome </color>
                        </h2>
                    </div>
                    <div className="item3">
                        <box>
                            <h1>Full-Stack Developer</h1>
                            <p> Let's create something amazing together!</p>
                        </box>
                    </div>
                    <div className="item4">
                    <i class="fa-solid fa-car"></i>
                    <a href="/">Github link</a>
                    </div>
                </div>
                <div className="col-2">
                    <img src={me}/>
                </div>
            </div>
        </>
    );
}
export default Home_body;