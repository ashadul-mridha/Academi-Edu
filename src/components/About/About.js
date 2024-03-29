import React from 'react';
import './About.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutpic from '../../images/about.jpg';
import instructorimg from '../../images/instructor.jpg';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div>
            <Header></Header>
            <div className="about-us" style={{ backgroundColor : '#EFFDFF'}}>
                <Container>
                    {/* explore course section  */}
                    <Row className="d-flex align-items-center py-5">
                        <Col xs={12} md={5}>
                            <div className="w-100">
                                <img src={aboutpic} width="100%" height="450px" alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <h2>The world’s largest selection of online courses</h2>
                            <p>Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone</p>
                            <Link to="/services">
                                <Button variant="primary">Browse Courses</Button>
                            </Link>
                        </Col>
                    </Row>
                    {/* become instuctor */}
                    <Row className=" py-5">
                        <Col xs={12} md={6}>
                            <h2 className="fw-bold">Become an Instructor</h2>
                            <p className="fs-4">The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people</p>
                            <Button variant="primary" className="me-2">Become a Instructor</Button>
                            <Button variant="danger">Watch Video </Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={instructorimg} width="100%" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;