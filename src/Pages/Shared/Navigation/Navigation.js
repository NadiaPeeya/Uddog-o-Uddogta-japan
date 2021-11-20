import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar style={{height: '100px'}} className="change-color mt-0" collapseOnSelect expand="lg" >
<Container>
<Navbar.Brand href="#home"> <span className="Uddog-O-Uddogta text-danger">UDDOG O UDDOGTA</span> </Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#home">HOME</Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#services">SERVICES</Nav.Link>
 <Nav.Link className="style-nav hover-underline-animation" as={HashLink} to="/home#joinUs">JOIN US</Nav.Link>


</Navbar.Collapse>
</Container>
</Navbar>

    );
};

export default Navigation;