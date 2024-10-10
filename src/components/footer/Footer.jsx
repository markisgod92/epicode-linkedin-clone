import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Row>
      <Col>
        <div className="bg-light rounded p-3 d-flex flex-column">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <a href="">Informazioni</a>
            <a href="">Accessibilità</a>
            <a href="">Centro assistenza</a>
            <a href="">Privacy e condizioni </a>
            <a href="">Opzioni per gli annunci pubblicitari</a>
            <a href="">Pubblicità</a>
            <a href="">Servizi alle aziende </a>
            <a href="">Pubblicità Scarica l’app LinkedIn</a>
            <a href="">Altro</a>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <img
              className="logo"
              src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
              alt=""
            />
            <p className=" mt-3"> LinkedIn Corp. © 2024</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};
