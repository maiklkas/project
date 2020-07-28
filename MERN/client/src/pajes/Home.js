import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export const Home = () => (

  <Navbar collapseOnSelect expand="sm" bg="transparent" variant="dark">
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">


        <Nav.Link href="#">Написать произведение</Nav.Link>
        <Nav.Link href="#">Управлене произведениями</Nav.Link>
        <Nav.Link href="#">Сменить тему сайта</Nav.Link>
        <Nav.Link href="/About">Выйти</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
  )
