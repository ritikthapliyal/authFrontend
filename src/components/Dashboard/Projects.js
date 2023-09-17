import React, { useState, useRef } from 'react'
import Project from './Project'

const Projects = () => {
    const containerRef = useRef(null)
    const [currentProject, setCurrentProject] = useState(1)

    const handleScroll = () => {
        // Get a reference to the container element
        const container = containerRef.current;
      
        // Calculate the height of a single project element
        const projectHeight = container.scrollHeight / 3; // Assuming 3 projects
      
        // Calculate the current scroll position within the container
        const scrollPosition = container.scrollTop;
      
        // Calculate which project is currently in view based on the scroll position
        const currentInView = Math.floor(scrollPosition / projectHeight) + 1;
      
        // Update the state to reflect the current project in view
        setCurrentProject(currentInView);
      }
     
      const scrollToProject = (projectNumber) => {
        // Calculate the scroll position to bring the selected project into view
        const projectHeight = containerRef.current.scrollHeight / 3; // Assuming 3 projects
        const scrollPosition = (projectNumber - 1) * projectHeight;
    
        // Scroll the container to the calculated position
        containerRef.current.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    
        // Update the current project in state
        setCurrentProject(projectNumber);
      };
    
      return (
        <div>
          <p>Current Project: {currentProject}</p>
          <div onScroll={handleScroll} ref={containerRef} id="container" style={{ height: '90vh', overflow: 'auto' }}>
            <Project projectNumber={1} containerRef={containerRef} setCurrentProject={setCurrentProject} />
            <Project projectNumber={2} containerRef={containerRef} setCurrentProject={setCurrentProject} />
            <Project projectNumber={3} containerRef={containerRef} setCurrentProject={setCurrentProject} />
          </div>
          <div>
            {/* Buttons to navigate to specific projects */}
            <button onClick={() => scrollToProject(1)}>Project 1</button>
            <button onClick={() => scrollToProject(2)}>Project 2</button>
            <button onClick={() => scrollToProject(3)}>Project 3</button>
          </div>
        </div>
      );
    };
    
    export default Projects;