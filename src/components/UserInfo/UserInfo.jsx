import React from 'react';
import Card from 'react-bootstrap/Card'
import './userInfo.css'

function UserInfo(props) {
    return (
        <div>
            <Card className="card" border="danger" style={{ width: '18rem' }}>
                <Card.Header>Your Skills Rate </Card.Header>
                <Card.Body>
                    <Card.Title>Show your skill rate to your followers...</Card.Title>
                    <h3 className='cardh3'>65%</h3>
                    <Card.Text  className="cardText">
                      Congratulations..! you have good skill rate about the DevOps. This will help you to find new companies and good criear path.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UserInfo;