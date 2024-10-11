import { Container, Form, Nav, Navbar } from "react-bootstrap";
import {
  Search,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Linkedin,
} from "lucide-react";
import "./Navigation.css";
import UserDropdown from "../UserDropdown/UserDropdown";
import CompanyDropdown from "../CompanyDropdown/CompanyDropdown";
import { useState } from "react";

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
    >
      <Container className="d-flex align-items-center">
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center navbar-brand"
        >
          <Linkedin />
        </Navbar.Brand>

        <Form className="form-inline-flex">
          <Form.Control
            type="text"
            placeholder="Cerca"
            className="form-control"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Search className="search-icon" size={12} />
        </Form>

        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="#" className="nav-link">
            <Home size={20} />
            <small>Home</small>
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            <Users size={20} />
            <small>Rete</small>
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            <Briefcase size={20} />
            <small>Lavoro</small>
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            <MessageSquare size={20} />
            <small>Messaggi</small>
          </Nav.Link>

          <Nav.Link href="#" className="nav-link position-relative">
            <Bell size={20} />
            <small>Notifiche</small>
            <span className="notification-badge">21</span>
          </Nav.Link>

          <UserDropdown />

          <div className="user-dropdown-divider"></div>

          <CompanyDropdown />

          <div className="premium-offer">
            <small>Prova Premium per</small>
            <br />
            <strong>0 EUR</strong>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
