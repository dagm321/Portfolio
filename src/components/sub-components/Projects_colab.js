import React from "react";
import './sub-component css/Projects_colab.css';
import Square from "./Square";
import Colab_works from "./Colab_works";
import login from '../../assets/images/login.jpg';
import eat from '../../assets/images/eat.jpg';
function Projects_colab() {
    return(
        <>
            <div className="colab-body">
                <div className="colab-box1">
                    <div className="colab-subbox1"></div>
                    <div className="colab-subbox2">
                        <h1>Collaboration Works</h1>
                    </div>
                    <div className="colab-subbox3">
                        <Square/>
                    </div>
                </div>
                <div className="colab-box2">
                    {/* Insert Project collaborations here */}
                    <Colab_works
                        colab_image={eat}
                        colab_title={"School Management System"}
                        colab_paragraph={"Outside of coding, I enjoy playing lead guitar, combining  my technical and creative skills in both Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both"}
                    />
                    <Colab_works
                        colab_image={login}
                        colab_title={"Hagere Games"}
                        colab_paragraph={"Outside of coding, I enjoy playing lead guitar, combining  my technical and creative skills in both Outside of coding, I enjoy playing lead guitar, combining my technical and creative skills in both"}
                    />
                </div>
                <div className="colab-box3"></div>
            </div>
        </>
    );
}
export default Projects_colab;