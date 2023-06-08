import React from 'react';
import './kubernetesLearning.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import KubernetesLearningFeed from '../../components/kubernetesLearningFeed/KuberneteslearningFeed'; 

function KubernetesLearning() {
  return (
    <div className='pythonMain'>
      <Topbar/>
      <div className='pythonMainCont'>
        <Sidebar/>
        <div className='pythonRight'>
          <div className='pythoncontex'>
            <dive className="pythonRightmiddle">
                <KubernetesLearningFeed/>
            </dive>
          </div>
        </div>
      </div>
    </div>
  )
}


export default KubernetesLearning
