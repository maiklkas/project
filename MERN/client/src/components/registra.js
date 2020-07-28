import React, { handleSubmit, validated, useState, useEffect} from 'react';
import { Form,  Button, Jumbotron, InputGroup} from 'react-bootstrap';
import '../App.css';
import { useHttp } from '../hooks/http.hook';


export const Registra = () => {

  const [form, setForm] = useState({email: '', password: ''})
  const {loading,  request, error}= useHttp()



  const changeHandler = event => {
   setForm({...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
      try {
        const data = await request('/api/auth/register', 'POST', {...form})
        console.log('Data', data)
      } catch (e) {}

  }
  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      console.log('Data', data)
    } catch (e) {}

}
return(

  <Jumbotron>
  <Form noValidate validated={validated} onSubmit={handleSubmit}>


         <Form.Group  controlId="validationCustom02">
           <Form.Label>Введите ваш email</Form.Label>
           <Form.Control
             required
             type="email"
             placeholder="email"
             name = "email"
             onChange={changeHandler}

           />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
         </Form.Group>
         <Form.Group  >
           <Form.Label>Введите пароль</Form.Label>
           <InputGroup>

             <Form.Control
               type="password"
               placeholder="Пароль"
               name = "password"
               onChange={changeHandler}
               required
             />
             <Form.Control.Feedback type="invalid">
               Please choose a username.
             </Form.Control.Feedback>
           </InputGroup>
         </Form.Group>

         <Button   onClick={loginHandler}variant="transperent" type="submit"   className="mr-sm-2"
         disabled={loading}>
            Войти
          </Button>

       <Button  onClick={registerHandler} variant="transparent" type="submit"
         disabled={loading}>

         Зарегестрироваться
       </Button>
     </Form>
  </Jumbotron>
)
}
