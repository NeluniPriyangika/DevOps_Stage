import React from 'react';
import Card from 'react-bootstrap/Card'
import './userInfo.css'

function UserInfo(props) {
    return (
        <div>
            <Card className="card" border="danger" style={{ width: '18rem' }}>
                <Card.Header>Advertisement </Card.Header>
                <Card.Body>
                    <Card.Title>Best Project Management Tool For Everyone</Card.Title>
                    <Card.Text  className="cardText">
                      improve your productivity by using "ProMo". The best project management tool. Easy to use. Easy to manage.
                        ProMo will save you lot of time in your projects. Check it out now.
                    </Card.Text>
                    <h3>10.99 $ /Mo</h3>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UserInfo;