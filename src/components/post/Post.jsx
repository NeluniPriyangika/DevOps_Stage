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
    const userId = 2; // Specify the desired user ID
    const user = Users.find(u => u.id === userId);

    if (user) {
    console.log(user.username);
    console.log(post)
    }
    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="topLeft">
                            <img className="profilePic"
                             src={user.profilePicture} alt="" />
                            <span className="postUsername">{user.username}</span>
                            <span className="postUserpage">{post.page}</span>
                            <span className="postDate">{post.date}</span>
                        </div> 
                        <div className="topRight">
                            <MdMoreVert/>
                        </div>
                    </div>
                    <div className="ideaTitle">
                        <span>{post.desc}</span>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.description}</span>
                        <div><span className="read">Read More...</span></div>
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
