import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import { LiaHtml5 } from "react-icons/lia";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { BsFiletypeJsx } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

export default function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <LiaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <RiTailwindCssFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeJsx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaNpm />
      </Col>
    </Row>
  );
}
