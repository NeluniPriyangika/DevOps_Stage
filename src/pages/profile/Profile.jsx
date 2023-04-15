import React from 'react';
import "./profile.css";
import Topbar from '../../components/topbar/Topbar';

const Profile = () => {
  return (
    <div>
      <Topbar/>
      <div class="container profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src="https://i.ibb.co/Bw5rrQK/20230226-142958.jpg"  alt=""/>
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file"/>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>
                  Neluni Priyanfika
                </h5>
                <h6>
                  Undergaratuate
                </h6>
                <p class="proile-rating">SKILL RATE : <span>80%</span></p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile1" aria-selected="false">Timeline</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>WORK LINK</p>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">Website Link</a><br/>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">Bootsnipp Profile</a><br/>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">Bootply Profile</a>
                <p>SKILLS</p>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">Web Designer</a><br/>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">Web Developer</a><br/>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">WordPress</a><br/>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">WooCommerce</a><br/>
                <a href="https://www.linkedin.com/in/neluni-priyangika/">PHP, .Net</a><br/>
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div class="tab-pane fade show active" id="home1" role="tabpanel" aria-labelledby="home-tab">
                  <div class="row">
                    <div class="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div class="col-md-6">
                      <p>Neluni123</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>Neluni Priyangika</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>nelunipriyangika@gmail.com</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div class="col-md-6">
                      <p>Undergratuate</p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div class="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div class="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div class="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Your Bio</label><br/>
                      <p>Your detail description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>           
      </div>
    </div>
  )
}

export default Profile
