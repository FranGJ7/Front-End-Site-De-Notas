import { Container, Navbar } from 'react-bootstrap';
import Logoimage from '../../assets/images/logo.png'
import '../../styles/header.scss'
import { Link } from 'react-router-dom'

const HeaderEmpty = () => (

  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand>
      <div>
          <Link to="/">
        <img src={Logoimage} alt="img-logo"/>
        </Link>
      </div>
      </Navbar.Brand>
    </Container>
  </Navbar>

);

export default HeaderEmpty;


