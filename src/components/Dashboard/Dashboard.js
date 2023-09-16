import React from 'react'
import Timeline from '../Timeline'

const projects = [
    { name: 'Project 1', position: 0 },
    { name: 'Project 2', position: 500 },
    { name: 'Project 3', position: 1000 },
    // Add more projects and positions as needed
  ]


function Dashboard() {
  return (
    <div>
        <Timeline projects={projects} />
    </div>
  )
}

export default Dashboard