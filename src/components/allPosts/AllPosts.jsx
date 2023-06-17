import React, {useState} from 'react';
import './allPosts.css';
import { Users } from "../../dummyData";
import {MdMoreVert} from 'react-icons/md'
import {MdFavorite} from 'react-icons/md';
import {MdMessage} from 'react-icons/md';


function AllPosts({post}) {
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
            <div className="allpost">
                <div className="allpostWrapper">
                    <div className="allpostTop">
                        <div className="alltopLeft">
                            <img className="allprofilePic"
                             src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                            <span className="allpostUsername">
                                {Users.filter((u) => u.id === post?.userId)[0].username}</span>
                            <span className="allpostDate">{post.date}</span>
                        </div> 
                        <div className="alltopRight">
                            <MdMoreVert/>
                        </div>
                    </div>
                    <div className="allideaTitle">
                    <span>{post.desc}</span>
                    </div>
                    <div className="allpostCenter">
                        <span className="allpostText">{post?.description}</span>
                        <span className="allread">Read More</span>
                        <img src={post.photo} alt="" className="allpostImage" />
                    </div>
                    <div className="allpostBottom">
                        <div className="allpostBottomLeft">

                            <MdFavorite size="25px" style={{color:'tomato'}} className="alllikeIcon" onClick={likehandler} />
                            <span className="allpostLikeCounter">{like} people are liked your post </span>
                        </div>
                        <div className="allpostBottomRight">
                            <span className="allpostCommentText"> {post.component}</span>
                            <MdMessage size="25px" style={{color:'gray'}} className="alllikeIcon"/>
                            <span className="allcommnt">Add Comment</span>
                            <MdMessage size="25px" style={{color:'blue'}} className="alllikeIcon"/>
                            <span className="allmesage">Send Message</span>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

export default AllPosts
