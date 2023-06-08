import React from 'react';
import './learning.css';
import Topbar from '../../components/topbar/Topbar'; 
import { Link } from 'react-router-dom';

function Learning() {
  return (
    
    <div>
      <Topbar/>
       <div class="main">
        <h3 class="heading">DevOps Roadmap</h3>
        <div class="container">
            <ul>
                <li>
                    <h3 class="title">1). Learn programming languages</h3>
                    <p>In here you have to learn some recomended languages which are realated to the DevOps</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text"><Link className='link' to="/pythonLearning">Python</Link></span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Golang</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Javascript</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Ruby</span>
                      </button>
                    </div>
                    
                    <span class="circle"></span>
                    <span class="date">Get Start..!</span>
                </li>
                <li>
                    <h3 class="title">2). Server Administration</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text"><Link className='link' to="/linuxLearning">Linux</Link></span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Unix</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Windows</span>
                      </button>
                    </div>
                    <span class="circle"></span>
                    <span class="date">Second Step</span>
                </li>
                <li>
                    <h3 class="title">3). Network and Security</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">TCP/IP Fundermental</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Protocols: DNS, HTTP/s,FTP,SSL...</span>
                      </button>
                    </div>
                    <span class="circle"></span>
                    <span class="date">Third Step</span>
                </li>
                <li>
                    <h3 class="title">4). Servers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Web server</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Caching</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Database</span>
                      </button>
                    </div>
                    <span class="circle"></span>
                    <span class="date">Fourth Step</span>
                </li>
                <li>
                    <h3 class="title">5). Infrastructure as code</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Configuration Management</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Docker</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text"><Link className='link' to="/kubernetesLearning">Kubernetes</Link></span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Infrastructure Provisioning</span>
                      </button>
                    </div>
                    <span class="circle"></span>
                    <span class="date">Fifth Step</span>
                </li>
                <li>
                    <h3 class="title">6). CI/CD</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Jenkins</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">TeamCity</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Circle CI</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">AWS Code Pipeline</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Google Cloudbuild</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Gitlab CI</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Bitbucket Pipeline</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Github Action</span>
                      </button>
                    </div>
                    <span class="circle"></span>
                    <span class="date">Sixth Step</span>
                </li>
                <li>
                    <h3 class="title">7). Monitoring and Logging</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Monitoring</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Logging</span>
                      </button>
                    </div>
                    <span class="circle"></span>
                    <span class="date">Seventh Step</span>
                </li>
                <li>
                    <h3 class="title">8). Clouds</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <div className='buttonDiv'>
                      <button class="button-82-pushable" >
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">AWS</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Azure</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">GCP</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">OpenStack</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Alicloud</span>
                      </button>
                      <button class="button-82-pushable">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">IBM Bluemix</span>
                      </button>
                    </div>
                    <span class="circle"></span>
                    <span class="date">Congratulations..!</span>
                </li>
            </ul>
        </div>
    </div>

    </div>
  )
}

export default Learning
