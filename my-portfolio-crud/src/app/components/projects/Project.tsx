"use client"
import React, { ChangeEvent, useState,useEffect } from 'react'
import { addProject, deleteProject, getProjects, Projects } from '@/utils/crud'

const Project = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [project, setProject] = useState<Omit<Projects, 'id'>>({
    title : '',
    description : '',
    imageUrl : ''
  })
  const handleChange = (event :ChangeEvent<HTMLInputElement>) =>{
    setProject(prevState => ({
      ...prevState,
      [event.target.name] : event.target.value
    }))
  }
  useEffect(() => {
    setProjects(getProjects());
  }, []);
  const addNewProject = () => {
    const newProject: Projects = { id: projects.length + 1, ...project };
    addProject(newProject);
    setProject({ title: '', description: '', imageUrl: '' }); // Reset the form
    setProjects(getProjects());   
  }
  const handleDeleteProject = (id : number) => {
    deleteProject(id);
    setProjects(getProjects());
  }
  return (
    <>
    <h1>Projects</h1>
    <h2>Add Project</h2>
    <input type="text" name='title' value={project.title} placeholder="title" onChange={handleChange}/>
    <input type="text" name='description' value={project.description} placeholder="description" onChange={handleChange}/>
    <input type="text" name='imageUrl' value={project.imageUrl} placeholder="Image URL" onChange={handleChange}/>
    <button onClick={addNewProject}>Add Project</button>
    {
      projects.map((project)=>{
        return <li key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={()=> handleDeleteProject(project.id)}>Delete</button>
        </li>
      })
    }
    </>
  )
}

export default Project