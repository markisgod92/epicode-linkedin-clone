import React from "react";
import { Card, Button } from "react-bootstrap";
import { Linkedin } from "lucide-react"; // Importa l'icona da Lucide

const LinkedInAd = () => {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#1c1e21",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      <Card.Body>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <Linkedin size={40} color="#0e76a8" />{" "}
          {/* Icona LinkedIn da Lucide */}
        </div>
        <Card.Title style={{ marginTop: "10px" }}>
          Marco, boost your job search with Premium
        </Card.Title>
        <Card.Text>
          See who’s viewed your profile in the last 90 days.
        </Card.Text>
        <Button
          variant="primary"
          style={{ backgroundColor: "#0073b1", borderColor: "#0073b1" }}
        >
          Try for free!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LinkedInAd;
