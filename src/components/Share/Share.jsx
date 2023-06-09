 import React from 'react'
 import "./Share.css";
 import {MdPermMedia, MdLabel, MdArticle, MdQuiz} from 'react-icons/md';
 import { Link } from 'react-router-dom';

 export default function Share() {
     return (
         <div className="share">
             <div className="skillsmaindiv">
               <h5>Skills</h5>
               <div className='skillsdiv'>Kubernetes</div> 
               <div className='skillsdiv'>Containerization</div> 
               <div className='skillsdiv'>CI/CD pipeline</div> 
               <div className='skillsdiv'>Decker</div> 
               <div className='skillsdiv'>Kubernetes</div>
               <div className='skillsdiv'>Kubernetes</div> 
               <div className='skillsdiv'>Containerization</div> 
               <div className='skillsdiv'>CI/CD pipeline</div>  
             </div>
             <div className='showmorediv'><Link className='showmorelink'>View/Edit skills</Link></div>
             <hr className="shareHr" />
             <div className="skillsmaindiv">
               <h5>Cetifications & License</h5>
               <div className='skillsdiv'>Python</div> 
               <div className='skillsdiv'>Linux</div> 
               <div className='skillsdiv'>Decker</div> 
               <div className='skillsdiv'>Kubernetes</div>
             </div>
             <div className='showmorediv'><Link className='showmorelink'>View/Edit skills</Link></div>
             <hr className="shareHr" />
             <div className="skillsmaindiv">
               <h5>Following Courses</h5>
               <div className='skillsdiv'>Intoduction to Python</div> 
               <div className='skillsdiv'>Linux Fundermentals</div> 
               <div className='skillsdiv'>Best practicers with Decker & Kubernetes</div>
             </div>
             <div className='showmorediv'><Link className='showmorelink'>View/Edit skills</Link></div>
             <hr className="shareHr" />
             
             <div className="shareBottom">
                 <div className="shareOptions">
                     <div className="shareOption">
                         <MdPermMedia size="25px" style={{color:'tomato'}} className="shareIcon"/>
                         <span className="shareOptionText">Add Photos/video</span>
                     </div>
                     <div className="shareOption">
                         <MdLabel size="25px" style={{color:'blue'}} className="shareIcon"/>
                         <span className="shareOptionText">Add Tag</span>
                     </div>
                     <div className="shareOption">
                         <MdQuiz size="25px" style={{color:'goldenrod'}} className="shareIcon"/>
                         <span className="shareOptionText">Take Skills Quiz</span>
                     </div>
                     <div className="shareOption">
                         <MdArticle size="25px" style={{color:'green'}} className="shareIcon"/>
                         <span className="shareOptionText">Write Articles</span>
                     </div>
                 </div>
                 <button className="shareButton">Add Post</button>
 
             </div>
         </div>
     )
 }
  