import React from 'react';
import { Button , Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-primary footer-area">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h2 className="text-white fw-bold">Acadimic Edu</h2>
                        <p>The automated process starts as soon as your clothes go into the machine.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h4>Site Map</h4>
                        <ul>
                            <li>
                                <Link to="/home" className="footer-nav">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="footer-nav">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="footer-nav">Contact</Link>
                            </li>
                            <li>
                                <Link to="/services" className="footer-nav">Services</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4}>
                        <h4>Newsletter</h4>
                        <p>Subscribe our newsletter to get updates.</p>
                        <input type="Enter Your Email" className="w-50 bg-primary border" />
                        <br />
                        <Button variant="danger" className="w-50 mt-2">Subscribe</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;