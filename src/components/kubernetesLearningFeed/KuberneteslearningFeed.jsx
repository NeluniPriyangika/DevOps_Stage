import React from 'react';
import './kuberneteslearningFeed.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import KubernetesImage from "../../assests/kubernetes.jpg";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';


const data =[
    {
        id:1,
        image: KubernetesImage,
        title:'From Monolith to Microservices',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.',
        go:"/kubernetesCourse"
    },

    {
        id:2,
        image: KubernetesImage,
        title:'Container Orchestration',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.',
        go:"/kubernetesCourse"
    },

    {
        id:3,
        image: KubernetesImage,
        title:'Kubernetes',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.',
        go:"/kubernetesCourse"
    },

    {
        id:4,
        image: KubernetesImage,
        title:'Kubernetes Architecture',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.',
        go:"/kubernetesCourse"
    },
    
    {
        id:5,
        image: KubernetesImage,
        title:'Installing Kubernetes',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter. ',
        go:"/kubernetesCourse"
    },

    {
        id:6,
        image: KubernetesImage,
        title:'Minikube - Installing Local Kubernetes Clusters',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.',
        go:"/kubernetesCourse"
    },

    {
        id:7,
        image: KubernetesImage,
        title:'Accessing Minikube',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.',
        go:"/kubernetesCourse"
    },

    {
        id:8,
        image: KubernetesImage,
        title:'Accessing Minikube',
        description:'The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.',
        go:"/kubernetesCourse"
    },

    {
        id:9,
        image: KubernetesImage,
        title:'Kubernetes Volume Management',
        description:"The course content has been updated to Kubernetes v1.25.1. These updates are throughout the entire course content. There are also two updated videos in the Minikube installation chapter.",
        go:"/kubernetesCourse"
    },
]

const buttonStyle = {
    '--clr': '#0FF0FC' 
  };

const KuberneteslearningFeed =()=> {
  return (
    <div className='kubernetesfeed'> 
        <button className='kubernetesPlayButton' style={buttonStyle}><span><Link to='/kubernetesTerminal' className='link' target='_blank'>Go to kubernetes playground</Link></span></button>
        <div className='kubernetesfeedWrapper'>
        
            {data.map(({id, image, title, description, go}) => {
                return (
                
                        <Row className="g-4" key={id}>
                                <Col >
                                    <Card className='kubernetescardContext'>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></Card.Subtitle>
                                            <Card.Text className='kubernetescardText'>{description}</Card.Text>
                                        </Card.Body>
                                        <a className='btn' target= '_blank' rel="noreferrer" href= {go}>Start Your Course<span class="link"></span></a>
                                        
                                    </Card>
                                </Col>
                        </Row> 
                    
                )
            })}
        </div>
    </div>
  )
}

export default KuberneteslearningFeed
