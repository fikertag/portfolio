import Navbar from "./component/Navbar";
import About from "./component/About";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl backdrop-blur-3xl transition-all bg-gray-200 min-h-[1000px] pb-5">
      <svg style={{ display: "none" }}>
        <filter id="grainy">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
        </filter>
      </svg>
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}
