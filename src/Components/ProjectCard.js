import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  imageUrl,
  description,
  setProject
}) => {

  return (
    <Card body>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardImg src={imageUrl}/>
      <CardText>{description}</CardText>
      <Button color="primary">Deployed Link</Button>
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setProject: PropTypes.func
};

export default ProjectCard;
