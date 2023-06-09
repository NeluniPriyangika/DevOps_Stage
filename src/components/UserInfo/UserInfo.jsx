import React from 'react';
import Card from 'react-bootstrap/Card'
import './userInfo.css'
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";

function UserInfo(props) {
    return (
        <div>
            <Card className="card" border="danger" style={{ width: '18rem' }}>
                <Card.Header className='cardheader'><h5>Current Profile Rank</h5> </Card.Header>
                <Card.Body>
                    <Card.Title className='cardtitle'><BsStarFill className='star'/><BsStarFill className='star'/><BsStarHalf className='star'/><BsStar className='star'/><BsStar className='star'/></Card.Title>
                    <h3 className='cardh3'>65%</h3>
                    <Card.Text  className="cardText">
                    Elevate your professional standing within the realm of DevOps by immersing yourself in the vast knowledge and practical experience offered by 'DevOps Stage', propelling your profile to soar to greater heights of achievement.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UserInfo;