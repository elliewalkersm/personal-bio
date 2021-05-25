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

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.warn(admin);

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
          <NavItem>
            { admin && AdminView()}
          </NavItem>
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
