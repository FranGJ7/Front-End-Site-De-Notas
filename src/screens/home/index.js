import presentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import '../../styles/home.scss'
import { Link } from 'react-router-dom'

const HomeScreen = () => (
  <>
    <Header />
    <Container fluid className="home-container bg-primary">
    <Container className="home-container bg-primary">
      <Row>
        <Col xl>
          <h1 class="text-white">Crie notas facilmente e acesse quando quiser na nuvem.</h1>
          <h3 class="text-white">Acesse suas anotações de onde estiver, na hora e de graça.</h3>
          <Link to="/register">
            <Button variant="outline-light mt-4" size="lg">
              Cadastre-se agora
            </Button>
          </Link>
        </Col>
        <Col>
          <Card.Img src={presentationImage} alt="img" />
        </Col>
      </Row>
    </Container>
  </Container>
  </>
)

export default HomeScreen;