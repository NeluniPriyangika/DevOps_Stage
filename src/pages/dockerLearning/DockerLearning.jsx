import React from 'react';
import "./dockerLearning.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DockerLearningFeed from '../../components/';

function DockerLearning() {
  return (
    <div className='pythonMain'>
      <Topbar/>
      <div className='pythonMainCont'>
        <Sidebar/>
        <div className='pythonRight'>
          <div className='pythoncontex'>
            <dive className="pythonRightmiddle">
                <DockerLearningFeed/>
            </dive>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DockerLearning
