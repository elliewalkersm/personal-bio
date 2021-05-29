import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import PropTypes from 'prop-types';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const AdminView = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/add-projects">Add Projects</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar className="navbar" color="light" light expand="md">
        <NavbarBrand href="/">EJW</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" color="light" navbar>
          <NavItem>
            <Link className="nav-link" to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/technologies">Technologies</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/contact">Contact</Link>
          </NavItem>
            { admin && AdminView() }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
