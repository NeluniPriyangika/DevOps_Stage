import React from 'react';
import './pythonLearning.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

function PythonLearning() {
  return (
    <div className='pythonMain'>
      <Topbar/>
      <div className='pythonMainCont'>
        <Sidebar/>
        <div className='pythonRight'>
            <dive className="pythonRightBottom">
                <Feed/>
                <Rightbar profile/>
            </dive>
        </div>
      </div>
    </div>
  )
}

export default PythonLearning
