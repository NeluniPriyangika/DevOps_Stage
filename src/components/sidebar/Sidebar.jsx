import React from 'react'
import "./sidebar.css"
import {MdMessage} from 'react-icons/md';
import {MdGroups} from 'react-icons/md';
import {MdEventAvailable} from 'react-icons/md';
import {MdAnnouncement} from 'react-icons/md';
import {MdFormatSize} from 'react-icons/md';
import {Users} from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Spinner from 'react-bootstrap/Spinner'
import { DropdownButton,Dropdown,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Sodebar() {
    return (
        <div className= "sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                       <MdFormatSize/>
                       <Link className="sidebarListText" to="/discussion">Discussions</Link>
                   </li>
                   <li className="sidebarListItem">
                       <TrendingUpIcon/>
                       <span className="sidebarListText">
                           Trending Ideas
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <AssistantPhotoIcon />
                       <span className="sidebarListText">
                           Relevant Ideas
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <FavoriteIcon/>
                       <span className="sidebarListText">
                           Favourite Ideas
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <MdMessage/>
                       <span className="sidebarListText">
                           Messages
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <AssignmentIcon/>
                       <Link className="sidebarListText" to="/proposals">Business Proposals </Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdGroups/>
                       <Link className="sidebarListText" to="/advisors">Advisors </Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdGroups/>
                       <Link className="sidebarListText" to="/groups">My Groups </Link>
                   </li>
                   <li className="sidebarListItem">
                       <MdAnnouncement/>
                       <span className="sidebarListText">
                           Popular Investors
                       </span>
                   </li>
                   <li className="sidebarListItem">
                       <StorefrontIcon/>
                          <Link className="sidebarListText" to="/supplier"> Item Suppliers </Link>
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
 