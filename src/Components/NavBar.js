import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import PropTypes from 'prop-types';
// import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const AdminView = () => (
    <>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Edit About
          </DropdownItem>
          <DropdownItem>
            Edit Projects
          </DropdownItem>
          <DropdownItem>
            Edit Technologies
          </DropdownItem>
          <DropdownItem>
            Edit Contact
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">EJW</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/technologies">Technologies</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/contact">Contact</Link>
          </NavItem>
          { user && AdminView()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
