import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

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

      </Routes>
    </Router>
  );
}

export default App;
