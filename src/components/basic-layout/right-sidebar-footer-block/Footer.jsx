import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex  flex-column">
            <div>
              <a className="mx-5" href="">
                Informazioni
              </a>
              <a href="">Accessibilità</a>
            </div>
            <a href="">Centro assistenza</a>
            <a href="">Privacy e condizioni </a>
            <a href="">Opzioni per gli annunci pubblicitari</a>
            <a href="">Pubblicità</a>
            <a href="">Servizi alle aziende </a>
            <a href="">Pubblicità Scarica l’app LinkedIn</a>
            <a href="">Altro</a>
          </Col>
        </Row>
        <Row>
          <div className="d-flex  ">
            <img
              className="logo"
              src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
              alt=""
            />
            <p className=" mt-3"> LinkedIn Corporation © 2024</p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
