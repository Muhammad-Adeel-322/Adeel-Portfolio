import React from 'react'
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { FaFirefox } from "react-icons/fa";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaChrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFirefox />
      </Col>
    </Row>
  );
}
