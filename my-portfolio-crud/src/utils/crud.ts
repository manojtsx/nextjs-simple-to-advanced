import { projects } from "@/app/placeholder/data";

export interface Projects {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
// Read the data from the projects
export const getProjects = (page : number , pageSize : number) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return projects.slice(startIndex, pageSize);
};
export const getTotalProjectsLength = () =>{
  return projects.length;
}
export const getProjectById = (id: number) => {
  return projects.find((project) => project.id === id);
};

export const addProject = (project: Projects) => {
  try {
    projects.push(project);
    return projects;
  } catch (error: any) {
    console.log("ERROR", error.message);
  }
};

export const updateProject = (id: number, updatedProject: Projects) => {
  const index = projects.findIndex((project) => project.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...updatedProject };
  }
};
export const deleteProject = (id: number) => {
  const index = projects.findIndex((project) => project.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
  }
  return projects;
};
