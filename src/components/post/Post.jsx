import React, {useState} from 'react'
import "./Posts.css"
import {MdMoreVert} from 'react-icons/md'
//import{MdThumbUpAlt} from 'react-icons/md';
import {MdFavorite} from 'react-icons/md';
import {MdAssignment} from 'react-icons/md';
import {MdMessage} from 'react-icons/md';
import { Users } from "../../dummyData";


export default function Post({ post } ) {
    const [like,setLike]=useState(post.like)
    const [isLiked,setisLiked]=useState(false)
    const likehandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setisLiked(!isLiked)
    }
  const user = Users.filter(u=>u.id===1);
  console.log(user[0].username);
  console.log(post);
    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="topLeft">
                            <img className="profilePic"
                             src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                            <span className="postUsername">
                                {Users.filter((u) => u.id === post?.userId)[0].username}</span>
                            <span className="postDate">{post.date}</span>
                        </div> 
                        <div className="topRight">
                            <MdMoreVert/>
                        </div>
                    </div>
                    <div className="ideaTitle">
                        <span>I have an idea to start a sowtware company </span>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.description}</span>
                        <span className="read">Read More</span>
                        <div className="postItems">
                            <div className="Box">
                                <div className="boxText">
                                    <span>Estimaded cost: </span>
                                    <span>Rs.500000</span>
                                </div>
                            </div>
                            <div className="Box">
                                <div className="boxText">
                                    <span>My experience: </span>
                                    <span>Software Engeneering</span>
                                </div>
                            </div>
                            <div className="Box">
                                <div className="boxText">
                                    <span>Estimaded Time:  </span>
                                    <span>1 year </span>
                                </div>
                            </div>


                        </div>
                        <div className="proposal">
                            <MdAssignment htmlColor="blue"/>
                            <span>Download Business Proposal</span>
                        </div>
                        <img src={post.photo} alt="" className="postImage" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">

                            <MdFavorite htmlColor="red" className="likeIcon" onClick={likehandler} />
                            <span className="postLikeCounter">{like} people are interested about your idea </span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText"> {post.component}</span>
                            <MdMessage/>
                            <span className="commnt">Add Comment</span>
                            <MdMessage/>
                            <span className="mesage">Send Message</span>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}
