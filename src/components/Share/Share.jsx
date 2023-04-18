 import React from 'react'
 import {MdPermMedia} from "react-icons/md";
 import {MdLabel} from "react-icons/md"; 
 import {MdOutlineRoom} from "react-icons/md";
 import "./Share.css";
 import {MdAddBox} from 'react-icons/md';
 import {Dropdown} from 'react-bootstrap';

 export default function Share() {
     return (
         <div className="share">
             <div className="shareTop">
                <img className="shareImg" src="/files/prof.png" alt=""/>
                <div className="shareIdea">
                    <input placeholder="What is your business idea "
                           className="shareinput" />
                </div>
             </div>
             <div className="shareDesc">
                 <input placeholder="Describe Your business idea "
                        className="shareinput" />
             </div>
             <div className="shareCost">
                 <input placeholder="Estimated Cost "
                        className="shareinput2" />
             </div>
             <div className="shareCost">
                 <input placeholder="Your experienced area/areas"
                        className="shareinput2" />
             </div>
             <div className="shareCost">
                 <input placeholder="Estimated Time  "
                        className="shareinput2" />
             </div>

             <div className="dropContainer">
                 <Dropdown className="drop">
                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                         Select Category
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                         <Dropdown.Item href="#/action-1">IT</Dropdown.Item>
                         <Dropdown.Item href="#/action-2">Sales and Marketing</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Education</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Fashion</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Health</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Online Shopping</Dropdown.Item>

                     </Dropdown.Menu>
                 </Dropdown>

                 <Dropdown className="privacy">
                     <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                         Privacy
                     </Dropdown.Toggle>

                     <Dropdown.Menu variant="dark">
                         <Dropdown.Item href="#/action-1" active>
                             Only Me
                         </Dropdown.Item>
                         <Dropdown.Item href="#/action-2">Public</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Followers Only</Dropdown.Item>
                         <Dropdown.Divider />
                         <Dropdown.Item href="#/action-4">Group No.01</Dropdown.Item>
                     </Dropdown.Menu>
                 </Dropdown>
             </div>

             <hr className="shareHr" />

             <div className="shareBottom">
                 <div className="shareOptions">
                     <div className="shareOption">
                         <MdPermMedia htmlColor="tomato" className="shareIcon"/>
                         <span className="shareOptionText">Add Photos/video</span>
                     </div>
                     <div className="shareOption">
                         <MdLabel htmlColor="blue" className="shareIcon"/>
                         <span className="shareOptionText">Add Tag</span>
                     </div>
                     <div className="shareOption">
                         <MdOutlineRoom htmlColor="goldenrod" className="shareIcon"/>
                         <span className="shareOptionText">Add Location</span>
                     </div>
                     <div className="shareOption">
                         <MdAddBox htmlColor="red" className="shareIcon"/>
                         <span className="shareOptionText">Attach Business Proposal</span>
                     </div>
                 </div>
                 <button className="shareButton">Share</button>
 
             </div>
         </div>
     )
 }
  