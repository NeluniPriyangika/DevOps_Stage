import React, {useRef} from 'react';
import "./linuxContentsec.css";
import ReactPlayer from 'react-player';
import {BsPlayCircle} from 'react-icons/bs';
import {BsPlayCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const VIDEO_PATH = 'https://www.youtube.com/watch?v=WMy3OzvBWc0';


function LinuxContentsec() {
  const playerRef = useRef(null);
  return (
    <div className='pythonCourse-container'>
      <div className='coursecontent'>
        <h1 className='coursecontent-title'>----COURSE CONTENT----</h1>
        <div class = "mainDiv">
          <div class = "childDiv">
            <span class = "text"> 40% </span>
          </div>
        </div>
        <div className='contentList'>
        <ul>
            <div className='listItem-div' >
              <BsPlayCircleFill className='vedioicon'/>
              <Link to="/linuxContent" className='link'>1. Introduction</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircleFill className='vedioicon'/>
              <Link to="/linuxContentsec" className='link'>2. 2. Working with text files and Directories</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircleFill className='vedioicon'/>
              <Link to="/linuxContent" className='link'>3. Creating and Managing user accounts in Linux</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircleFill className='vedioicon'/>
              <Link to="/linuxContentsec" className='link'>4. installing and managing software packages</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircle className='vedioicon'/>
              <Link to="/linuxContent" className='link'>5. Services</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircle className='vedioicon'/>
              <Link to="/linuxContentsec" className='link'>6. process management & Monitoring</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircle className='vedioicon'/>
              <Link to="/linuxContent" className='link'>7. Networking</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircle className='vedioicon'/>
              <Link to="/linuxContentsec" className='link'>8. Backup and restore with tar & gzip</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircle className='vedioicon'/>
              <Link to="/linuxContent" className='link'>9. Scheduling tasks</Link>
            </div>
            <div className='listItem-div'>
              <BsPlayCircle className='vedioicon'/>
              <Link to="/linuxContentsec" className='link'>10. Redirection & wildcard</Link>
            </div>
          </ul> 
        </div>
      </div>
      <div className='video-container'>
        <div className='videoDiv'>
          <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
        <div className='vedioDescription'>
          <h1 className='vedioDescription-title'>LESSON 02 - Description</h1>
          <p className='vedioDescription-p'>
            Lorem ipsum dolor sit amet, ius utamur oblique quaestio ne. Eu euismod gubergren definitiones mei, ex illud albucius eum. Iisque ornatus docendi cu mel. Ei mei magna ancillae expetendis, no ludus aliquam tincidunt quo. Consul vocent interpretaris vix id.
            Ei iisque principes disputationi nam, modo discere ius et. Discere delenit vivendo pro ad, omnis imperdiet id ius. Sit vide dicat ocurreret at, ex duo soluta evertitur. Illum copiosae te mel, dicat ludus et sed, te eum choro dictas accusam. Usu laoreet maiestatis et, has quot legimus neglegentur ei.
            Ne delenit invenire argumentum sea, brute nusquam vel ex. Qui ut eripuit eleifend temporibus, nullam prodesset no ius, pro ei vidit scripta. An vis sale eligendi tincidunt, ex pro possim officiis. Regione tritani vel cu. Qui duis quodsi apeirian et.
            Porro fierent ei pri. Sit tale augue nobis te. Vero reprehendunt ut sea, mel eu vivendum instructior necessitatibus, cu mel solum graece accumsan. Ut pri erant mandamus salutatus. Probo molestie similique est at, te vix nemore antiopam.
            Est elit epicurei ei. Saepe vivendum id vel, libris volumus laboramus te qui. Dolore recusabo scripserit mea ut, no placerat repudiare dissentiunt nec, ut omnesque reprimique qui. His an homero similique. An his alii adversarium instructior, mea at aperiam mentitum complectitur. Eam augue tempor aperiam id, minimum comprehensam nec ei, mel ex omnis eleifend democritum.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default LinuxContentsec

