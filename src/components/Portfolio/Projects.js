import React, { useState, useRef } from 'react'
import Project from './Project'

const Projects = ({refVal}) => {
    const containerRef = useRef(null)
    const [currentProject, setCurrentProject] = useState(1)

    const handleScroll = () => {
        
        const container = containerRef.current;
      
       
        const projectHeight = container.scrollHeight / 3;
      
       
        const scrollPosition = container.scrollTop;
      
        
        const currentInView = Math.floor(scrollPosition / projectHeight) + 1;
      
      
        setCurrentProject(currentInView);
      }
     
      const scrollToProject = (projectNumber) => {
       
        const projectHeight = containerRef.current.scrollHeight / 3
        const scrollPosition = (projectNumber - 1) * projectHeight
      
        containerRef.current.scrollTo({ top: scrollPosition, behavior: 'smooth' })
        setCurrentProject(projectNumber)
      }
    
      return (
        <div ref={refVal}>
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