import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../Components/ProjectCard';

function Projects({ projects }) {
  return (
    <div>
      <ProjectCard projects={projects}/>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
