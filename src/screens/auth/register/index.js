
import { Container, Card } from 'react-bootstrap';
import LogoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';
import RegisterForm from '../../../components/auth/register-form';
import  HeaderEmpty  from '../../../components/header-empty';


const RegisterScreen = () => (
    <>
        <HeaderEmpty />
        <Container >

            <Card className='mx-auto mt-5 ' border="info" style={{ width: '25rem' }}>
                <Card.Header>
                    <img src={LogoImage} alt="logo-img" />
                </Card.Header>
                <Card.Body>
                    <Card.Title>Suas notas em nuvem.</Card.Title>
                    <Card.Text>
                        <RegisterForm />
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>








    </>
);

export default RegisterScreen;