import React from 'react';
import "./discussComp.css"
import {MdLabel, MdPermMedia, MdFavorite} from "react-icons/md";
import {TfiArrowCircleUp, TfiArrowCircleDown} from "react-icons/tfi";
import Me from '../../assests/me.jpg';
import Girl from '../../assests/girl.jpg';
import Women from '../../assests/women.jpg';
import Man from '../../assests/man.jpg';
import Boy from '../../assests/boy.jpg';

function DiscussComp(props) {
    return (
        <div>
            <div className="discussComponent-Share">
                <div className="discuss-shareTop">
                    <img className="discuss-shareImg" src={Me} alt=""/>
                    <div className="discuss-shareDesc">
                        <input placeholder="Discussion Topic"
                            className="discuss-shareinput" />
                    </div>
                </div>
                <div className="discuss-shareIdea">
                    <input placeholder="discuss-Description "
                        className="discuss-shareinput" />
                </div>

                <hr className="discuss-shareHr" />

                <div className="discuss-shareBottom">
                    <div className="discuss-shareOptions">
                        <div className="discuss-shareOption">
                            <MdPermMedia size="25px" className="discuss-shareIcon1"/>
                            <span className="discuss-shareOptionText">Add Photos/video</span>
                        </div>
                        <div className="discuss-shareOption">
                            <MdLabel size="25px" className="discuss-shareIcon2"/>
                            <span className="discuss-shareOptionText">Tag People</span>
                        </div>
                    </div>
                    <button className="discuss-shareButton">Share</button>
                </div>
            </div>
            {/*-------------------------------------------------------------------*/}
            <div className='discuss-main'>
                <div className='arrowsDiv'>
                    <div className='arrows'><TfiArrowCircleUp size="40px" className='arrowsIcon'/></div>
                    <div className='arrows'><h4 className='arrowsWord'>6</h4></div>
                    <div className='arrows'><TfiArrowCircleDown size="40px" className='arrowsIcon'/></div>
                </div>
                <div className="discuss-share1">
                    <div className="discuss-shareTop">
                        <img className="discuss-shareImg" src={Girl} alt=""/>
                        <div>
                            <h1 className="discuss-discstopic">
                                What is the CI/CD pipeline in DevOps?
                            </h1>

                        </div>

                    </div>
                    <h4 className="discuss-disDesc">
                        Hi everyone,<br />
                        I'm working on a project with a complex development environment and need some tips to optimize our CI/CD pipelines. Any advice on handling dependencies, reducing build/deployment times, ensuring pipeline reliability, managing complex workflows, or other insights would be greatly appreciated!
                    </h4>

                    <div className="discuss-shareBottom">
                        <div className="discuss-shareOptions">
                            <div className="discuss-shareOption">
                                <MdFavorite size= "25px"  className="discuss-shareIcon3"/>
                                <span className="discuss-shareOptionText">Interested</span>
                            </div>
                        </div>
                    </div>
                    <div className="discuss-commentbox">
                        <div className="discuss-shareDesc">
                            <input placeholder="comment "
                                    className="discuss-shareinput" />
                        </div>
                        <div>
                            <div className="discuss-comButton">
                                <button className="discuss-shareButton">Add Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='discuss-main'>
                <div className='arrowsDiv'>
                    <div className='arrows'><TfiArrowCircleUp size="40px" className='arrowsIcon'/></div>
                    <div className='arrows'><h4 className='arrowsWord'>0</h4></div>
                    <div className='arrows'><TfiArrowCircleDown size="40px" className='arrowsIcon'/></div>
                </div>
                <div className="discuss-share1">
                    <div className="discuss-shareTop">
                        <img className="discuss-shareImg" src={Man} alt=""/>
                        <div>
                            <h1 className="discuss-discstopic">
                                What are some common tools used in a DevOps environment?
                            </h1>
                        </div>
                    </div>
                    <h4 className="discuss-disDesc">
                    As I delve into the world of DevOps, I'm curious about the tools that are commonly utilized. 
                    Could you provide some insights into the popular tools and technologies employed in a typical DevOps environment and their respective purposes?
                    </h4>

                    <div className="discuss-shareBottom">
                        <div className="discuss-shareOptions">
                            <div className="discuss-shareOption">
                                <MdFavorite size= "25px" className="discuss-shareIcon3"/>
                                <span className="discuss-shareOptionText">Interested</span>
                            </div>
                        </div>
                    </div>

                    <div className="discuss-commentbox">
                        <div className="discuss-shareDesc">
                            <input placeholder="comment "
                                    className="discuss-shareinput" />
                        </div>
                        <div>
                            <div className="discuss-comButton">
                                <button className="discuss-shareButton">Add Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='discuss-main'>        
                <div className='arrowsDiv'>
                    <div className='arrows'><TfiArrowCircleUp size="40px" className='arrowsIcon'/></div>
                    <div className='arrows'><h4 className='arrowsWord'>-2</h4></div>
                    <div className='arrows'><TfiArrowCircleDown size="40px" className='arrowsIcon'/></div>
                </div>
                <div className="discuss-share1">
                    <div className="discuss-shareTop">
                        <img className="discuss-shareImg" src={Women} alt=""/>
                        <div>
                            <h1 className="discuss-discstopic">
                                How does DevOps facilitate collaboration between development and operations teams?
                            </h1>

                        </div>

                    </div>
                    <h4 className="discuss-disDesc">
                        Hi everyone..! <br />
                        I've heard that DevOps helps improve collaboration between development and operations teams. 
                        Could you explain how DevOps practices and methodologies bridge the gap between these two traditionally separate teams and foster a culture of collaboration? 
                    </h4>

                    <div className="discuss-shareBottom">
                        <div className="discuss-shareOptions">
                            <div className="discuss-shareOption">
                                <MdFavorite size= "25px" className="discuss-shareIcon3"/>
                                <span className="discuss-shareOptionText">Interested</span>
                            </div>
                        </div>
                    </div>

                    <div className="discuss-commentbox">
                        <div className="discuss-shareDesc">
                            <input placeholder="comment "
                                    className="discuss-shareinput" />
                        </div>
                        <div>
                            <div className="discuss-comButton">
                                <button className="discuss-shareButton">Add Comment</button>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
            <div className='discuss-main'>        
                <div className='arrowsDiv'>
                    <div className='arrows'><TfiArrowCircleUp size="40px" className='arrowsIcon'/></div>
                    <div className='arrows'><h4 className='arrowsWord'>113</h4></div>
                    <div className='arrows'><TfiArrowCircleDown size="40px" className='arrowsIcon'/></div>
                </div>
                <div className="discuss-share1">
                    <div className="discuss-shareTop">
                        <img className="discuss-shareImg" src={Boy} alt=""/>
                        <div>
                            <h1 className="discuss-discstopic">
                                What are the benefits of implementing DevOps in an organization?
                            </h1>

                        </div>

                    </div>
                    <h4 className="discuss-disDesc">
                        I'm interested in understanding the tangible benefits that organizations can expect to gain from adopting DevOps practices. 
                        Could you outline some of the advantages and positive outcomes that organizations can experience by implementing DevOps?
                    </h4>

                    <div className="discuss-shareBottom">
                        <div className="discuss-shareOptions">
                            <div className="discuss-shareOption">
                                <MdFavorite size= "25px" className="discuss-shareIcon3"/>
                                <span className="discuss-shareOptionText">Interested</span>
                            </div>
                        </div>
                    </div>

                    <div className="discuss-commentbox">
                        <div className="discuss-shareDesc">
                            <input placeholder="comment "
                                    className="discuss-shareinput" />
                        </div>
                        <div>
                            <div className="discuss-comButton">
                                <button className="discuss-shareButton">Add Comment</button>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    );
}

export default DiscussComp;