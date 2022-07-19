import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import Logoimage from '../../assets/images/logo.png'
import '../../styles/header.scss'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <div>
            <Link to="/">
              <img src={Logoimage} alt="img-logo" />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Link to="/Login" >
              <Button className='btn-custom'>Logar</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
export default Header;

