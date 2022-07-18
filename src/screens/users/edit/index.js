import { Container, Card, Row, Col } from "react-bootstrap";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header-logged";
import UsersEditForm from "../../../components/users/user_edit_form"
import UsersEditFormPassword from "../../../components/users/user_edit_password";
import UsersDelete from "../../../components/users/user_delete";


const UserEditScreen = () => (
  <>
    <HeaderLogged/>
    <Container>
      <Card className='mx-auto mt-5' style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title >Informações Pessoais</Card.Title>
          <UsersEditForm />
        </Card.Body>
      </Card>


      <Card className='mx-auto mt-3' style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Alterar senha</Card.Title>
          <UsersEditFormPassword />
        </Card.Body>
      </Card>
      <Row>
        <Col className="mt-3 mb-3" md={{ span: 4, offset: 8 }}>
          <UsersDelete />
        </Col>
      </Row>
    </Container>



  </>
);

export default UserEditScreen;  