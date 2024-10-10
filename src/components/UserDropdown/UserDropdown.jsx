import { Dropdown, Button } from "react-bootstrap";
import "./UserDropdown.css"; // Puoi spostare il CSS specifico in un file separato

const UserDropdown = () => {
  return (
    <Dropdown className="ml-2 user-dropdown">
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
        style={{ border: "1px solid #333" }}
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

        <Dropdown.ItemText className="text-light" style={{ fontSize: "12px" }}>
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

        <Dropdown.ItemText className="text-light" style={{ fontSize: "12px" }}>
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
  );
};

export default UserDropdown;
