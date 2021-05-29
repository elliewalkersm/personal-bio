import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg,
  CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from './ProjectForm';
import { deleteProject } from '../helpers/data/projectData';

const ProjectCard = ({ project, setProjects, admin }) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (fbKey, type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteProject(fbKey).then(setProjects);
        break;
      default:
        console.warn('Nothing Selected');
    }
  };

  const EditCard = (fbKey) => (
    <>
      <Button
        color='light'
        size='sm'
        onClick={() => handleClick(fbKey, 'delete')}
      >
        <i className='fas fa-trash'></i>
      </Button>
      <Button
        color='light'
        size='sm'
        onClick={() => handleClick(fbKey, 'edit')}
      >
        {editing ? 'Close Form' : 'Edit Project'}
      </Button>
      {editing && (
        <ProjectForm
          formTitle='Edit Project'
          project={project}
          setProjects={setProjects}
        />
      )}
    </>
  );

  return (
    <Card className='project-card' key={project.id}>
      <CardBody>
        <CardTitle className='card-title mt-4 mb-3' tag='h2'>
          {project.title}
        </CardTitle>
        <CardImg
          top
          img-fluid='true'
          width='100%'
          src={project.imageUrl}
          alt='Card image cap'
        />
        <CardText className='card-text mb-4'>{project.description}</CardText>
        <hr className="break"></hr>
        <div className='project-links'>
          <a href={project.deployedLink}>Deployed Link</a>
          <a className='github-link' href={project.githubLink}>
            Github Link
          </a>
          {admin ? EditCard(project.id) : ''}
        </div>
      </CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
  setProjects: PropTypes.func,
  admin: PropTypes.any,
};

export default ProjectCard;
