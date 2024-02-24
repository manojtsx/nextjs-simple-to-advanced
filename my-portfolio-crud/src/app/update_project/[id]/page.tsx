"use client"
import { Projects, getProjectById, getProjects, updateProject } from "@/utils/crud";
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({params} : {params  : {id : string}}) {
    const router = useRouter();
    const [project, setProject] = useState<Projects>({
        id:0,
        title : "",
        description : "",
        imageUrl : ""
    })
    useEffect(()=>{
       const fetchedProject = getProjectById(Number(params.id));
       if(fetchedProject){
        setProject(fetchedProject);
        }
    },[params.id]);
    const handleChange = (event : ChangeEvent<HTMLInputElement>) =>{
        setProject(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    const editProject = (id : number) =>{
        updateProject(id, project);
        router.push("/projects");
    }
    return (
        <div>

            <h1>Projects</h1>
            <h2>Edit Project</h2>
            <input type="text" name='title' value={project.title} placeholder="title" onChange={handleChange} />
            <input type="text" name='description' value={project.description} placeholder="description" onChange={handleChange} />
            <input type="text" name='imageUrl' value={project.imageUrl} placeholder="Image URL" onChange={handleChange} />
            <button onClick={()=>{editProject(Number(params.id))}}>Edit Project</button>
        </div>
    )
}