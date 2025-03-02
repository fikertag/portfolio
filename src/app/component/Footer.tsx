const Footer = () => {
  return (
    <footer className="noise relative mt-12 flex flex-col items-center justify-start md:flex-row text-[#2f3e46] dark:text-[#f2e8e3] bg-[#edede9] dark:bg-black transition-all">
      <span className="py-2 border px-4 rounded-sm border-zinc-200/80 bg-zinc-300 shadow-[0_3px_2px_rgb(0_0_0/15%)] right-4 top-6 hidden md:absolute md:block self-center p-2 dark:border-[#c7c7c7]/50 dark:bg-[#000000] ">
        Updated : Feb 05 2025
      </span>{" "}
      <h4 className=" flex flex-row items-center justify-center gap-2 p-8 text-secondary max-[400px]:text-sm">
        Made with{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
        </svg>{" "}
        &amp;{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path d="M208,80H32a8,8,0,0,0-8,8v48a96.3,96.3,0,0,0,32.54,72H32a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16H183.46a96.59,96.59,0,0,0,27-40.09A40,40,0,0,0,248,128v-8A40,40,0,0,0,208,80Zm24,48a24,24,0,0,1-17.2,23,95.78,95.78,0,0,0,1.2-15V97.38A24,24,0,0,1,232,120ZM112,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm32,0V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0ZM80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Z"></path>
        </svg>{" "}
        © 2024 fikiryilkal.me
      </h4>{" "}
    </footer>
  );
};

export default Footer;
