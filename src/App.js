import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Learning from "./pages/learning/Learning";
import PythonLearning from "./pages/pythonLearning/PythonLearning";
import PythonCourse from "./pages/pythonCourse/PythonCourse.jsx";
import PythonContent from "./pages/pythonContent/PythonContent.jsx";
import PythonContentsec from './pages/pythonContentsec/PythonContentsec.jsx';
import LinuxLearning from "./pages/linuxLearning/LinuxLearning";
import LinuxCourse from "./pages/linuxCourse/LinuxCourse.jsx";
import LinuxContent from "./pages/linuxContent/LinuxContent";
import LinuxContentsec from "./pages/linuxContentsec/LinuxContentsec";
import KubernetesLearning from "./pages/kubernetesLearning/KubernetesLearning";
import KubernetesCourse from "./pages/kubernetesCourse/KubernetesCourse";
import KubernetesContent from "./pages/kubernetesContent/KubernetesContent.jsx";
import KubernetesContentsec from './pages/kubernetesContentsec/KubernetesContentsec.jsx';
import DiscussionPortal from "./pages/discussionPortal/DiscussionPortal";
import LinuxTerminal from "./pages/linuxTerminal/LinuxTerminal.jsx";
import Jobs from "./pages/jobpage/Jobs.jsx";
import JobsApply from "./pages/jobsApply/JobsApply";
import KubernetesTerminal from "./pages/kubernetesTerminal/KubernetesTerminal";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context); 
  return (
    <Router>
      
      <Routes>
        <Route  path="/" element={user? <Home/>:<Register/>}/>
        <Route path="/register" element={user? <Home/>:<Register/>}/>
        <Route path="/login" element={user? <Home/>:<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/profile" element= {<Profile/>}/>
        <Route path="/learning" element= {<Learning/>}/>
        <Route path="/pythonLearning" element= {<PythonLearning/>}/>
        <Route path="/pythonCourse" element= {<PythonCourse/>}/>
        <Route path="/pythonContent" element= {<PythonContent/>}/>
        <Route path="/pythonContentsec" element= {<PythonContentsec/>}/>
        <Route path="/linuxLearning" element= {<LinuxLearning/>}/>
        <Route path="/linuxCourse" element= {<LinuxCourse/>}/>
        <Route path="/linuxContent" element= {<LinuxContent/>}/>
        <Route path="/linuxContentsec" element= {<LinuxContentsec/>}/>
        <Route path="/kubernetesLearning" element= {<KubernetesLearning/>}/>
        <Route path="/kubernetesCourse" element= {<KubernetesCourse/>}/>
        <Route path="/kubernetesContent" element= {<KubernetesContent/>}/>
        <Route path="/kubernetesContentsec" element= {<KubernetesContentsec/>}/>
        <Route path="/discussPortal" element= {<DiscussionPortal/>}/>
        <Route path="/linuxTerminal" element= {<LinuxTerminal/>}/>
        <Route path="/jobs" element= {<Jobs/>}/>
        <Route path="/jobsApply" element= {<JobsApply/>}/>
        <Route path="/kubernetesTerminal" element= {<KubernetesTerminal/>}/>

        
        
        

        


      </Routes>
    </Router>
  );
}

export default App;
