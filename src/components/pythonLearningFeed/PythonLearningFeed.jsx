import React from 'react';
import './pythonLearningFeed.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PythonImage from "../../assests/pythonTraining.png";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';


const data =[
    {
        id:1,
        image: PythonImage,
        title:'Intoduction to Python',
        description:'This is an introductory Python course by JetBrains Educational Products. The presented materials are based on the official Python Documentation. The target audience are the people with little or no experience in programming who would like to start learning Python.',
        go:"/pythonCourse"
    },

    {
        id:2,
        image: PythonImage,
        title:'Python GUI with Tkinter',
        description:'This course offers learning materials for students interested in developing cross-platform desktop applications with Python’s built-in Tkinter module. The course includes two sections going from basic to intermediate, each with a range of examples and exercises on building apps with buttons, data entry widgets, and menus. These exercises guide you through the development of a strategy game with a computer opponent (that doesn’t cheat!) and a simple drawing app.',
        go:"/pythonCourse"
    },

    {
        id:3,
        image: PythonImage,
        title:'Python.​ Start.​',
        description:'This is an introductory Python course in Russian. - The course will be most beneficial for beginner-level Python learners. - The course covers core Python features. - It contains hands-on examples of Python code implementation and exercises to practice new skills.',
        go:"/pythonCourse"
    },

    {
        id:4,
        image: PythonImage,
        title:'Python Libraries - NumPy',
        description:'This is an introductory course about the most popular Python library - NumPy. - The course will be most beneficial for learners with some Python skills. - The course covers ndarrays and operations on them, along with some possible applications.',
        go:"/pythonCourse"
    },
    
    {
        id:5,
        image: PythonImage,
        title:'CNE 335 Network Programming',
        description:'This course introduces students to advanced topics in the Python programming language. Students will make use of object-oriented principles to write multi-file programs. Students will make use of modules to quickly build complex software, and will learn to write effective documentation. ',
        go:"/pythonCourse"
    },

    {
        id:6,
        image: PythonImage,
        title:'Informatika 101-python Programovanie',
        description:'Introductory course for Computer Science. Course is in Slovak Language. Kurz pre vsetkych, ktori sa chcu naucit programovanie. Kurz Informatika 101 obsahuje 2 casti - teoreticku cast a programovanie v Pythone. Pre otazky a feedback napis na info@streetofcode.sk',
        go:"/pythonCourse"
    },

    {
        id:7,
        image: PythonImage,
        title:'AMazing',
        description:'This is a course by JetBrains Educational Products in which you will learn to create a perfect maze using Python.The target audience are the people with a bit of experience in Python programming.Good luck and have fun!',
        go:"/pythonCourse"
    },

    {
        id:8,
        image: PythonImage,
        title:'Complete Python Pro Bootcamp',
        description:'Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, the only course you need to learn to code with Python. With over 500,000 5 STAR reviews and a 4.8 average, my courses are some of the HIGHEST RATED courses in the history of Udemy!',
        go:"/pythonCourse"
    },

    {
        id:9,
        image: PythonImage,
        title:'Introduction to Python',
        description:"This online Python course is part of Microsoft's Python learning paths. It prepares students with the concepts and basic skills to pursue more advanced learning.",
        go:"/pythonCourse"
    },
]

const PythonLearningFeed =()=> {
  return (
    <div className='pythonfeed'> 

        <div className='pythonfeedWrapper'>
        
            {data.map(({id, image, title, description, go}) => {
                return (
                
                        <Row className="g-4" key={id}>
                                <Col >
                                    <Card className='cardContext'>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></Card.Subtitle>
                                            <Card.Text className='cardText'>{description}</Card.Text>
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

export default PythonLearningFeed
