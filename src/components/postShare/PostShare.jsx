import React from 'react';
import './postShare.css';
import {MdPermMedia, MdLabel, MdArticle, MdQuiz} from 'react-icons/md';
import Me from '../../assests/me.jpg';

function PostShare() {
  return (
         <div className="postshare">
             <div className="postshareTop">
                <img className="postshareImg" src={Me} alt=""/>
                <div className="postshareIdea">
                    <input placeholder="Add your post tille "
                           className="postshareinput" />
                </div>
             </div>
             <div className="postshareDesc">
                 <input placeholder="Add your post description "
                        className="postshareinput" />
             </div>
             

             <hr className="postshareHr" />

             <div className="postshareBottom">
                 <div className="postshareOptions">
                     <div className="postshareOption">
                         <MdPermMedia size="25px" style={{color:'tomato'}} className="postshareIcon"/>
                         <span className="postshareOptionText">Add Photos/video</span>
                     </div>
                     <div className="postshareOption">
                         <MdLabel size="25px" style={{color:'blue'}} className="postshareIcon"/>
                         <span className="postshareOptionText">Add Tag</span>
                     </div>
                     <div className="postshareOption">
                         <MdQuiz size="25px" style={{color:'goldenrod'}} className="postshareIcon"/>
                         <span className="postshareOptionText">Take Skills Quiz</span>
                     </div>
                     <div className="postshareOption">
                         <MdArticle size="25px" style={{color:'green'}} className="postshareIcon"/>
                         <span className="postshareOptionText">Write Articles</span>
                     </div>
                 </div>
                 <button className="postshareButton">Add Post</button>
 
             </div>
         </div>
     )
 }
  
export default PostShare
