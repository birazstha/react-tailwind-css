import Section from "./Section";
import { projects } from "../projects";
import ProjectDetail from "./ProjectDetail";

export default function Portfolio() {
  return (
    <Section>
      <h1>Portfolio</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-5 ">
        {projects.map((project) => (
          <ProjectDetail project={project} />
        ))}
      </div>
    </Section>
  );
}
