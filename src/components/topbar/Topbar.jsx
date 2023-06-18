import "./topbar.css"
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill} from 'react-icons/bs';
import {MdOutlineMessage} from 'react-icons/md';
import {IoMdNotifications,IoMdHeart,IoMdCheckmark,IoMdAdd } from 'react-icons/io';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import 'typeface-poppins';

function Topbar(props) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
    return (
        
        <div className="topbarcontainer">
            <div className="topbarLeft"> 
              <div className="logoCont">
                  
                  <Link className="logo" to="/home" style={{ fontFamily: 'Poppins' }}>
                        <span style={{ fontSize: '30px' }}>D</span>
                        <span style={{ fontSize: '22px' }}>ev</span>
                        <span style={{ fontSize: '30px' }}>O</span>
                        <span style={{ fontSize: '22px' }}>ps</span> 
                        <span style={{ fontSize: '30px' }}> W</span>
                        <span style={{ fontSize: '22px' }}>orld</span> 
                  </Link>
              </div>
            </div>

            <div className="topbarCenter">
                <div className="searchboxtopBar" >
                    <AiOutlineSearch className="searchIcon"/>
                    <div className="searchInputContainer">
                    <input placeholder="search now " className="searchInputTopBar"/>
                    </div>
                    
                </div>
            </div>

            <div className="topbarRight">
                <Link to="/home" className="topbarLink">Homepage</Link>
                <Link className="topbarLink" to="/Profile">Profile</Link>
                <Link className="topbarLink" to="/login">LogOut</Link>

                <div className="topbarIcons">

           <div className="topbariconItem">
               <MdOutlineMessage/>
               <span className="topbariconBadge">1</span>
           </div>
           
           <div className="topbariconItem" onClick={toggleDropdown}>
        <IoMdNotifications />
        <span className="topbariconBadge">1</span>
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div className="notification"><IoMdHeart className="notifiIcon" /> Indika Wimalasooriya viewed your profile</div>
          <div className="notification"> <IoMdCheckmark className="notifiIcon"/> WsO2 Viewed your job application</div>
          <div className="notification"> <IoMdAdd className="notifiIcon"/> Gayani Imalka rated your question</div>
        </div>
      )}
                    <div className="topbariconItem">
                        <BsFillPersonFill/>
                        <span className="topbariconBadge">10</span>
                    </div>

           <img src="https://i.ibb.co/Bw5rrQK/20230226-142958.jpg" alt="" className="topbarImg" />
          

           </div>
           </div>
        </div>
    
    )
}

export default Topbar
