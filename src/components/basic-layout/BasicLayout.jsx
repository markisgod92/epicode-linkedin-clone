import { Container, Row, Col } from "react-bootstrap"
import './basiclayout.css'

export const BasicLayout = () => {
    return (
        <>
            <nav className="bg-white">
                <Container>
                    <Row>
                        <div className="py-4 text-center">NAVBAR</div>
                    </Row>
                </Container>
            </nav>
            <main>
                <Container>
                    <Row>
                        <Col
                            md={3}
                            lg={2}
                            className="d-none d-md-block"
                        >
                            <div className="my-3 px-1 py-5 bg-primary-subtle d-flex flex-column">
                                <div className="border-bottom border-2 border-dark">
                                    PROFILE
                                </div>
                                <div className="border-bottom border-2 border-dark">
                                    COLLEGAMENTI
                                </div>
                                <div className="border-bottom border-2 border-dark">
                                    PROVA PREMIUM
                                </div>
                                <div>
                                    ELEMENTI SALVATI
                                </div>
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                MENU
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            md={9}
                            lg={8}
                        >
                            <div className="d-block d-md-none my-3 p-5 bg-primary-subtle">
                                MOBILE PROFILE HEADER
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                CREATE POST
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                POST
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                POST
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                POST
                            </div>
                        </Col>
                        <Col
                            lg={2}
                            className="d-none d-lg-block"
                        >
                            <div className="my-3 p-5 bg-primary-subtle">
                                NOTIZIE
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                UNLOCK PREMIUM
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                LINK VARI
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}