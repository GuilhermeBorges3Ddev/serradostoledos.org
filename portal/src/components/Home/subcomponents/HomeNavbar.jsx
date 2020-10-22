import React, { useState } from 'react';
import "./HomeNavbar.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const HomeNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="d-flex w-100 home-navbar-area py-2">
      <Navbar className="home-navbar" expand="md">
        <NavbarBrand id="home-nav-item" href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-flex w-100 justify-content-between" navbar>
            <NavItem>
              <NavLink href="/">Conhecendo a serra</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Ver denúncias/feedbacks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Realizar uma denúncia/feedback</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;