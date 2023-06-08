import React from 'react';
import "./rightbar.css";
import UserInfo from "../UserInfo/UserInfo";
import Girl from "../../assests/girl.jpg";
import Man from "../../assests/man.jpg";
import Women from "../../assests/women.jpg";
import Boy from "../../assests/boy.jpg";

export default function Rightbar({profile}) {

   const ProfileRightBar = () => {
        return (
            <>
                <UserInfo/>
                <h4 className="rightbarTitle"> Your Followers</h4>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Girl} alt=''/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Man} alt=''/>
                    <span className="rightbarfollowingName">Dasun Shanaka</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Women} alt=''/>
                    <span className="rightbarfollowingName"> Ann Perera </span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Boy} alt=''/>
                    <span className="rightbarfollowingName">Shehani Pilapitiya</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Girl} alt=''/>
                    <span className="rightbarfollowingName"> Priyan Gunasekara</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Man} alt=''/>
                    <span className="rightbarfollowingName"> Thilini Perera</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Women} alt=''/>
                    <span className="rightbarfollowingName">Gimhani Narmada</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Boy} alt=''/>
                    <span className="rightbarfollowingName">Shehani Pilapitiya</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Girl} alt=''/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Man} alt=''/>
                    <span className="rightbarfollowingName">Dasun Shanaka</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Women} alt=''/>
                    <span className="rightbarfollowingName"> Ann Perera </span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src={Boy} alt=''/>
                    <span className="rightbarfollowingName">Shehani Pilapitiya</span>
                </div>
            </>
        )
   }
    return (
        <div className= "rightbar">
            <div className="rightbarWrapper">
                <ProfileRightBar/>
            </div>
        </div>
    )
}
