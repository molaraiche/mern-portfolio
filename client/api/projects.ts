import axios from "axios";
export async function getAllProjects() {
  const response = await axios.get(
    "https://api.molaraiche.com/api/projects/allProjects"
  );
  return response.data.Projects;
}

export async function getProjectByPath(path: string) {
  const response = await axios.get(
    `https://api.molaraiche.com/api/projects/path/${path}`
  );
  return response.data.project;
}
