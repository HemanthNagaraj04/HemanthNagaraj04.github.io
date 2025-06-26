import { FaGithub } from "react-icons/fa";
import { TbBrowserMaximize } from "react-icons/tb";

const ProjectDisplay = ({ project, onClose }) => {
     const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
    onClick={handleOverlayClick}>
      <div className="bg-[#0d1117] rounded-xl shadow-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold hover:text-red-500 cursor-pointer">
          &times;
        </button>
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">{project.name}</h2>
        <img
          src={project.img}
          alt={project.name}
          className="rounded-lg mb-4 w-full max-h-[300px] object-cover"
        />
        <p className="text-white text-sm leading-relaxed">{project.description}</p>
        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex gap-2"
          >
            <FaGithub size={24}/><p>GitHub</p>
          </a>
          <a
            href={project.web}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex gap-2"
          >
            <TbBrowserMaximize size={24}/><p>Website</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
