import React from 'react';
import "./profile.css";

import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';


const Profile = () => {
  return (
    <div>
      <Topbar mode="Investor Mode"/>
            <div className="profile">
                <Sidebar/>
                  <dive className="profileRight">
                      <dive className="profileRightTop">
                          <div className="profileCover">
                              <img className="profileCoverIMG"
                                src="https://i.ibb.co/VJwCBjn/pfOsGg.webp" alt=""/>
                              <img className="profileUserIMG"
                                   src="https://i.ibb.co/Bw5rrQK/20230226-142958.jpg" alt=""/>
                          </div>
                          <div className="profileInfo">
                              <h4 className="profileInfoName">Neluni Priyangika</h4>
                              <span className="profileInfoDesc">As an undergraduate pursuing a BSc in Information and Communication Technology at the University of Sri Jayewardenepura, 
                              I am a dedicated and passionate coder with a keen interest in Frontend development, DevOps, and FullStack. 
                              I am currently expanding my skills in these areas through various online courses and personal projects.</span>
                          </div>
                      </dive>
                      <dive className="profileRightBottom">
                          <Feed/>
                          <Rightbar profile/>
                      </dive>
                  </dive>
            </div>
    </div>
  )
}

export default Profile
