import { Container, Row, Col, Card, ListGroup, Dropdown } from 'react-bootstrap'

const LeftSidebar = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title className="black-title">
                                Visitatori del profilo
                            </Card.Title>
                            <Card.Title className="secondary-text">
                                Impressioni del post
                            </Card.Title>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="list-item cursor-pointer-pop">
                                <i className="bi bi-bookmark-fill icon-small"></i>{' '}
                                Elementi salvati
                            </ListGroup.Item>
                            <ListGroup.Item className="list-item cursor-pointer-pop">
                                <i className="bi bi-people-fill icon-small"></i>{' '}
                                Gruppi
                            </ListGroup.Item>
                            <ListGroup.Item className="list-item cursor-pointer-pop">
                                <i className="bi bi-calendar-event-fill icon-small"></i>{' '}
                                Eventi
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LeftSidebar
