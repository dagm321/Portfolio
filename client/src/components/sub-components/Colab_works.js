import React from "react";
import './sub-component css/Colab_works.css'
function Colab_works({colab_title, colab_paragraph, colab_image}) {
    return(
        <>
            <div className="colab-content1">
                <div className="colab-image">
                    <img src={colab_image} alt=""/>
                </div>
                <div className="colab-title">
                    <h1>{colab_title}</h1>
                    <p>{colab_paragraph}</p>
                </div>
            </div>
        </>
    );
}
export default Colab_works;