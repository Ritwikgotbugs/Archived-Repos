import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";


export const About = () => {
  return (
    <section className="p-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h1 className="font-mono">ABOUT ME</h1>
        <h1 className="text-4xl font-bold leading-relaxed">
        I&apos;m Ritwik, a
      </h1> 
      <h1 className="text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
          Full Stack Developer 
        </span>
      </h1>

        <p className="text-lg leading-relaxed">
          who also dabbles in app development sometimes. Currently in my pre-final year,
          I&apos;m all about turning creative ideas into real, working projects. I love the challenge of building things from scratch,
          and something which could potentially help a million of us!
        </p>
        <div className="flex flex-row gap-x-2 mt-10 mb-10">
          <FaGithub size={25} onClick={()=> window.open('https://www.github.com/Ritwikgotbugs')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <FaLinkedin size={25} onClick={()=> window.open('https://www.linkedin.com/in/ritwik-sharma-8714b4221/')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <FaInstagram size={25} onClick={()=> window.open('https://www.instagram.com/ritwikksharma_/')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <BsTwitterX size={25} onClick={()=> window.open('https://x.com/Ritwikshar')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <TfiEmail size={25} onClick={()=> window.open('mailto:ritwiksharma.tech@gmail.com')} className='transform transition-transform hover:-translate-y-1 cursor-pointer' />
        </div>
      </div>
          <div className="md:w-1/2 flex justify-center relative group rounded-full">
      <img
        src="/assets/avatar-2.jpg"
        alt="About Me"
        className="rounded-full w-full max-w-sm transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:blur-sm group-hover:grayscale"
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
        <div className="bg-[url('/assets/bg-blur.jpg')] bg-cover bg-center opacity-97 border-2 border-slate-700 rounded-xl p-6 text-center w-2/3 h-1/2">
            <div className="flex flex-col justify-between">
              <BiSolidQuoteLeft size={30}/>
              <div className="flex justify-center items-center text-xl my-5 bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">The airplane takes off against the wind.</div>
              <div className="flex justify-end">- Henry Ford</div>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};
