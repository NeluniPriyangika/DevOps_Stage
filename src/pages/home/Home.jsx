import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Topbar from '../../components/topbar/Topbar';

export default function Home() {
  return (
    <div className="home">
      <Topbar/>
      <div class="wrap" >
          <div class="tile"> 
            <img className='image1' src='https://i.ibb.co/Bw5rrQK/20230226-142958.jpg" alt="20230226-142958' alt=''/>
            <div class="text">
              <div className='homeTiletitle'><h1>Profile</h1></div>
              <h2 class="animate-text"><Link className='link' to="/profile">Curent Rate 80% <AiOutlineArrowRight/> </Link></h2>
              <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
              <div class="dots">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </div>

        <div class="tile"> 
          <img className='image2' src='https://i.ibb.co/4jB1wNn/pexels-pixabay-267885.jpg' alt=''/>
          <div class="text">
            <div className='homeTiletitle'><h1>My Learning RoadMap</h1></div>
            <h2 class="animate-text"><Link className='link' to="/learning">What i have learned <AiOutlineArrowRight/> </Link> </h2>
            <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </div>
    
        <div class="tile"> 
          <img className='image2' src='https://i.ibb.co/gdwdWKG/digital-skills2-jpg.jpg' alt=''/>
          <div class="text">
            <div className='homeTiletitle'><h1>Feed</h1></div>
            <h2 class="animate-text"><Link className='link' to='/feedPortal'>Vew all Feed <AiOutlineArrowRight/></Link></h2>
            <p class="animate-text">You can view in here any other posts, photos, videos any thing others shared.</p>
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="wrap">
          <div class="tile"> 
            <img className='image2' src='https://i.ibb.co/2c5HXNf/5-tips-to-prepare-for-group-discussion-rounds.webp' alt=''/>
            <div class="text">
              <div className='homeTiletitle'><h1>Discussion Portal</h1></div>
              <h2 class="animate-text"><Link className='link' to="/discussPortal">Start a new discussion or ask question here<AiOutlineArrowRight/> </Link></h2>
              <p class="animate-text">If you have any clarification, problems or get to further awareness about DevOps. Ask questions and get comments for your all broblems using this Q&A portal </p>
              <div class="dots">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </div>

        <div class="tile"> 
          <img className='image2' src='https://i.ibb.co/jHKxHCy/speedometer-measuring-skill-level-high-green-d-rendered-white-background-measuring-skill-level-11714.jpg' alt=''/>
          <div class="text">
            <div className='homeTiletitle'><h1>Mesure Your Skill</h1></div>
            <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </div>
    
        <div class="tile"> 
          <img className='image2' src='https://i.ibb.co/WDdnyP3/situations-vacant-12000-jobs-on-offer-in-edtech.webp' alt=''/>
          <div class="text">
            <div className='homeTiletitle'><h1>Jobs For You</h1></div>
            <h2 class="animate-text"><Link className='link' to="/jobs">Explore jobs/companies and apply<AiOutlineArrowRight/> </Link></h2>
            <p class="animate-text">Use this job portal and find the jobs and companies which are more suitable for your skills and qualifications.</p>
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>   
      </div>

      <div class="wrap">
          <div class="tile"> 
            <img className='image2' src='https://i.ibb.co/3YYZGM3/Group-Discussion.jpg' alt=''/>
            <div class="text">
              <div className='homeTiletitle'><h1>Meet Professionals</h1></div>
              <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
              <div class="dots">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </div>

        <div class="tile"> 
          <img className='image2' src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' alt=''/>
          <div class="text">
            <div className='homeTiletitle'><h1>DevSecOps</h1></div>
            <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </div>
    
        <div class="tile"> 
          <img className='image2' src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80' alt=''/>
          <div class="text">
            <div className='homeTiletitle'><h1>Trendings</h1></div>
            <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
           
      </div>

    </div>
    
  )
}
