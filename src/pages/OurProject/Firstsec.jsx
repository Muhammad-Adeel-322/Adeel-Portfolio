// import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Projectcard";
import Particle from "../../pages/Homesec/Particle";
import bird from "../../Assets/Projects/Bird.png";
import water from "../../Assets/Projects/Drik-Water.png";
import contact from "../../Assets/Projects/Contact Manager.png";
import slider from "../../Assets/Projects/Slider.png";



export default function Firstsec() {
  const [show, setShow] = useState(true);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Explore a selection of recent projects I've worked on, with over 100 additional projects available upon request.
        </p>


        <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
        Please note that these projects are temporary examples. In the future, we will showcase more extensive projects, such as e-commerce themes and UI/UX designs.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contact}
              isBlog={false}
              title="Contact Manager"
              description="Description The Contact App is a responsive web application that allows users to manage their contacts efficiently. Users can add, edit, and delete contacts, mark contacts as favorites, and save changes. The app provides a clean and intuitive UI, ensuring a seamless user experience across all devices."
              ghLink="https://github.com/Muhammad-Adeel-322/Contact-App"
              demoLink="https://muhammad-adeel-322.github.io/Contact-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slider}
              isBlog={false}
              title="Draggable-Slider"
              description="A simple project that implements a draggable slider. This slider can be moved by clicking and dragging it with the mouse. The slider's position will update in real-time as you drag it across the screen."
              ghLink="https://muhammad-adeel-322.github.io/Draggable-Slider-React/"
              demoLink="https://github.com/Muhammad-Adeel-322/Draggable-Slider-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Drink-Water-Goal"
              description="Drink Water Goal is an interactive web application designed to help users track their daily water intake. The goal is to drink 2 liters of water each day. The application features 8 small glasses, each representing 250ml. Users can click on these small glasses to incrementally fill the main glass."
              ghLink="https://muhammad-adeel-322.github.io/Drink-Water-Goal/"
              demoLink="https://github.com/Muhammad-Adeel-322/Drink-Water-Goal"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bird}
              isBlog={false}
              title="Find-the-Bird"
              description="Interactive Gameplay: Click the Start button to begin the game. . Random Card Distribution: The bird and cross images are randomly distributed among the 8 cards at the start of each game. . Visual Feedback: Clicking on a card reveals a black box, which then shows either a cross or a bird image. . Winning Alert: An alert is shown when the bird image is found, and the game restarts. . User-Friendly Interface: Simple and intuitive design for easy gameplay. . Responsive Design: The application is designed to work seamlessly across various devices and screen sizes."
              ghLink="https://muhammad-adeel-322.github.io/Find-the-Bird/"
              demoLink="https://github.com/Muhammad-Adeel-322/Find-the-Bird"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}
