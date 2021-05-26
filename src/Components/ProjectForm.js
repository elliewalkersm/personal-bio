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
  projects,
  setProjects
}) {
  const [project, setProject] = useState({
    title: projects?.title || '',
    imageUrl: projects?.imageUrl || '',
    description: projects?.description || '',
    id: projects?.id || null
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.id) {
      updateProject(project).then((projectsArray) => {
        setProjects(projectsArray);
        history.push('/projects');
      });
    } else {
      addProject(project).then((response) => {
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
          value={project.title}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='imageUrl'
          type='text'
          placeholder='Image URL'
          value={project.imageUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label></Label>
        <Input
          name='description'
          type='text'
          placeholder='Project Description'
          value={project.description}
          onChange={handleInputChange}>
        </Input>
        <Button className="project-form-submit-btn mt-4" color='success' size="sm" type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default ProjectForm;
