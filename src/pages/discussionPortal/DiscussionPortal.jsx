import React from 'react';
import './discussionPortal.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DiscussComp from '../../components/discussComp/DiscussComp';

function DiscussionPortal() {
  return (
    <div>
       <Topbar/>
        <div className="discontainer">
            <div className="Sidebar">
                <Sidebar/>
            </div>
            <div className="rightside">
                <div className="distopic">
                    <h1 className="fontdis">Start a new discussion or ask question here</h1>
                    <DiscussComp/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscussionPortal
