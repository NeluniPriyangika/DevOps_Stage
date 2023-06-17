import React from 'react';
import './feedPortal.css';
import PostShare from '../../components/postShare/PostShare';
import AllPosts from '../../components/allPosts/AllPosts';
import { Posts } from "../../dummyData";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";

function FeedPortal() {
  return (
    
        <div className="feedPortal">
            <Topbar/>
            <div className='feedPortal_container'>
                <div className='feedPortal-sidebar'>
                    <Sidebar/>
                </div>
                <div className="feedPortalWrapper">
                <PostShare/>
                {(Posts || []).map((p) => (
                    <AllPosts key={p.id} post={p}/>
                ))}
                </div>
            </div>
        </div>
    ); 
}

export default FeedPortal

