
import { Container, Card } from 'react-bootstrap';
import LogoImage from '../../../assets/images/logo.png';
import RegisterForm from '../../../components/auth/register-form';
import  HeaderEmpty  from '../../../components/header-empty';


const RegisterScreen = () => (
    <>
        <HeaderEmpty />
        <Container >

            <Card className='mx-auto mt-5 ' border="info" style={{ width: '18rem' }}>
                <Card.Header>
                    <img  style={{ width: '70%' }} src={LogoImage} alt="logo-img" />
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