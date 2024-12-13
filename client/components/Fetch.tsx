import { getAllProjects } from "@/api/projects";

const FetchProjects = async () => {
  return await getAllProjects();
};

export default FetchProjects;
