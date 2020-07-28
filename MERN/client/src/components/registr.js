import React from 'react';
import { Form,  Button, Jumbotron} from 'react-bootstrap';
import '../App.css';
export const Registr = () => (


  <Jumbotron>
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" placeholder="Введите email"   />

    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label> Введите свой пароль</Form.Label>
      <Form.Control type="password" placeholder="Пароль" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="оставться в сети" />
    </Form.Group>
    <Button  href="/Home"  variant="dark" type="submit"   className="mr-sm-2">

      Войти
    </Button>

    <Button href="/registra" variant="dark" type="submit">
      Зарегестрироваться
    </Button>
  </Form>
  </Jumbotron>

)
