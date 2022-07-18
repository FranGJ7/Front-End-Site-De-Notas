import React, { useState } from 'react';
import { Navbar, Container, Nav, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import LogoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UsersService from '../../service/users';
import { Navigate, Link } from "react-router-dom";



function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));


  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  }

  if (redirectToHome)
    return <Navigate to={{ pathname: "/" }} />

  return (

    <Navbar bg="primary">
      <Container fluid>
        <Button
          className="open-button"
          color="white"
          outlined
          onClick={() => props.setIsOpen(true)}>
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-notes-business-kiranshastry-lineal-kiranshastry-1.png" alt="icon-notes" />
        </Button>

        <Navbar.Brand>
          <Link to="/notes">
            <img src={LogoImage} alt="Img-logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className='mr-5'>

            {['start'].map((direction) => (
              <DropdownButton
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="primary"
                title={JSON.parse(user)['name']}
              >

                <Dropdown.Item eventKey="1">
                  <Link className='link' to="/users/edit">
                    Editar usuário
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={e => logOut()}>Desconecta</Dropdown.Item>
              </DropdownButton>
            ))}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderLogged;
