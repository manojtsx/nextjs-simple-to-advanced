"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import { addProject, deleteProject, getProjects, getTotalProjectsLength, Projects } from '@/utils/crud'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const PAGE_SIZE = 5;

const Project = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalProjectsLength = getTotalProjectsLength();
  const totalPages = Math.ceil(totalProjectsLength/PAGE_SIZE);
  const [projects, setProjects] = useState<Projects[]>([])
  const [project, setProject] = useState<Omit<Projects, 'id'>>({
    title: '',
    description: '',
    imageUrl: ''
  })
  useEffect(() => {
    fetchProjects();
  }, [currentPage]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProject(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  const fetchProjects = async () => {
  setIsLoading(true);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const projects = await getProjects(startIndex, PAGE_SIZE);
  setProjects(projects);
  setIsLoading(false);
}

// ...

const handlePageChange = (pageNumber: number) => {
  console.log('Changing page to', pageNumber);
  setCurrentPage(pageNumber);
}
  const addNewProject = async () => {
    const newProject: Projects = { id: totalProjectsLength + 1, ...project };
    const updatedProjects = await addProject(newProject);
    setProject({ title: '', description: '', imageUrl: '' });
    if (updatedProjects) {
      setProjects(updatedProjects);
    }
  }
  const handleEditProject = (id : number) =>{
    router.push(`/update_project/${id}`);
  }
  const handleDeleteProject = async (id: number) => {
    console.log(id)
    await deleteProject(id);
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    fetchProjects(); // Refresh projects list
  }
  return (
    <>
      <h1>Projects</h1>
      <h2>Add Project</h2>
      <input type="text" name='title' value={project.title} placeholder="title" onChange={handleChange} />
      <input type="text" name='description' value={project.description} placeholder="description" onChange={handleChange} />
      <input type="text" name='imageUrl' value={project.imageUrl} placeholder="Image URL" onChange={handleChange} />
      <button onClick={addNewProject}>Add Project</button>
      {
        isLoading ? <p>Loading...</p> : 
        projects.map((project) => {
          return <li key={project.id}>
            <Image src={project.imageUrl} alt={project.title} width={32} height={32}/>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => handleEditProject(project.id)}>Edit</button>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </li>
        })
      }
        <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </>
  )
}

export default Project