import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../Components/ProjectCard';

export default function Projects({ projects }) {
  console.warn(projects);

  return (
    <div>
      <ProjectCard projects={projects}/>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array
};
