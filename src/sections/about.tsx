import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const About = () => {
  return (
    <section className="p-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h1 className="font-mono">ABOUT ME</h1>
        <h1 className="text-4xl font-bold leading-relaxed">
        I'm Ritwik, a
      </h1> 
      <h1 className="text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
          Full Stack Developer 
        </span>
      </h1>

        <p className="text-lg leading-relaxed">
          who also dabbles in app development sometimes. Currently in my pre-final year,
          I’m all about turning creative ideas into real, working projects. I love the challenge of building things from scratch,
          and something which could potentially help a million of us!
        </p>
        <div className="flex flex-row gap-x-2 mt-10 mb-10">
          <FaGithub size={25} onClick={()=> window.open('https://www.github.com/Ritwikgotbugs')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <FaLinkedin size={25} onClick={()=> window.open('https://www.linkedin.com/in/ritwik-sharma-8714b4221/')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <FaInstagram size={25} onClick={()=> window.open('https://www.instagram.com/ritwikksharma_/')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <BsTwitterX size={25} onClick={()=> window.open('https://x.com/Ritwikshar')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/assets/Ritwik.jpg"
          alt="About Me"
          className="rounded-sm w-full max-w-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      <div>
        
      </div>
    </section>
  );
};
