import React from 'react';
import "./rightbar.css";
//import {Users} from "../../dummyData";
//import Online from "../Online/Online";
import UserInfo from "../UserInfo/UserInfo";

export default function Rightbar({profile}) {

    /**const HomeRightBar = () =>{
        return(
            <>

                <img src="/files/prof.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle"> Your Followers </h4>
                <ul className="friendList">

                    {Users.map((u) => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    } **/
   const ProfileRightBar = () => {
        return (
            <>
                <UserInfo/>
                <h4 className="rightbarTitle"> Your Followers</h4>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/1.jpeg" alt=''/>
                    <span className="rightbarfollowingName">Neluni Priyangika</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/2.jpeg" alt=''/>
                    <span className="rightbarfollowingName">Dasun Shanaka</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/3.jpeg" alt=''/>
                    <span className="rightbarfollowingName"> Ann Perera </span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/4.jpeg" alt=''/>
                    <span className="rightbarfollowingName">Shehani Pilapitiya</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/6.jpeg" alt=''/>
                    <span className="rightbarfollowingName"> Priyan Gunasekara</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/5.jpeg" alt=''/>
                    <span className="rightbarfollowingName"> Thilini Perera</span>
                </div>
                <div className="rightbarfollowings">
                    <img className="rightbarfollowingIMG" src="assets/person/1.jpeg" alt=''/>
                    <span className="rightbarfollowingName">Gimhani Narmada</span>
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
