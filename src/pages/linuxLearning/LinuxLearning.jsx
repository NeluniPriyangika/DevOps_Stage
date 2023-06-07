import React from 'react';
import "./linuxLearning.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import LinuxLearningFeed from '../../components/linuxLearningFeed/LinuxLearningFeed';

function LinuxLearning() {
  return (
    <div className='pythonMain'>
      <Topbar/>
      <div className='pythonMainCont'>
        <Sidebar/>
        <div className='pythonRight'>
          <div className='pythoncontex'>
            <dive className="pythonRightmiddle">
                <LinuxLearningFeed/>
            </dive>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinuxLearning
