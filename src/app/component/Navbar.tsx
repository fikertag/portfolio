"use client";
// import { motionuseMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false; // Default to light mode if on the server
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev; // Correctly get the new value
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  // const count = useMotionValue(0); // Motion value starts at 0
  // const rounded = useTransform(count, (latest) => Math.round(latest)); // Keep it rounded

  // useEffect(() => {
  //   const controls = animate(count, 232, { duration: 2 }); // Animate to 232 in 2 sec
  //   return controls.stop; // Cleanup animation on unmount
  // }, [count]);

  return (
    <div className=" sticky z-40 top-4 noise flex justify-center p-2 items-center bg-[#b3b1b1] dark:bg-[#333333] transition-all  w-fit px-6 rounded-4xl  m-auto ">
      {/* <div className="w-[135px] h-12 pl-2 flex flex-col text-[#344D50] dark:text-[#f2e8e3] ">
        <span className="text-2xl font-bold ">
          <motion.span>{rounded}</motion.span>
        </span>
        <span className="font-semibold text-xs ">Commits On Github</span>
      </div> */}
      <div className="flex flex-wrap gap-6 pr-2 items-center dark:text-[#c7c7c7]">
        <Link href={"https://t.me/fikiryilkal_dev"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="transition-all w-5 lg:w-[26px]  h-5 lg:h-[26px] "
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M223.41,32.09,80,134.87,21,123.3A6.23,6.23,0,0,1,20,111.38L222.63,32.07A1,1,0,0,1,223.41,32.09ZM80,200a8,8,0,0,0,13.76,5.56l30.61-31.76L80,134.87Z"
              opacity="0.2"
            ></path>
            <path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19ZM78.15,126.35l-49.61-9.73,139.2-54.48ZM88,200V152.52l24.79,21.74Zm87.53,8L92.85,135.5l119-85.29Z"></path>
          </svg>
        </Link>
        <Link href={"https://github.com/fikertag"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="transition-all w-5 lg:w-[26px]  h-5 lg:h-[26px] "
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
              opacity="0.2"
            ></path>
            <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
          </svg>
        </Link>{" "}
        <Link href={"https://www.linkedin.com/in/fikiryilkal/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="transition-all w-5 lg:w-[26px]  h-5 lg:h-[26px] "
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
              opacity="0.2"
            ></path>
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
          </svg>
        </Link>{" "}
        <Link href={"Mailto:fikeryilakltages@gmail.com"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="transition-all w-5 lg:w-[26px]  h-5 lg:h-[26px] "
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M224,56l-96,88L32,56Z" opacity="0.2"></path>
            <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
          </svg>
        </Link>{" "}
        <button
          className="bg-[#344D501A] dark:bg-[#252424] p-1 cursor-pointer transition-all "
          onClick={toggleTheme}
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              className="transition-all w-5 lg:w-[26px]  h-5 lg:h-[26px] "
            >
              <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="transition-all w-5 lg:w-[26px]  h-5 lg:h-[26px]"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z"
                opacity="0.2"
              ></path>
              <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
