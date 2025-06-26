import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white flex flex-col items-center text-center w-full min-h-screen py-20"
    >
      <h1 className="text-4xl font-bold text-blue-400 mb-12">Get In Touch</h1>

      <div className="flex flex-col bg-black w-full max-w-xl p-6 rounded-2xl shadow-md">
        <p className="mb-4">
          I'm currently available for new opportunities. If you have a project in mind or just want to say hello, feel free to reach out directly:
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:hemanthnagaraj2004@gmail.com"
            className="text-blue-400 underline hover:text-blue-500"
          >
            hemanthnagaraj2004@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-white">
          <a
            href="https://github.com/HemanthNagaraj04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub size={30}/>
          </a>
          <a
            href="https://www.linkedin.com/in/hemanth-nagaraj04/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={30}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
