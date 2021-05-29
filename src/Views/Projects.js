import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../Components/ProjectCard';

function Projects({ projects, admin, setProjects }) {
  return projects.map((project) => (
    <div key={project.id}>
      <ProjectCard
         project={project}
        admin={admin}
        setProjects={setProjects}/>
    </div>
  ));
}

Projects.propTypes = {
  projects: PropTypes.array,
  admin: PropTypes.any,
  setProjects: PropTypes.func,
};

export default Projects;
