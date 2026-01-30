import AnimatedContent from "./Animations/AnimatedContents";
import Photo8 from "../assets/Photo8.png"
import Photo9 from "../assets/Photo9.png"
import Photo10 from "../assets/Photo10.png"
import Photo11 from "../assets/Photo11.png"
import Photo12 from "../assets/Photo12.png"
import Card from "./Animations/Card";
import LogoLoop from './Animations/LogoLoop';
import { SiReact, SiTailwindcss, SiJavascript, SiPhp, SiMysql, SiPython } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript />, title: "JavaScript", href: "/" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="lg:scroll-mt-32 md:scroll-mt-32 mt-32 flex flex-col items-center min-h-fit"
    >
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1.0}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.5}
        delay={0.1}
        className="wrapper h-fit mb-4"
    >

      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold font-roboto mb-6">
        Projects & Skills
      </h1>
      <div className="wrapper w-xs h-fit md:w-2xl lg:w-fit grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center lg:place-items-center">

        <Card
        image={Photo9}
        title="Sistem Manajemen Aset Kantor Dinas Koperasi dan UMKM Kota Palembang"
        description="Website berbasis Laravel, PHP, MySQL, dan JavaScript yang saya bangun saat Magang Kerja Praktik di Kantor Dinas Koperasi dan UMKM Kota Palembang"
        tech={["Laravel", "PHP", "MySQL", "JavaScript","Bootstrap"]}
        ></Card>

        <Card
        image={Photo8}
        title="Website Pengaduan"
        description="Website berbasis CodeIgniter 4 yang saya bangun untuk tugas akhir mahasiswi dari suatu universitas di Kota Palembang sebagai freelancer."
        tech={["CodeIgniter", "PHP", "MySQL","Bootstrap"]}
        ></Card>

        <Card
        image={Photo12}
        title="Analisis Sentimen Tiktok Shop metode SVM+PSO"
        description="Aplikasi untuk menganalisis sentimen mengenai Tiktok Shop dengan data yang di Scraping dari Twitter. Ini adalah aplikasi yang saya bangun untuk Skripsi saya"
        tech={["Python", "Jupyter", "Streamlit"]}
        ></Card>

        <Card
        image={Photo11}
        title="Aplikasi Absensi Wajah Mahasiswa Unsri Informatika 2020"
        description="Aplikasi absensi wajah otomatis menggunakan metode CNN. Saya dan rekan saya membangun aplikasi ini dan berhasil lolos pendanaan insentif PKM-AI Unsri"
        tech={["Python","OpenCV","Tkinter"]}
        ></Card>

        <Card
        image={Photo10}
        title="Music Player"
        description="Music player dalam bentuk website yang dibangun menggunakan HTML,CSS, dan JavaScript. Saya membuat project ini untuk mendalami bahasa JavaScript"
        tech={["HTML", "CSS", "JavaScript"]}
        ></Card>


      </div>


    </AnimatedContent>
  <div className="lg:w-7xl lg:overflow-hidden lg:mt-7 w-screen overflow-hidden">
        <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={32}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
        className="rounded-xl"
      />
  </div>
      
    </section>
  );
}
