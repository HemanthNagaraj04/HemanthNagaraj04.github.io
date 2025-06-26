import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={100} color="orange" /> },
  { name: "CSS", icon: <FaCss3Alt size={100} color="skyblue" /> },
  { name: "JavaScript", icon: <FaJs size={100} color="yellow" /> },
  { name: "React", icon: <FaReact size={100} color="skyblue" /> },
  { name: "Node.js", icon: <FaJava size={100} color="red" /> },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white flex flex-col items-center text-center w-full min-h-screen py-20">
      <h1 className="text-4xl font-bold text-blue-400 mb-12">My Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black p-6 rounded-2xl transition-transform transform hover:scale-110 hover:shadow-md shadow-blue-400">
            {skill.icon}
            <h2 className="mt-4 text-2xl font-medium">{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
