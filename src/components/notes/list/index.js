
import { Button, Col, ListGroup, Row, Badge, Image } from "react-bootstrap";
import "../../../styles/notes.scss";
import Moment from 'moment';

function ListNotes(props) {
    return (
        <>
             <Row>
                <Col  className="m-2"> 
                    <Badge bg="secondary">{props.notes.length} Notas</Badge>
                </Col>
                <Col>
                    <Button state="active" color="custom-purple" outlined size="small" onClick={() => props.createNote()}>
                        Notes +
                    </Button>
                </Col>
                </Row>
            
            <ListGroup className="notes-list m-2">
                {props.notes.map((item, key) =>
                    <ListGroup.Item key={key} onClick={() => props.selectNote(item._id)} active={item === props.current_note}>
                        <h4>
                            {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                        </h4>
                        <p  subtitle spaced={false}>
                            {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                        </p>

                        <Row>
                            <Col>
                                <Badge bg="secondary">
                                    {Moment(item.created_at).format('DD/MM')}
                                </Badge>
                            </Col>
                            <Col xs={6}>
                                <Badge bg="secondary">
                                    {Moment(item.created_at).format('LT')}
                                </Badge>
                            </Col>
                            <Col>
                            <Image 
                             src="https://img.icons8.com/fluency-systems-filled/18/000000/filled-trash.png"
                             alt="icone-deletar" 
                             onClick={() => props.deleteNote(item)}/>
                            </Col>
                        </Row>

                    </ListGroup.Item>
                )}
            </ListGroup>
        </>
    )
}

export default ListNotes;