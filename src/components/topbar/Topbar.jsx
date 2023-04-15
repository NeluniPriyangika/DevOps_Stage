import "./topbar.css"
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill} from 'react-icons/bs';
import {MdOutlineMessage} from 'react-icons/md';
import {IoMdNotifications} from 'react-icons/io';
import {Link} from 'react-router-dom';


function Topbar(props) {
    return (
        <div className="topbarcontainer">
            <div className="topbarLeft"> 
              <div className="logoCont">
                  <Link className="logo" to="/home">DevOps World</Link>
              </div>
            </div>

            <div className="topbarCenter">
                <div className="searchbox" >
                <AiOutlineSearch className="searchIcon"/>
                <input placeholder="search now " className="searchInput"/>
                </div>
            </div>

            <div className="topbarRight">
                <Link to="/home" className="topbarLink">Homepage</Link>
                <Link className="topbarLink" to="/Profile">Profile</Link>
                <Link className="topbarLink" to="/login">LogOut</Link>

                <div className="topbarIcons">

           <div className="topbariconItem">
               <MdOutlineMessage/>
               <span className="topbariconBadge">1</span>
           </div>
           <div className="topbariconItem">
               <IoMdNotifications/>
               <span className="topbariconBadge">1</span>
           </div>
                    <div className="topbariconItem">
                        <BsFillPersonFill/>
                        <span className="topbariconBadge">10</span>
                    </div>

           <img src="https://i.ibb.co/Bw5rrQK/20230226-142958.jpg" alt="" className="topbarImg" />
          

           </div>
           </div>
        </div>
    )
}

export default Topbar
