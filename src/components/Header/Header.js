import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="py-4">
                <Container>
                    <Navbar.Brand className="text-primary fw-bold fs-2" >Academi Edu </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" activeClassName="navbar-active" className="nav-item"> Home </NavLink>
                            <NavLink to="/about" activeClassName="navbar-active" className="nav-item"> About </NavLink>
                            <NavLink to="/services" activeClassName="navbar-active" className="nav-item"> Services </NavLink>
                            <NavLink to="/contact" activeClassName="navbar-active" className="nav-item"> Contact </NavLink>
                            <Button variant="primary">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;