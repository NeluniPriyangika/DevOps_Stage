import React from 'react';
import "./CloseFriends.css";


const CloseFriends = ({user}) => {
    return (
        <div>
            <li className="sidebarfriend">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="friendName">{user.username}</span>
            </li>
        </div>
    );
};

export default CloseFriends;