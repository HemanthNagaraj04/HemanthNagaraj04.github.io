

const Portfolio = ({projects,onProjectClick}) => {

  return (
    <section
      id="Portfolio"
      className="bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white flex flex-col items-center text-center w-full min-h-screen py-20"
    >
      <h1 className="text-4xl font-bold text-blue-400 mb-12">Portfolio</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black p-6 rounded-2xl transition-transform transform hover:scale-110 hover:shadow-md shadow-blue-400">
            <img src={project.img} alt={`Screenshot of ${project.name}`} className="object-contain rounded-sm" />
            <h2 className="mt-4 text-xl font-semibold">{project.name}</h2>
            <button className="bg-blue-500 rounded-full p-2 mt-4 text-sm font-light cursor-pointer hover:bg-blue-600" onClick={() => onProjectClick(project)}>View More</button>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Portfolio
