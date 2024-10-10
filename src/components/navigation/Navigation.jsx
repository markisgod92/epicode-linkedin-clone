import {
  Container,
  Form,
  Nav,
  Navbar,
  Dropdown,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import {
  Search,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Grid,
} from "lucide-react";
import "./Navigation.css";

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="px-3 d-flex justify-content-center"
      style={{ height: "50px" }}
    >
      <Container
        className="d-flex justify-content-between align-items-center"
        style={{ maxWidth: "1000px" }}
      >
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            width="25"
            height="25"
            className="d-inline-block align-top"
            alt="LinkedIn"
          />
        </Navbar.Brand>

        <Form
          className="d-inline-flex flex-grow-1 mx-1 position-relative"
          style={{ maxWidth: "250px" }}
        >
          <Form.Control
            type="text"
            placeholder="Cerca"
            className="ml-2"
            value={searchTerm}
            onChange={handleInputChange}
            style={{
              border: "none",
              background: "grey",
              color: "white",
              borderBottom: "1px solid #ccc",
              width: "100%",
              height: "30px",
            }}
          />
          <Search
            className=" text-dark position-absolute"
            size={12}
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
        </Form>

        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link
            href="#"
            className="text-light d-flex flex-column align-items-center mx-2"
          >
            <Home size={20} />
            <small>Home</small>
          </Nav.Link>
          <Nav.Link
            href="#"
            className="text-light d-flex flex-column align-items-center mx-2"
          >
            <Users size={20} />
            <small>Rete</small>
          </Nav.Link>
          <Nav.Link
            href="#"
            className="text-light d-flex flex-column align-items-center mx-2"
          >
            <Briefcase size={20} />
            <small>Lavoro</small>
          </Nav.Link>
          <Nav.Link
            href="#"
            className="text-light d-flex flex-column align-items-center mx-2"
          >
            <MessageSquare size={20} />
            <small>Messaggi</small>
          </Nav.Link>

          <Nav.Link
            href="#"
            className="text-light d-flex flex-column align-items-center mx-2 position-relative"
          >
            <Bell size={20} />
            <small>Notifiche</small>
            <span
              className="position-absolute top-5 start-60 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "9px", padding: "3px 5px" }}
            >
              21
            </span>
          </Nav.Link>

          <Dropdown alignRight className="ml-2">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-user"
              className="text-light d-flex flex-column align-items-center"
              style={{ padding: "0" }}
            >
              <img
                src="https://via.placeholder.com/30"
                width="23"
                height="23"
                className="rounded-circle"
                alt="User"
              />
              <small className="ml-2" style={{ fontSize: "12px" }}>
                Tu
              </small>
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="p-3 bg-dark"
              style={{
                border: "1px solid #333",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="rounded-circle"
                  width="50"
                  height="50"
                />
                <div className="ml-2">
                  <strong className="text-light" style={{ fontSize: "14px" }}>
                    Marco Colia
                  </strong>
                  <br />
                  <small className="text-light" style={{ fontSize: "12px" }}>
                    Full Stack Developer
                  </small>
                </div>
              </div>

              <Button
                variant="outline-light"
                className="w-100 mb-2 rounded-5"
                style={{ height: "30px" }}
              >
                Visualizza profilo
              </Button>

              <Dropdown.Divider className="bg-light" />

              <Dropdown.ItemText
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Account
              </Dropdown.ItemText>
              <Dropdown.Item
                href="#"
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Prova 1 mese di Premium per 0 EUR
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Impostazioni e privacy
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Guida
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Lingua
              </Dropdown.Item>
              <Dropdown.Divider className="bg-light" />

              <Dropdown.ItemText
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Gestisci
              </Dropdown.ItemText>
              <Dropdown.Item
                href="#"
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Post e attività
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Account per la pubblicazione di offerte di lavoro
              </Dropdown.Item>
              <Dropdown.Divider className="bg-light" />
              <Dropdown.Item
                href="#"
                className="text-light"
                style={{ fontSize: "12px" }}
              >
                Esci
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div
            style={{
              width: "1px",
              backgroundColor: "lightgray",
              height: "30px",
              margin: "0 10px",
            }}
          ></div>

          <Dropdown alignRight className="ml-3">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-company"
              className="text-light d-flex flex-column align-items-center"
              style={{ padding: "0" }}
            >
              <Grid size={20} />
              <small style={{ fontSize: "12px" }}>Per le aziende</small>
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-3 bg-dark">
              <h6
                className="text-light text-right"
                style={{ fontSize: "14px" }}
              >
                Esperienze
              </h6>
              <Dropdown.Divider className="bg-light" />

              <Dropdown.Item href="#">
                <div className="d-flex align-items-start">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="company-logo"
                    className="mr-2 rounded-circle"
                    width="40"
                    height="40"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <strong className="text-light" style={{ fontSize: "14px" }}>
                      Full Stack Developer
                    </strong>
                    <p className="text-light mb-0" style={{ fontSize: "12px" }}>
                      Fifty Deg • Tempo pieno
                    </p>
                    <p className="text-light mb-0" style={{ fontSize: "12px" }}>
                      ott 2022 - Pres ott 2022 - Presente
                    </p>
                    <small className="text-light" style={{ fontSize: "12px" }}>
                      git, typescript, +20 competenze
                    </small>
                  </div>
                </div>
              </Dropdown.Item>

              <Dropdown.Divider className="bg-light" />

              <Dropdown.Item href="#">
                <div className="d-flex align-items-start">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="company-logo"
                    className="mr-2 rounded-circle"
                    width="40"
                    height="40"
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <strong className="text-light" style={{ fontSize: "14px" }}>
                      Frontend Developer & Language Coordinator
                    </strong>
                    <p className="text-light mb-0" style={{ fontSize: "12px" }}>
                      Flarum • Autonomo
                    </p>
                    <p className="text-light mb-0" style={{ fontSize: "12px" }}>
                      set 2020 - Presente
                    </p>
                    <small className="text-light" style={{ fontSize: "12px" }}>
                      frontend, git, +6 competenze
                    </small>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div
            className="text-warning text-center mx-3"
            style={{ fontSize: "10px", lineHeight: "12px" }}
          >
            <small style={{ fontSize: "10px" }}>Prova Premium per</small>
            <br />
            <strong style={{ fontSize: "12px" }}>0 EUR</strong>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
