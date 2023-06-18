import React, {useState} from 'react';
import "./jobs.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nintyx from "../../assests/99x.png";
import Oracle from "../../assests/oracle.png";
import HCL from "../../assests/HCL.png";
import WSO2 from "../../assests/WSO2.png";
import Virtusa from "../../assests/virtusa.png";
import IFS from "../../assests/IFS.jpg";
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';

const data =[
  {
      id:1,
      jobImage: WSO2 ,
      jobTitle:'Senior DevOps Engineer - WSO2 Sri Lanka',
      jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
      applybutton:"/jobsApply"
  },

  {
    id:2,
    jobImage: HCL ,
    jobTitle:'Undergraduate Trainee DevOps Engineer - HCL Technologies',
    jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
    applybutton:"/jobsApply"
},

{
  id:3,
  jobImage: Oracle ,
  jobTitle:'Senior DevOps Engineer - Oracle',
  jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
  applybutton:"/jobsApply"
},

{
  id:4,
  jobImage: Virtusa ,
  jobTitle:'Undergraduate Trainee DevOps Engineer - Virtusa',
  jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
  applybutton:"/jobsApply"
},

{
  id:5,
  jobImage: Nintyx ,
  jobTitle:'Senior DevOps Engineer - 99x Technologies',
  jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
  applybutton:"/jobsApply"
},

{
  id:6,
  jobImage: IFS ,
  jobTitle:'Undergraduate Trainee DevOps Engineer - IFS',
  jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
  applybutton:"/jobsApply"
},

{
  id:7,
  jobImage: WSO2 ,
  jobTitle:'Senior DevOps Engineer - WSO2 Sri Lanka',
  jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
  applybutton:"/jobsApply"
},

{
  id:8,
  jobImage: Virtusa ,
  jobTitle:'Undergraduate TraineeSenior DevOps Engineer - Virtusa',
  jobdicription:'We are seeking a highly skilled and experienced Senior DevOps Engineer to join our dynamic and fast-paced team. As a Senior DevOps Engineer, you will play a critical role in designing, implementing, and maintaining our infrastructure and deployment pipelines. You will work closely with cross-functional teams to automate and streamline our processes, ensuring the reliability, scalability, and security of our systems.',
  applybutton:"/jobsApply"
},

]
const Jobs =()=> {
  
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return ( 
    <div className='jobpage'>
      <Topbar/>
      <div className='jobcontent'>
      <div className="jobContentPageTop">
    <div className="jobContentPageTitle">
            <h2 className='jobPagetitle'>Recommended Jobs for you</h2>    
    </div>
    <div className="jonContentPageOptions">
        <div className='sortby'><h5>Sort by :</h5> </div>
		    <div className="jobcontectpageoptionWithButtions">
            <div>
                <DatePicker placeholderText="Posted Date" className='jobDatePicker'  selected={selectedDate} onChange={handleDateChange} />
            </div>
          
       </div>    
	</div>	
  </div>
        <div className='jopPostdiv'>
          {data.map(({id,jobImage, jobTitle, jobdicription, applybutton }) => {
            return(
              <div className="jobPost" key={id}>
              <img className="company-images" src={jobImage} alt=""/>
              <div className='jobDescription'>
                <h4 className='jobtitle'>{jobTitle}</h4>
                <p className='jobdesc'>{jobdicription}</p>
              </div>
              <div className='jobbuttonDiv'>
                <button class="button-29"><Link to={applybutton} className='link'>Apply</Link></button>
                <button class="button-29" >Save for later</button>
              </div>
            </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )


}

export default Jobs
