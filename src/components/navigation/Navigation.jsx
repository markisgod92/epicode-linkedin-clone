{
  /*import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import {
  LogoLinkedin,
  HomeOutline,
  PeopleOutline,
  BriefcaseOutline,
  ChatbubbleEllipsesOutline,
  NotificationsOutline,
  AppsOutline,
} from "react-ionicons";

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Navbar
      data-testid="nav"
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between sticky-top"
    >
      <Container>
        <Navbar.Brand href="/">
          <LogoLinkedin
            color="#ffffff"
            title="LinkedIn"
            height="30px"
            width="30px"
            data-testid="linkedin-icon"
          />
        </Navbar.Brand>

        <Form className="d-inline-flex flex-grow-1 mx-1">
          <Form.Control
            type="text"
            placeholder="Cerca"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              backgroundColor: "#333",
              borderColor: "#666",
              color: "#fff",
              width: "75%",
            }}
          />
        </Form>

        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#home" className="text-center mx-2">
            <HomeOutline color="#ffffff" height="24px" width="24px" />
            <div>Home</div>
          </Nav.Link>
          <Nav.Link href="#network" className="text-center mx-2">
            <PeopleOutline color="#ffffff" height="24px" width="24px" />
            <div>Rete</div>
          </Nav.Link>
          <Nav.Link href="#jobs" className="text-center mx-2">
            <BriefcaseOutline color="#ffffff" height="24px" width="24px" />
            <div>Lavoro</div>
          </Nav.Link>
          <Nav.Link href="#messaging" className="text-center mx-2">
            <ChatbubbleEllipsesOutline
              color="#ffffff"
              height="24px"
              width="24px"
            />
            <div>Messaggistica</div>
          </Nav.Link>
          <Nav.Link href="#notifications" className="text-center mx-2">
            <NotificationsOutline color="#ffffff" height="24px" width="24px" />
            <div>Notifiche</div>
          </Nav.Link>

          <NavDropdown title="Tu" id="user-dropdown" className="text-white">
            <NavDropdown.Item href="#profile">Profilo</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Impostazioni</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<AppsOutline color="#ffffff" height="24px" width="24px" />}
            id="apps-dropdown"
            className="text-white"
          >
            <NavDropdown.Item href="#app1">App 1</NavDropdown.Item>
            <NavDropdown.Item href="#app2">App 2</NavDropdown.Item>
            <NavDropdown.Item href="#app3">App 3</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#premium" className="text-warning mx-2">
            Prova Premium per 0 EUR
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;*/
}
