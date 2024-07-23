import Section from "./Section";
import ProjectDetail from "./ProjectItem";
import { defer, json, useLoaderData, Await } from "react-router";
import { Suspense } from "react";
import SkeletonLoading from "./SkeletonLoading";

export default function Portfolio() {
  const { projects } = useLoaderData();

  return (
    <Section>
      <h1>Portfolio</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5 ">
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
  // const response = await fetch("http://127.0.0.1:8000/api/projects");
  const response = await fetch("http://api.birajshrestha.com.np/api/projects");
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.data;
  }
}

export function portfolioLoaders() {
  return defer({
    projects: loadProjects(),
  });
}
