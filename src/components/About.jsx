import React from 'react';

const About = () => {
  return (
    <section
      id='About'
      className='w-full min-h-screen bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white flex justify-center items-center px-4'>
      <div className='bg-black max-w-3xl w-full p-10 text-center rounded-3xl shadow-lg'>
        <h1 className='text-3xl font-semibold text-blue-400 mb-6'>About Me</h1>
        <p className='text-base font-light space-y-4'>
          I'm a passionate developer who enjoys building user-friendly websites and applications. Always eager to learn and grow, I combine creativity with technical skills to bring ideas to life.
        </p>
        <p className='text-base font-light mt-4'>
          My recent projects include building applications using React and third-party APIs, such as a dynamic news app and a movie browser.
        </p>
        <p className='text-base font-light mt-4'>
          When I'm not coding, I enjoy photography, traveling, staying fit, and constantly exploring new technologies to keep my skills sharp.
        </p>
      </div>
    </section>
  );
};

export default About;
