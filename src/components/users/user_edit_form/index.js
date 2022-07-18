import React, { useState, useEffect } from 'react';
import { Button, Alert, Form } from "react-bootstrap";
import UsersService from '../../../service/users';

function UsersEditForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState(null);

    const initializeUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'));
        setName(user['name']);
        setEmail(user['email']);
    }

    useEffect(() => {
        initializeUser()
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await UsersService.update({ email: email, name: name });
            setStatus("success")
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName" > 
                        <Form.Label className="has-text-grey">Nome completo</Form.Label>
                        <Form.Control
                            type="name"
                            value={name || ""}
                            onChange={e => setName(e.target.value)}
                            required
                            name="name"
                        />
                    </Form.Group>
                
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email || ""}
                            onChange={e => setEmail(e.target.value)} 
                            required
                            name="email"
                        />
                    </Form.Group>
                    <Button className="mb-2" type="submit">Atualiza</Button>      
                
                {status === "error" &&
                    <Alert variant="danger">Problema ao atualiza</Alert>
                }
                {status === "success" &&
                    <Alert variant="primary">Atualizado com sucesso!</Alert>
                }
            </Form>
        </>
    )


}

export default UsersEditForm;