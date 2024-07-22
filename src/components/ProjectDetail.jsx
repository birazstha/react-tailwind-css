export default function ProjectDetail({ project }) {
  console.log(project);
  return (
    <div className="w-[350px] shadow-lg rounded">
      <div className="h-[220px]">
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[150px] p-2">
        <h2 className="font-bold text-center">{project.title}</h2>
        <p className="text-justify">{project.description}</p>
      </div>
    </div>
  );
}
