import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import navLogo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div>
            {/* <Link to="/home">
                Home
            </Link>
            <Link to="/about">
                About
            </Link>
            <Link to="/services">
                Services
            </Link>
            <Link to="/contact">
                Contact 
            </Link> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Academi Edu </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" activeClassName="navbar-active" className="nav-item"> Home </NavLink>
                            <NavLink to="/about" activeClassName="navbar-active" className="nav-item"> About </NavLink>
                            <NavLink to="/services" activeClassName="navbar-active" className="nav-item"> Services </NavLink>
                            <NavLink to="/contact" activeClassName="navbar-active" className="nav-item"> Contact </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;