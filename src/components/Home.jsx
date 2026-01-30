import BlurText from "./Animations/BlurText";
import DecayCard from './Animations/DecayCard';
import Photo8 from "../assets/Photo13.jpeg"
import ScrollVelocity from "./Animations/ScrollVelocity"
import { FaInstagram, FaWhatsapp, FaLinkedin  } from "react-icons/fa";
import AnimatedContent from "./Animations/AnimatedContents";


export default function Home() {


  return (
    
    <section
      id="home"
      className="lg:scroll-mt-32 w-full min-h-fit flex flex-col items-center gap-3 "
    >
    <AnimatedContent
      distance={100}
      direction="horizontal"
      reverse={false}
      duration={0.6}
      ease="power3.out"
      initialOpacity={0.1}
      animateOpacity
      scale={0.6}
      threshold={0.1}
      delay={0.4}
    >

        <div className = "mb-4 flex justify-center">
            <DecayCard width={300} height={400} image ={Photo8} className="rounded-lg shadow-lg ">
            </DecayCard>
        </div> 
        <div className="flex flex-col items-center">
          <span className="lg:text-5xl text-xl text-center font-semibold bg-linear-to-r from-pink-300 via-purple-300 to-sky-300 
          bg-clip-text animate-pulse text-transparent font-roboto 
          drop-shadow-[0_0_15px_rgba(255,150,255,0.15)]
          ">
          MUHAMMAD REYHAN ZANZABILI
            </span>
        </div>
        

        <h2 className="lg:text-2xl text-sm text-center mt-2  font-roboto">
            WEB DEVELOPER | PROGRAMMER | MACHINE LEARNING
        </h2>

        <div className="wrapper w-full flex justify-center pt-2">
          <div className="social flex justify-evenly gap-3 text-3xl">
            <a href="https://www.instagram.com/reyhan_billy" className="rounded-xl p-1 ring-2 ring-gray-300/50 cursor-pointer lg:opacity-50 lg:hover:opacity-100 lg:transition-opacity duration-300 ease-in-out text-pink-300">
            <FaInstagram></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-reyhan-zanzabili/" className="rounded-xl p-1 ring-2 ring-gray-300/50 cursor-pointer lg:opacity-50 lg:hover:opacity-100 lg:transition-opacity duration-300 ease-in-out text-blue-400">
            <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://wa.me/+6289508118641" className="rounded-xl p-1 ring-2 ring-gray-300/50 cursor-pointer lg:opacity-50 lg:hover:opacity-100 lg:transition-opacity duration-300 ease-in-out text-green-400">
            <FaWhatsapp></FaWhatsapp>
            </a>
          </div>
         
        </div>
        <div className="BlurText">
            <BlurText
            text="This Portofolio Website Is Made Using ReactJS, Vite, TailwindCSS"
            delay={300}
            animateBy="words"
            direction="top"
            className="lg:text-xl sm:text-xs justify-center mt-6 opacity-50 font-roboto"
            />
        </div>

        <div className="pb-20 w-screen lg:w-6xl md:w-xl ">
            <ScrollVelocity
            texts={['Web Development', 'About Me']} 
            velocity={100} 
            className="lg:text-6xl md:text-3xl text-xl font-bitcount"
          />
        </div>

      </AnimatedContent>

    </section>
  );
}
