import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import UsersService from '../../../service/users';
import { Navigate } from "react-router-dom";

function UsersDelete() {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteUser = async () => {
        if (deleteUser) {
            setShow(false)
            await UsersService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome)
        return <Navigate to={{ pathname: "/" }} />

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Deletar conta
            </Button>

            <Modal centered show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Deseja deletar sua conta ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Depois de deletar a conta todas sua anotações será perdida!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={() => deleteUser()}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UsersDelete;