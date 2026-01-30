import SplitText from './Animations/SplitText'
import Photo3 from "../assets/Photo3.jpeg"
import Photo6 from "../assets/Photo6.jpeg"
import Photo4 from "../assets/Photo4.jpeg"
import Photo2 from "../assets/Photo2.jpeg"
import Stack from './Animations/Stack'
import BlurText from './Animations/BlurText'
import AnimatedContent from './Animations/AnimatedContents'
import ElectricBorder from './Animations/ElectricBorder'
import { GoDownload } from "react-icons/go";


const images = [Photo3,Photo4,Photo2,Photo6];

export default function About() {
  

  return (
    <section
      id="about"
      className="pt-20 lg:scroll-mt-10 w-full min-h-fit flex flex-col items-center mb-8"
    > 
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1}
      ease="power3.out"
      initialOpacity={0.1}
      animateOpacity
      scale={0.6}
      threshold={0.4}
      delay={0.1}
    >
      <h1 className='pb-10 flex flex-col items-center '>
        <SplitText
        text="About Me"
        className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center font-roboto"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      </h1>
      

      <div className="wrapper flex flex-col items-center justify-between lg:flex-row md:flex-row lg:justify-between gap-5 md:gap-7 w-xs lg:w-5xl md:w-2xl ">

        <div className = "lg:w-120 lg:h-130 md:w-80 md:h-100 w-50 h-50 border-none flex flex-col items-center">
          <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`card-${i + 1}`} 
              className='lg:h-xl w-xs md:w-4/5 md:h-4/5 sm:h-5/5 sm:w-4/5'
            />
          ))}
        />
        </div> 


        <div className="lg:h-110 md:h-100 h-fit lg:w-2xl md:w-sm w-xs bg-black/30 border-black shadow-blue-300 shadow-md rounded-lg lg:s lg:px-10 lg:py-15 md:px-8 md:py-12 px-5 py-8 ">
          <BlurText
          text="I am a Informatics Engineering graduate from Sriwijaya University with a deep passion for web development and digital innovation. Driven by curiosity and a commitment to continuous learning, I strive to expand my skills and stay ahead in the ever-evolving digital landscape."
          delay={80}
          animateBy="words"
          direction="top"
          className="lg:text-lg md:text-sm sm:text-xs font-roboto mb-5 whitespace-pre-line"
          
        />
        
          <BlurText
          text="I aim to build a professional career in digital technology, creating impactful solutions and contributing to projects that make a real difference."
          delay={200}
          animateBy="words"
          direction="top"
          className="lg:text-lg md:text-sm sm:text-xs font-roboto mb-5 whitespace-pre-line"
          
        /> 
        <div className="w-full flex justify-center">
              <div className='w-fit hover:text-violet-400 hover:cursor-pointer '>
              <ElectricBorder
                color="#4a2197"
                speed={0.6}
                chaos={0.2}
                thickness={3}
                style={{ borderRadius: 4 }}
              > 
                <a className="cursor-pointer p-2 rounded-lg w-fit flex items-center gap-1 "href="https://drive.usercontent.google.com/u/0/uc?id=1WP0tysQoLK_1Q1ygeuOoK2lPKi-qxWPu&export=download" download="CV_Muhammad Reyhan Zanzabili.pdf" target='blank'>
                  <button className='lg:text-base md:text-sm sm:text-xs m-1' >
                  Download CV
                  </button>
                  <GoDownload/>
                </a>

              </ElectricBorder>
            </div>
        </div>
      
        </div>
        



        
      </div>
      </AnimatedContent>
    </section>
  );
}
