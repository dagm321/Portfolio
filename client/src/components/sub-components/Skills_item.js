import React from "react";
import './sub-component css/Skills_item.css';
export default function Skills_item ({ language_name, svg, rating }) {
    return(
        <>
            <div className="skills_item">
                <div className="skill_name">
                    <p> {language_name} <span dangerouslySetInnerHTML={{__html: svg}}/> </p>
                </div>
                <div className="rating">
                    {
                        
                        rating ==1 ?(
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div> 
                            </>       
                        ) : rating ==2 ? (
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ) : rating == 3 ? (
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ) : rating == 4 ? (
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ): rating == 5 ? (
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ) : rating == 6 ? (
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ): rating == 7 ?(
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ): rating == 8 ?(
                             <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ) : rating == 9 ?(
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#705F56'}}></div>
                            </>
                        ) : rating == 10 ? (
                            <>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                                <div className="rate_box" style={{backgroundColor: '#C34600'}}></div>
                            </>
                        ) : null 
                    }

                </div>
            </div>
        </>
    );
}