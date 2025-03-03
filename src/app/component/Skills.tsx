import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandMongodb,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandOpenai,
  TbBrandMysql,
} from "react-icons/tb";

import { MdOutlineLock } from "react-icons/md";

const Skills = () => {
  return (
    <section className="noise flex flex-col gap-6 mt-20 bg-[#edede9] dark:bg-blackitems-center text-[#2f3e46] dark:text-[#c7c7c7] dark:bg-black transition-all">
      <h1 className="text-center text-4xl lg:text-5xl text-[#2f3e46] dark:text-[#f2e8e3]">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandReact size={"50"} className=" stroke-[1.5]" />
            <h1>React</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandNodejs size={"50"} className=" stroke-[1.5]" />

            <h1>Node js</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandMongodb size={"50"} className=" stroke-[1.5]" />

            <h1>Mongo DB</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandTypescript size={"50"} className=" stroke-[1.5]" />
            <h1>Typescript</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandNextjs size={"50"} className=" stroke-[1.5]" />
            <h1>Next.js</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandOpenai size={"50"} className=" stroke-[1.5]" />
            <h1>AI Powerd Webapp</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandJavascript size={"50"} className=" stroke-[1.5]" />

            <h1>JavaScripts</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <MdOutlineLock size={"50"} />
            <h1>Autentication</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <TbBrandMysql size={"50"} className=" stroke-[1.5]" />

            <h1>Sql</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
