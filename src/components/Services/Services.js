import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Services = () => {
    //load data 
    let [courses , setCourses] = useState([]);

    useEffect( () =>{
        fetch('./fakeDB.json')
        .then( res => res.json())
        .then( data => setCourses(data))
    },[]);

    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <h1 className="text-center fw-bold">The world's largest selection of courses</h1>
                <p className="text-center fs-5">Choose from 130,000 online video courses with new additions published every month</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map( course => <Courses key={course.key} course={course}></Courses>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Services;