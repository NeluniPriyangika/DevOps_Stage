import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar";
import './jobsApply.css';
import WSO2 from '../../assests/WSO2.png';

function JobsApply() {
        const handleBrowseClick = () => {
          const fileInput = document.getElementById('cv');
          fileInput.click();
        };
  return (
    <>
     <Topbar/>
    <div className='jobPageMainDiv'>
        <div className="jobpageLeft">
          <Sidebar/>
        </div>
        <div className="jobpageRight">
          <div className="jobOverviewBox">
            <div className="jobOverviewBoxPhotoDiv">
              <img src={WSO2} alt="" className="postImage" />
            </div>
            <div className="jobOverviewRightDiv">
               <div className="jobOvervieRightTop">
                  <h2>Senior DevOps Engineer - WSO2 Sri Lanka</h2>
               </div>
               <div className="jobOverviewRightFirstpara">
                <p>WSO2 is a leading software company that provides open-source integration and API 
                  management solutions to enterprises worldwide. We are seeking a highly skilled and
                   motivated Senior DevOps Engineer to join our dynamic team. As a Senior DevOps Engineer
                    at WSO2, you will play a key role in designing, implementing, and managing our DevOps
                     infrastructure to support our product development and delivery lifecycle.At WSO2, 
                     we foster a collaborative and innovative work environment, and we value diversity and
                      inclusivity. If you are passionate about DevOps, have a track record of success in managing 
                      complex infrastructure, 
                  and are eager to contribute to the growth of a 
                  leading software company, we would love to hear from you.WSO2 is a leading software company specializing in open-source integration and API management solutions. With a strong focus on digital transformation and innovation, WSO2 provides a comprehensive platform that enables enterprises to seamlessly 
                  connect their systems, data, and applications to drive agility and accelerate business growth.</p>
               </div>
            </div>
          </div>
          <div className="jobsRequirementDiv">
            <p>
              <h2 className='jobOverviewSubTopic'>Resposibilities</h2>
              <ul className='unOrderList'>
                <li>
                Design and implement scalable, reliable, and secure DevOps infrastructure using industry best practices and WSO2's product stack.
                </li>
                <li>
                Collaborate with cross-functional teams to define and implement CI/CD pipelines for automated build, test, and deployment processes.
                </li>
                <li>Manage and monitor cloud-based infrastructure on platforms such as AWS, Azure, or Google Cloud.</li>
                <li>Manage and monitor cloud-based infrastructure on platforms such as AWS, Azure, or Google Cloud.</li>
                <li>Troubleshoot and resolve issues related to infrastructure, deployments, and system performance.</li>
                <li>Implement and maintain robust monitoring and logging solutions for proactive identification of system issues.</li>
                <li>Collaborate with development teams to optimize application performance, security, and scalability.</li>
                <li>Stay up-to-date with emerging technologies and industry trends, and evaluate their potential impact on our DevOps practices.</li>
                <li>Mentor and guide junior team members, providing technical expertise and promoting best practices.</li>
              </ul>
              <h2 className='jobOverviewSubTopic'>Qualifications</h2>
               <ul className='unOrderList'>
                <li>Bachelor's or Master's degree in Computer Science, Engineering, or a related field.</li>
                <li>Minimum of 5 years of professional experience in DevOps engineering or a similar role.</li>
                <li>Strong experience with containerization technologies like Docker and orchestration tools like Kubernetes.</li>
                <li>Solid understanding of cloud computing platforms (AWS, Azure, or Google Cloud) and related services.</li>
                <li>Proficient in scripting and automation using languages such as Bash, Python, or PowerShell.</li>
                <li>Deep knowledge of CI/CD principles and experience with tools like Jenkins, GitLab CI/CD, or CircleCI.</li>
               </ul>
            </p>
          </div>
          <div className="devopsprofileApply">
            <button type="submit">Apply with "DevOps World" Profile</button>
          </div>
          <div className="formMainDiv">
                      <form className='formInternal'>
                        <div>
                          <label htmlFor="name">Name:</label>
                          <input type="text" id="name" required />
                        </div>
                        <div>
                          <label htmlFor="education">Education:</label>
                          <input type="text" id="education" required />
                        </div>
                        <div>
                          <label htmlFor="experience">Experience:</label>
                          <input type="text" id="experience" required />
                        </div>
                        <div>
                          <label htmlFor="skills">Skills:</label>
                          <input type="text" id="skills" required />
                        </div>
                        <div>
                          <label htmlFor="languageSkills">Language Skills:</label>
                          <input type="text" id="languageSkills" required />
                        </div>
                        <div>
                          <label htmlFor="workPreference">Work Preference:</label>
                          <select id="workPreference">
                            <option value="remote">Remote</option>
                            <option value="onSite">On Site</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="salaryExpectations">Salary Expectations:</label>
                          <input type="text" id="salaryExpectations" required />
                        </div>
                        <div>
                        <label htmlFor="cv">Attach CV:</label>
                        <div>
                          <input type="file" id="cv" style={{ display: 'none' }} />
                          <button className='broserButton' type="button" onClick={handleBrowseClick}>
                            Browse
                          </button>
                        </div>
                      </div>
                        <button type="submit">Submit</button>
                      </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default JobsApply
