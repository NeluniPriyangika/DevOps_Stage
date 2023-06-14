import React from 'react';
import './jobsApply.css';

const JobsApply = ({ jobPost }) => {
  const handleApply = () => {
    // Logic for applying with DevOps World Profile
    alert('Applying with DevOps World Profile');
  };

  const handleRegularApply = () => {
    // Logic for regular application method
    alert('Applying with Regular Application');
  };

  return (
    <div className="job-application-page">
      <div className="job-post">
        <h1>{jobPost.jobTitle}</h1>
        <p>{jobPost.jobdicription}</p>
        <button className="read-full-job-description">Read Full Job Description</button>
      </div>

      <div className="apply-section">
        <p className="apply-message">
          This will send an application to the recruiter with your DevOps World profile and ranking. All certifications you have done, skills you have, and all your profile info will be shared. If you need a regular application method, fill the following form and attach your CV.
        </p>
        <button className="apply-with-profile" onClick={handleApply}>
          Apply with the DevOps World Profile
        </button>
      </div>

      <div className="job-application">
        <h2>Job Application Form</h2>
        <form>
          {/* Your job application form fields */}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          {/* Other form fields */}
          <button className="regular-apply" onClick={handleRegularApply}>
            Apply with Regular Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobsApply;
