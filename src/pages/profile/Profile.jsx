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
                              <h4 className="profileInfoName">Kasun Gayantha</h4>
                              <span className="profileInfoDesc">I am a student of NSBM green university and I am doing a management information systems
                              degree. I have experience in Software engeneering and information managemnt. I am also a freelancer on upwork. Usually I work on web
                              and software project6s </span>
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
