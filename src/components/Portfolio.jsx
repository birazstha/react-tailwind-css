import Section from "./Section";
import ProjectDetail from "./ProjectItem";
import { defer, json, useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import SkeletonLoading from "./SkeletonLoading";
import axios from "axios";

export default function Portfolio() {
  const { projects } = useLoaderData();

  return (
    <Section>
      <h1>Portfolio</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5">
        <Suspense fallback={<SkeletonLoading count="5" />}>
          <Await resolve={projects}>
            {(projects) =>
              projects.map((project) => (
                <ProjectDetail key={project.id} project={project} />
              ))
            }
          </Await>
        </Suspense>
      </div>
    </Section>
  );
}

async function loadProjects() {
  try {
    // const response = await axios.get("http://127.0.0.1:8000/api/projects");
    const response = await axios.get(
      "http://api.birajshrestha.com.np/api/projects"
    );

    console.log(response);

    return response.data.data;
  } catch (error) {
    throw new Error("Server Error");
  }
}

export function portfolioLoaders() {
  return defer({
    projects: loadProjects(),
  });
}
