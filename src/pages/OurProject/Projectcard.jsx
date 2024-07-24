import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

export default function ProjectCard(props) {
  const { imgPath, title, description, ghLink, isBlog, demoLink } = props;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {isBlog ? 'Blog' : 'GitHub'}
        </Button>
        {"\n"}
        {"\n"}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: '10px' }}
          >
            <CgWebsite /> &nbsp;
            {'Demo'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
