import Link from "next/link";

const About = () => {
  return (
    <section className="noise bg-[#edede9] dark:bg-black relative flex flex-row items-center justify-center gap-4 p-4 py-8 md:px-6 md:py-20 text-[#344d50] dark:text-[#f2e8e3] transition-all">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-5xl font-extralight text-secondary transition-all md:text-5xl lg:text-8xl text-center">
          👋🏻 Hi, I'm Fikir
        </h3>
        <h5 className="text-md pr-2/12 max-w-screen-md text-center font-extralight lg:text-xl mb-4 dark:text-[#c7c7c7]">
          A meticulous Fullstack Developer with a Computer Science degree,, in
          love with building & delivering clockwork level solutions A.S.A.P.
        </h5>
        <div className="flex flex-row gap-2">
          <Link
            href="resume.pdf"
            className="w-fit text-[#D1D4D6] bg-[#2f3e46] flex px-2 lg:px-4 lg:h-12 rounded-sm items-center gap-2 font-semibold lg:text-sm text-xs py-0.5 hover:bg-[#192126] transition-all dark:bg-[#f2e8e3] dark:text-[#2f3e46] dark:hover:bg-[#d2cac6]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all w-5 lg:w-[26px] h-5 lg:h-[26px]"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
            </svg>
            <span>DOWNLOAD RESUME</span>
          </Link>
          <Link
            href={"https://t.me/fikiryilkal_dev"}
            className="w-fit text-[#2f3e46] border flex px-2 lg:px-4 lg:h-12 rounded-sm items-center gap-2 font-semibold lg:text-sm text-xs py-0.5 hover:bg-[#2f3e46] hover:text-[#D1D4D6] transition-all dark:border-[#f2e8e3] dark:text-[#f2e8e3] dark:hover:bg-[#f2e8e3] dark:hover:text-[#2f3e46]"
          >
            MORE ABOUT ME
          </Link>
        </div>
      </div>
    </section>
  );
};
export default About;
