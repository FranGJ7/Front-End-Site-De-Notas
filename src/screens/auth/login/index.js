import { Container, Card } from 'react-bootstrap';
import LogoImage from '../../../assets/images/logo.png';
import LoginForm from '../../../components/auth/login-form';
import HeaderEmpty from '../../../components/header-empty';

const LoginScreen = () => (
  <>
    <HeaderEmpty />
    <Container>
      <Card className='mx-auto mt-5' border="info" md="auto" style={{ width: '19rem' }}>
        <Card.Header>
          <img style={{ width: '70%' }} src={LogoImage} alt="logo-img" />
        </Card.Header>
        <Card.Body>
          <Card.Title>Suas notas em nuvem.</Card.Title>
          <Card.Text>
            <LoginForm />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </>
);

export default LoginScreen;