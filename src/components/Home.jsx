import TypeWriter from "typewriter-effect"

const Home = () => {
    return (
        <div>
            <section
                id='Home'
                className='bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white flex flex-col gap-4 items-center justify-center text-center w-full h-screen'>
                <h1 className="text-6xl font-bold">Hi, I'm Hemanth Nagaraj</h1>
                <h2 className="text-3xl text-gray-400 flex gap-1 font-medium">
                    An
                    <span className="text-blue-400 ">
                        <TypeWriter options={{
                            strings: [" Enthusiastic", " Passionate", " Innovative"],
                            autoStart: true,
                            loop: true
                        }} />
                    </span>
                    Developer
                </h2>
                <a
                    href="#Portfolio"
                    className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    View My Work
                </a>

            </section>
        </div>
    );
};

export default Home;
