import Navbar from "./component/Navbar";
import About from "./component/About";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="noise container mx-auto max-w-6xl backdrop-blur-3xl transition-all min-h-[1000px] pb-5 bg-[#edede9] dark:bg-black transition-all">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}
