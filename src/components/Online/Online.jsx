import React from 'react'
import "./Online.css"

export default function Online({user}){
    return(
        <div>
                 <li className="sidebarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src={user.profilePicture} alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                            
                        </div>
                        <span className="rightbarUsername"> {user.username}</span>
                    </li> 

        </div>
    )
}