import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addProject, updateProject } from '../helpers/data/projectData';

function ProjectForm({
  formTitle,
  project,
  setProjects
}) {
  const [projectInput, setProjectInput] = useState({
    title: project?.title || '',
    imageUrl: project?.imageUrl || '',
    description: project?.description || '',
    firebaseKey: project?.firebaseKey || null,
    deployedLink: project?.deployedLink || '',
    githubLink: project?.githubLink || ''
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    setProjectInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectInput.firebaseKey) {
      updateProject(projectInput).then((projectsArray) => {
        setProjectInput(projectsArray);
        history.push('/projects');
      });
    } else {
      addProject(projectInput).then((response) => {
        setProjects(response);
        history.push('/projects');
      });
    }
  };

  return (
    <div className="project-form-container mt-5">
      <Form
        className='project-input-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <Label></Label>
        <Input
          name='title'
          type='text'
          placeholder='Project Title'
          value={projectInput.title}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='imageUrl'
          type='text'
          placeholder='Image URL'
          value={projectInput.imageUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='description'
          type='text'
          placeholder='Project Description'
          value={projectInput.description}
          onChange={handleInputChange}>
        </Input>
        <Label></Label>
        <Input
          name='deployedLink'
          type='url'
          placeholder='Project deployedLink'
          value={projectInput.deployedLink}
          onChange={handleInputChange}
        ></Input>
        <Label></Label>
        <Input
          name='githubLink'
          type='url'
          placeholder='Project githubLink'
          value={projectInput.githubLink}
          onChange={handleInputChange}
        ></Input>
        <Button className="project-form-submit-btn mt-4" color='success' size="sm" type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  project: PropTypes.object
};

export default ProjectForm;
