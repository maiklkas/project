import React from 'react';
import {Navbar, Nav,  Form, FormControl, Button, Dropdown} from 'react-bootstrap';


export const NavigationBar = () => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Сайт</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/registra">Личный кабинет</Nav.Link>
        <Nav.Link href="/About">Главная</Nav.Link>

      </Nav>
      <Nav>
      <Dropdown>
          <Dropdown.Toggle variant="outline-light"  className="mr-sm-2"size = "sm" id="dropdown-basic">
            Язык
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item > Русский язык</Dropdown.Item>
          <Dropdown.Item href="#/">English language</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Поиск"
          className="mr-sm-2"
          />
          <Button variant="outline-light" size="sm">Поиск</Button>

          </Form>
    </Navbar.Collapse>
  </Navbar>
)
