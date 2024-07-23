import { defer, json, useRouteLoaderData, Await } from "react-router";
import Section from "./Section";
import { Suspense } from "react";
import ProjectDetailLoading from "./Skeleton/ProjectDetailLoading";

export default function ProjectDetail() {
  const { project } = useRouteLoaderData("project-details");

  return (
    <Section>
      <Suspense fallback={<ProjectDetailLoading />}>
        <Await resolve={project}>
          {(project) => (
            <div className="mt-4 flex flex-col-reverse lg:flex-row">
              <div className="flex-1 pr-4">
                <h1 className="text-4xl mb-1">{project.title}</h1>
                <p>{project.short_description}</p>

                <h2 className="mt-4">Details</h2>
                <p className="text-justify">{project.description}</p>
              </div>
              <div className="flex-1 shadow-md h-[400px] 2xl:h-[500px] image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </Section>
  );
}

async function loadProjectDetail(projectId) {
  const response = await fetch(
    // `http://127.0.0.1:8000/api/projects/${projectId}`
    `http://api.birajshrestha.com.np/api/projects/${projectId}`
  );
  if (!response.ok) {
    return "error";
  } else {
    const resData = await response.json();
    return resData.data;
  }
}

export function projectDetailLoader({ request, params }) {
  return defer({
    project: loadProjectDetail(params.id),
  });
}
