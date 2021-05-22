import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({ projects }) => {
  console.warn(projects);
  return (
    projects.map((project) => (
      <Card key={project.firebaseKey}>
        <CardTitle tag="h5">{project.title}</CardTitle>
        <CardImg src={project.imageUrl}/>
        <CardText>{project.description}</CardText>
        <Button color="primary">Deployed Link</Button>
      </Card>
    ))
  );
};

ProjectCard.propTypes = {
  projects: PropTypes.array
};

export default ProjectCard;
