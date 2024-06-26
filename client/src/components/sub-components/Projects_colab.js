import React from "react";
import './sub-component css/Projects_colab.css';
import Square from "./Square";
import Colab_works from "./Colab_works";
import login from '../../assets/images/login.jpg';
import eat from '../../assets/images/eat.jpg';
import axios from "axios";
import { Buffer } from 'buffer';
import {useState, useEffect} from "react";
function Projects_colab() {
    const[colabData, setColabData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/getColabWorks');
            setColabData(response.data);
            console.log(colabData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    });
    // this is a function that converts image buffer data to url 
    function bufferToDataURL(bufferData, contentType) {
        return `data:${contentType};base64,${Buffer.from(bufferData).toString('base64')}`;
    }
      
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
                    {colabData.map((data) => (
                        <Colab_works
                            colab_image={bufferToDataURL(data.image.data, data.image.contentType)}
                            colab_title={data.title}
                            colab_paragraph={data.description}
                        />
                    ))}
                </div>
                <div className="colab-box3"></div>
            </div>
        </>
    );
}
export default Projects_colab;