import React, { useState } from 'react';
import { Button, Form, Col, Alert } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import UsersService from '../../../service/users';


function RegisterForm() {

           const [name, setName] = useState("");
           const [email, setEmail] = useState("");
           const [password, setPassword] = useState("");
           const [redirectToLogin, setRedirectToLogin] = useState(false);
           const [error, setError] = useState(false);
   
           const HandleSubmit = async (evt) => {
               evt.preventDefault();
               
               try{
                   const user = await UsersService.register({name: name, email: email, password: password});
                 setRedirectToLogin(true);
               }catch(error){
                 setError(true);
               }
           }
          
           if(redirectToLogin)
            return <Navigate to={{pathname: "/login"}}/> 
   
    return (
        <>
            <Form onSubmit={HandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome completo do usuário</Form.Label>
                    <Form.Control 
                    type="name"
                    placeholder="Digite seu nome..." 
                    required
                    value={name}
                    onChange={e =>setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email da conta</Form.Label>
                    <Form.Control
                     type="email"
                     placeholder="exemplo@gmail.com"
                     required
                     value={email}
                     onChange={e =>setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Digite sua senha</Form.Label>
                    <Form.Control 
                     type="password"
                     placeholder="Senha"
                     required
                     value={password}
                     onChange={e =>setPassword(e.target.value)}
                     />
                    <Form.Text className="text-muted">Não compartilhe sua senha e email</Form.Text>
                </Form.Group>

                <Col className="mb-2 ">
                    <Button variant="primary" type="submit">Criar conta</Button>
                </Col>
                <Col>
                { error && <Alert variant="danger">Email or Password invalid</Alert> }
                </Col>
                <Col>
                <Button variant="primary" type="submit" onClick={e => setRedirectToLogin(true)}>Logar</Button>
                </Col>
            </Form>
        </>
    );
}

export default RegisterForm; 