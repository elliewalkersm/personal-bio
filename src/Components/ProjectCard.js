import React, { useState } from 'react';
import {
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Card,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from './ProjectForm';
import { deleteProject } from '../helpers/data/projectData';

const ProjectCard = ({
  setProjects,
  projects,
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteProject(projects.id).then((response) => setProjects(response));
        break;
      default:
        console.warn('Nothing Selected');
    }
  };

  return (
    <Card className="project-card">
    <CardBody>
      <CardTitle className="card-title mt-4 mb-3" tag="h5">{projects.title}</CardTitle>
      <CardImg top img-fluid="true" width="100%" src={projects.imageUrl} alt="Card image cap" />
      <CardText className="card-text mb-4" >{projects.description}</CardText>
      <hr></hr>
      <Button project-btn color="primary" size="sm">Deployed Link</Button>
      <Button project-btn color="light" size="sm" onClick={() => handleClick('delete')}><i className="fas fa-trash"></i></Button>
      <Button project-btn color="light" size="sm" onClick={() => handleClick('edit')}>
        { editing ? 'Close Form' : 'Edit Board'}
     </Button>
      {
        editing && <ProjectForm
          formTitle='Edit Project'
          projects={projects}
          setProjects={setProjects}
        />
      }
    </CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
};

export default ProjectCard;
