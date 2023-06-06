import React from 'react';
import './pythonLearning.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import PythonLearningFeed from '../../components/pythonLearningFeed/PythonLearningFeed'; 


function PythonLearning() {
  return (
    <div className='pythonMain'>
      <Topbar/>
      <div className='pythonMainCont'>
        <Sidebar/>
        <div className='pythonRight'>
          <div className='pythoncontex'>
            <dive className="pythonRightmiddle">
                <PythonLearningFeed/>
            </dive>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PythonLearning
