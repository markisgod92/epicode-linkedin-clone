import { Container, Form, Nav, Navbar, Dropdown } from "react-bootstrap";
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

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="px-3 d-flex justify-content-center"
    >
      <Container
        className="d-flex justify-content-between align-items-center"
        style={{ maxWidth: "800px" }}
      >
        {/* LinkedIn Icon */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="LinkedIn"
          />
        </Navbar.Brand>

        {/* Search Form */}
        <Form
          inline="true"
          className="d-flex align-items-center mx-3"
          style={{ maxWidth: "300px" }}
        >
          <Form.Control
            type="text"
            placeholder="Cerca"
            className="ml-2"
            style={{
              border: "none",
              background: "grey",
              color: "white",
              borderBottom: "1px solid #ccc",
              width: "100%",
            }}
          />
          <Search className="text-muted text-dark" size={18} />
        </Form>

        {/* Nav Links */}
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
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "10px", padding: "3px 6px" }}
            >
              21
            </span>
          </Nav.Link>

          {/* Dropdown for User */}
          <Dropdown className="ml-2">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-user"
              className="text-light d-flex flex-column align-items-center"
            >
              <img
                src="https://via.placeholder.com/30"
                width="30"
                height="30"
                className="rounded-circle"
                alt="User"
              />
              <small className="ml-2">Tu</small> {/* 'Tu' below the image */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Profilo</Dropdown.Item>
              <Dropdown.Item href="#">Impostazioni</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Esci</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Dropdown for Company */}
          <Dropdown className="ml-3">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-company"
              className="text-light d-flex flex-column align-items-center"
            >
              <Grid size={20} />
              <small>Per le aziende</small>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Gestisci pagina</Dropdown.Item>
              <Dropdown.Item href="#">Strumenti</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>

      {/* Premium Offer */}
      <div className="text-warning text-center" style={{ marginTop: "10px" }}>
        <small>Prova Premium per</small>
        <br />
        <strong>0 EUR</strong>
      </div>
    </Navbar>
  );
};

export default Navigation;

