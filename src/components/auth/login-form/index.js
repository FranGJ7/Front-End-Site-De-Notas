import React, { useState } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import UsersService from '../../../service/users';

function LoginForm() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [RedirectToRegister, setRedirectToRegister] = useState(false);
     const [RedirectToNotes, setRedirectToNotes] = useState(false);
     const [Error, setError] = useState(false);
 
     const HandleSubmit = async (evt) => {
         evt.preventDefault();
 
         try {
             const user = await UsersService.login({ email: email, password: password });
             setRedirectToNotes(true);
         } catch (error) {
             setError(true);
         }
     }
 
     if (RedirectToRegister)
         return <Navigate to={{pathname:"/register"}}/>
     else if (RedirectToNotes)
         return <Navigate to={{pathname:"/notes"}}/>

    return (
        <>
            <Form onSubmit={HandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email da conta</Form.Label>
                    <Form.Control 
                    type="email"
                    placeholder="exemplo@gmail.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Digite sua senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    />
                    <Form.Text className="text-muted">Não compartilhe sua senha ou email</Form.Text>
                </Form.Group>
                <Col className='mb-3'>
                    <Button variant="primary" type="submit">
                        Logar
                    </Button>
                </Col>
                <Col className='mb-1'>
                    <Button 
                    variant="primary" 
                    onClick={e => setRedirectToRegister(true)}
                    type="submit"
                    >
                    Criar conta
                    </Button>
                </Col>
                <Form.Text className="text-muted">Crie agora sua conta grátis.</Form.Text>
                {Error && <Alert variant="danger">Email or Password invalid</Alert>}
            </Form>
        </>
    );
}

export default LoginForm;