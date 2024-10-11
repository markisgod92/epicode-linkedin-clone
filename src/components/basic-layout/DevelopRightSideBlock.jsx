import React from "react";
import { Card, Button } from "react-bootstrap";
import { Linkedin, MoreHorizontal } from "lucide-react";

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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#aaa", marginRight: "5px" }}>
            Annuncio
          </span>
          <MoreHorizontal color="#aaa" />
        </div>

        <div
          style={{
            marginBottom: "10px",
            fontSize: "14px",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Marco, boost your job search with Premium
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <Linkedin size={40} color="#0e76a8" />
        </div>

        <Card.Text style={{ textAlign: "center" }}>
          See who’s viewed your profile in the last 90 days.
        </Card.Text>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="primary"
            style={{ backgroundColor: "#0073b1", borderColor: "#0073b1" }}
          >
            Try for free!
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LinkedInAd;
