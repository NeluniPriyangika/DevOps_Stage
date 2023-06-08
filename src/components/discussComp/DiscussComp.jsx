import React from 'react';
import "./discussComp.css"
import {MdLabel, MdPermMedia, MdFavorite} from "react-icons/md";
import Me from '../../assests/me.jpg';
import Girl from '../../assests/girl.jpg';
import Women from '../../assests/women.jpg';
import Man from '../../assests/man.jpg';

function DiscussComp(props) {
    return (
        <div>
        <div className="share1">
            <div className="shareTop">
                <img className="shareImg" src={Me} alt=""/>
                <div className="shareIdea">
                    <input placeholder="Discussion Topic "
                           className="shareinput" />
                </div>
            </div>
            <div className="shareDesc">
                <input placeholder="Description "
                       className="shareinput" />
            </div>

            <div className="dropContainer">

            </div>

            <hr className="shareHr" />

            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia size="25px" className="shareIcon1"/>
                        <span className="shareOptionText">Add Photos/video</span>
                    </div>
                    <div className="shareOption">
                        <MdLabel size="25px" className="shareIcon2"/>
                        <span className="shareOptionText">Tag People</span>
                    </div>

                </div>
                <button className="shareButton">Share</button>

            </div>

        </div>
           {/*-------------------------------------------------------------------*/}
    <div className="share2">
        <div className="shareTop">
            <img className="shareImg" src={Girl} alt=""/>
            <div>
                <h1 className="discstopic">
                    What is the CI/CD pipeline in DevOps?
                </h1>

            </div>

        </div>
        <h4 className="disDesc">
            Lorem ipsum dolor sit amet, ius utamur oblique quaestio ne. Eu euismod gubergren definitiones mei, ex illud albucius eum. Iisque ornatus docendi cu mel. Ei mei magna ancillae expetendis, no ludus aliquam tincidunt quo. Consul vocent interpretaris vix id.
            Ei iisque principes disputationi nam, modo discere ius et. Discere delenit vivendo pro ad, omnis imperdiet id ius. Sit vide dicat ocurreret at, ex duo soluta evertitur.
        </h4>

        <div className="dropContainer">

        </div>



        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdFavorite size= "25px"  className="shareIcon3"/>
                    <span className="shareOptionText">Interested</span>
                </div>
            </div>



        </div>
      <div className="commentbox">
          <div className="shareDesc">
              <input placeholder="comment "
                     className="shareinput" />
          </div>
          <div>
              <div className="comButton">
                  <button className="shareButton">Add Comment</button>
              </div>
          </div>
      </div>

    </div>
    <div className="share2">
        <div className="shareTop">
            <img className="shareImg" src={Man} alt=""/>
            <div>
                <h1 className="discstopic">
                    I would like to share my new achivement in Devops like this...
                </h1>

            </div>

        </div>
        <h4 className="disDesc">
            Lorem ipsum dolor sit amet, ius utamur oblique quaestio ne. Eu euismod gubergren definitiones mei, ex illud albucius eum. Iisque ornatus docendi cu mel. Ei mei magna ancillae expetendis, no ludus aliquam tincidunt quo. Consul vocent interpretaris vix id.
            Ei iisque principes disputationi nam, modo discere ius et. Discere delenit vivendo pro ad, omnis imperdiet id ius. Sit vide dicat ocurreret at, ex duo soluta evertitur.
        </h4>

        <div className="dropContainer">

        </div>



        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdFavorite size= "25px" className="shareIcon3"/>
                    <span className="shareOptionText">Interested</span>
                </div>
            </div>



        </div>
      <div className="commentbox">
          <div className="shareDesc">
              <input placeholder="comment "
                     className="shareinput" />
          </div>
          <div>
              <div className="comButton">
                  <button className="shareButton">Add Comment</button>
              </div>
          </div>
      </div>

    </div>
    <div className="share2">
        <div className="shareTop">
            <img className="shareImg" src={Women} alt=""/>
            <div>
                <h1 className="discstopic">
                    I would like to kanow about Kubernetes.
                </h1>

            </div>

        </div>
        <h4 className="disDesc">
            Lorem ipsum dolor sit amet, ius utamur oblique quaestio ne. Eu euismod gubergren definitiones mei, ex illud albucius eum. Iisque ornatus docendi cu mel. Ei mei magna ancillae expetendis, no ludus aliquam tincidunt quo. Consul vocent interpretaris vix id.
            Ei iisque principes disputationi nam, modo discere ius et. Discere delenit vivendo pro ad, omnis imperdiet id ius. Sit vide dicat ocurreret at, ex duo soluta evertitur. 
        </h4>

        <div className="dropContainer">

        </div>



        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdFavorite size= "25px" className="shareIcon3"/>
                    <span className="shareOptionText">Interested</span>
                </div>
            </div>



        </div>
      <div className="commentbox">
          <div className="shareDesc">
              <input placeholder="comment "
                     className="shareinput" />
          </div>
          <div>
              <div className="comButton">
                  <button className="shareButton">Add Comment</button>
              </div>
          </div>
      </div>
        

    </div>
        </div>
    );
}

export default DiscussComp;