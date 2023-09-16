// src/components/Timeline.js
import React, { useEffect, useState } from 'react';

const Timeline = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const highlightedProject = projects.find(
        (project) => scrollPosition >= project.position
      );

      if (highlightedProject) {
        setCurrentProject(highlightedProject);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projects]);

  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <ul>
        {projects.map((project) => (
          <li
            key={project.name}
            className={currentProject === project ? 'highlighted' : ''}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
