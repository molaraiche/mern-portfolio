"use client";
import { useState, useEffect } from "react";
import { getAllProjects } from "@/api/projects";
import Filter from "@/components/Filter";
import ProjectCard from "@/components/ProjectCard";
import SkeletonLoader from "@/components/SkeletonLoader";
import { projectType } from "@/types/project";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<projectType[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<projectType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const projects: projectType[] = await getAllProjects();
        const uniqueCategories = Array.from(
          new Set(
            projects
              .map((p) => p.category)
              .filter((category): category is string => !!category)
          )
        );

        setCategories(uniqueCategories);
        setProjects(projects);
        setFilteredProjects(projects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  return (
    <section className='dark:text-brand-white text-brand-black min-h-[85vh] font-ls'>
      <div>
        <h1 className='display-m tracking-tighter'>Projects</h1>
        <p className='text-lg mt-3 font-quicksand font-medium'>
          Here&apos;s a showcase of all the projects I&apos;ve built since I
          began my journey in this field. Some include source code, while others
          feature live previews. Feel free to reach out if you&apos;d like to
          collaborate and create something amazing together!
        </p>
      </div>

      <Filter
        categories={categories}
        onFilterChange={(category) => setSelectedCategory(category)}
        selectedCategory={selectedCategory}
      />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-24 place-items-center mt-10'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              brief={project.brief}
              path={project.path}
              thumbnail={project.thumbnail}
              category={project.category}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
