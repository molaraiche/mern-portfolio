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
export async function getProjectById(id: string) {
  const response = await axios.get(
    `https://api.molaraiche.com/api/projects/id/${id}`
  );
  return response.data.project;
}
export async function getAllMails() {
  const response = await axios.get(
    "https://api.molaraiche.com/api/contact/allMails"
  );
  return response.data.response;
}

export async function getBlogs() {
  const response = await axios.get(
    "https://api.molaraiche.com/api/blogs/allBlogs"
  );
  return response.data.Blogs;
}
export async function getBlogByPath(path: string) {
  const response = await axios.get(
    `https://api.molaraiche.com/api/blogs/${path}`
  );
  return response.data.blog;
}
