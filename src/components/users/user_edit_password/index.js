import React, { useState } from 'react';
import { Button, Alert, Form } from "react-bootstrap";
import UsersService from '../../../service/users';

function UsersEditFormPassword() {
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (password === password_confirmation) {
            try {
                await UsersService.updatePassword({ password: password });
                setStatus("success")
            } catch (err) {
                setStatus("error")
            }
        } else {
            setStatus("error_confirmation_password") 
        }

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                
                     <Form.Group className="mb-3" controlId="formBasicName" > 
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            name="password"
                            /> 
                      </Form.Group>
                        
                

                  
                    <Form.Group className="mb-3" controlId='formBasicPassword'>
                        <Form.Label>Confirma senha</Form.Label>
                        <Form.Control
                            type="password"
                            value={password_confirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            required
                            name="password_confirmation"
                        />
                    </Form.Group>
                                <Button className="mb-2" type="submit" variante="primary">Alterar senha</Button>

                {status === "error_update" &&
                    <Alert variant="danger">Problema ao alterar senha</Alert>
                }
                {status === "error_confirmation_password" &&
                    <Alert variant="danger">Senha não confere</Alert>
                }
                {status === "success" &&
                    <Alert variant="primary">Senha atualizada com sucesso</Alert>
                }
            </Form>
        </>
    )
}

export default UsersEditFormPassword;