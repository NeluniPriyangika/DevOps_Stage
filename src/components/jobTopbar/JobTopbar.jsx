import React from 'react';
import "./jobTopbar.css";
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillPersonFill} from 'react-icons/bs';
import {MdOutlineMessage} from 'react-icons/md';
import {IoMdNotifications} from 'react-icons/io';
import {Link} from 'react-router-dom';

function Jobtopbar() {
  return (
    <div className="job-topbarcontainer">
            <div className="job-topbarLeft"> 
              <div className="logoCont">
                  <Link className="logo" to="/home">DevOps World</Link>
              </div>
            </div>

            <div className="job-topbarCenter">
                <div className="searchbox" >
                <AiOutlineSearch className="searchIcon"/>
                <input placeholder="Search Jobs " className="searchInput"/>
                </div>
            </div>

            <div className="job-topbarRight">
                <Link to="/home" className="job-topbarLink">Homepage</Link>
                <Link className="job-topbarLink" to="/Profile">Profile</Link>
                <Link className="job-topbarLink" to="/login">LogOut</Link>

                <div className="job-topbarIcons">

           <div className="job-topbariconItem">
               <MdOutlineMessage/>
               <span className="job-topbariconBadge">1</span>
           </div>
           <div className="job-topbariconItem">
               <IoMdNotifications/>
               <span className="job-topbariconBadge">1</span>
           </div>
                    <div className="job-topbariconItem">
                        <BsFillPersonFill/>
                        <span className="job-topbariconBadge">10</span>
                    </div>

           <img src="https://i.ibb.co/Bw5rrQK/20230226-142958.jpg" alt="" className="job-topbarImg" />
          

           </div>
           </div>
        </div>
  )
}

export default Jobtopbar
