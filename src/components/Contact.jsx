import AnimatedContent from "./Animations/AnimatedContents";
import { FaInstagram, FaWhatsapp, FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Contact() {
  return (
    <section
      id="contact"
      className="lg:scroll-mt-32 md:scroll-mt-32 mt-20 flex flex-col justify-center items-center min-h-fit mb-10"
    >
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.6}
        ease="power3.out"
        initialOpacity={0.1}
        animateOpacity
        scale={0.6}
        threshold={0.1}
        delay={0.4}
         >

        <div className="wrapper w-xs flex flex-col items-left justify-evenly inset-shadow-md inset-shadow-indigo-600/20 rounded-lg p-4 lg:w-fit lg:flex lg:justify-evenly bg-black/30">

          <div className="first-sec p-3 flex flex-col justify-evenly">
            <h1 className="text-lg lg:text-3xl font-bold font-roboto mb-4 lg:text-center">
              Get In Touch
            </h1>
            <span className="text-sm text-white/50 max-w-sm">
              You can get in touch and connect with me through my Email, Social Media, Linkedin, or WhatsApp below
            </span>
            <div className="contacts flex flex-col items-left justify-evenly gap-1 pt-2">
              <div className="item1 flex gap-2 cursor-pointer pl-2">
                <span className="flex flex-col justify-center pt-1 text-green-400"><FaWhatsapp /></span>
                <a href="https://wa.me/+6289508118641" className=" underline lg:hover:text-blue-400 text-sm">+62 89508118641</a>
              </div>
              <div className="item2 flex gap-2 cursor-pointer pl-2">
                <span className="flex flex-col justify-center pt-1 text-pink-300"><FaInstagram /></span>
                <a href="https://www.instagram.com/reyhan_billy" className="hover:text-blue-400 text-sm">reyhan_billy</a>
              </div>
              <div className="item3 flex gap-2 cursor-pointer pl-2">
                <span className="flex flex-col justify-center pt-1 text-red-400"><SiGmail /></span>
                <a href="" className="text-sm">raihanzanzabili@gmail.com</a>
              </div>
              <div className="item3 flex gap-2 cursor-pointer pl-2">
                <span className="flex flex-col justify-center pt-1 text-blue-400"><FaLinkedin /></span>
                <a href="https://www.linkedin.com/in/muhammad-reyhan-zanzabili/" className="hover:text-blue-400 text-sm">Muhammad Reyhan Zanzabili</a>
              </div>
            </div>
          </div>

        </div>

      </AnimatedContent>
      
    </section>
  );
}
