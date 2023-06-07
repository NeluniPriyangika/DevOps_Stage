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
        

        


      </Routes>
    </Router>
  );
}

export default App;
