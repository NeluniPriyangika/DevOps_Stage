import React from 'react';
import "./discussComp.css"
import {MdLabel, MdPermMedia, MdFavorite} from "react-icons/md";
import {TfiArrowCircleUp, TfiArrowCircleDown} from "react-icons/tfi";
import Me from '../../assests/me.jpg';
import Girl from '../../assests/girl.jpg';
import Women from '../../assests/women.jpg';
import Man from '../../assests/man.jpg';

function DiscussComp(props) {
    return (
        <div>
            <div className="discuss-Share">
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
                        Lorem ipsum dolor sit amet, ius utamur oblique quaestio ne. Eu euismod gubergren definitiones mei, ex illud albucius eum. Iisque ornatus docendi cu mel. Ei mei magna ancillae expetendis, no ludus aliquam tincidunt quo. Consul vocent interpretaris vix id.
                        Ei iisque principes disputationi nam, modo discere ius et. Discere delenit vivendo pro ad, omnis imperdiet id ius. Sit vide dicat ocurreret at, ex duo soluta evertitur.
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
                                I would like to share my new achivement in Devops like this...
                            </h1>
                        </div>
                    </div>
                    <h4 className="discuss-disDesc">
                        Lorem ipsum dolor sit amet, ius utamur oblique quaestio ne. Eu euismod gubergren definitiones mei, ex illud albucius eum. Iisque ornatus docendi cu mel. Ei mei magna ancillae expetendis, no ludus aliquam tincidunt quo. Consul vocent interpretaris vix id.
                        Ei iisque principes disputationi nam, modo discere ius et. Discere delenit vivendo pro ad, omnis imperdiet id ius. Sit vide dicat ocurreret at, ex duo soluta evertitur.
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
                                I would like to kanow about Kubernetes.
                            </h1>

                        </div>

                    </div>
                    <h4 className="discuss-disDesc">
                        Lorem ipsum dolor sit amet, ius utamur oblique quaestio ne. Eu euismod gubergren definitiones mei, ex illud albucius eum. Iisque ornatus docendi cu mel. Ei mei magna ancillae expetendis, no ludus aliquam tincidunt quo. Consul vocent interpretaris vix id.
                        Ei iisque principes disputationi nam, modo discere ius et. Discere delenit vivendo pro ad, omnis imperdiet id ius. Sit vide dicat ocurreret at, ex duo soluta evertitur. 
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