import { Link } from "react-router-dom";

export default function ProjectItem({ project }) {
  console.log(project);
  return (
    <Link to={`${project.id}`}>
      <div className="w-[350px] shadow-lg rounded cursor-pointer">
        <div className="h-[220px]">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[200px] p-2">
          <h2 className="font-bold text-center">{project.title}</h2>
          <p className="text-justify">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
