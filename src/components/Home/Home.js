import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    //load data 
    let [courses , setCourses] = useState([]);

    useEffect( () =>{
        fetch('./fakeDB.json')
        .then( res => res.json())
        .then( data => setCourses(data))
    },[]);

    courses = courses.slice(0,4);
    return (
        <div>
            <Header></Header>

            <Container className="py-4">
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map( course => <Courses key={course.key} course={course}></Courses>)
                    }
                </Row>
            </Container>

            
            <Footer></Footer>
        </div>
    );
};

export default Home;