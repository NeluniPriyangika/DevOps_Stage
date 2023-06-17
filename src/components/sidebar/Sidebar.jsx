import React from 'react'
import "./sidebar.css"
import {MdMessage} from 'react-icons/md';
import {MdGroups} from 'react-icons/md';
import {MdAnnouncement} from 'react-icons/md';
import {MdFormatSize} from 'react-icons/md';
import {Users} from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";
import {MdTrendingUp} from 'react-icons/md';
import {MdAssignment} from 'react-icons/md';
import {MdFavorite} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineStorefront, MdOutlineWork, MdOutlineDynamicFeed} from 'react-icons/md';
import Spinner from 'react-bootstrap/Spinner'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Sodebar() {
    return (
        <div className= "sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                    <li className="sidebarListItem">
                       <CgProfile/>
                       <Link className="sidebarListText" to="/profile">Profile</Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdFormatSize/>
                       <Link className="sidebarListText" to="/discussPortal">Discussion portal</Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdOutlineWork/>
                       <Link className="sidebarListText" to="/jobs">Job portal</Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdOutlineDynamicFeed />
                       <span className="sidebarListText">
                           <Link className="sidebarListText" to='/feedPortal'>Feed</Link>
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <MdAssignment/>
                       <Link className="sidebarListText" to="/learning">DevOps Learning</Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdFavorite/>
                       <span className="sidebarListText">
                           Favourite Cousers
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <MdTrendingUp />
                       <span className="sidebarListText">
                           Trending coursers
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <MdMessage/>
                       <span className="sidebarListText">
                           Messages
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <MdGroups/>
                       <Link className="sidebarListText" to="/professionals">Professionals</Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdAnnouncement/>
                       <span className="sidebarListText">
                           Skill Quizers
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <MdGroups/>
                       <Link className="sidebarListText" to="/groups">My Groups </Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdOutlineStorefront/>
                          <Link className="sidebarListText" to="/supplier"> TopUp Companies </Link>
                   </li>
                   
               </ul>
              <button className="sidebarButton">Show more </button>

              <hr className="sidebarHr"/>
                <Button className="GlowButton" variant="success" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Online Followers
                </Button>
              <ul className="sidebarFriendList">
                  {Users.map(u=>(
                      <CloseFriends key={u.id} user={u}/>
                  ))}

              </ul>
              
            </div>
        </div>
    )
}
 