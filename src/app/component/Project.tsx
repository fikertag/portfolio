import SingleProject from "./SingleProject";

const Project = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-center text-4xl lg:text-5xl text-[#2f3e46] font-semibold">
        Projects
      </h1>
      <small className="flex flex-row items-center justify-center gap-2 pt-1 text-[#2f3e46]">
        <span className="flex flex-row items-center justify-center gap-4 text-secondary/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
              opacity="0.2"
            ></path>
            <path d="M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"></path>
          </svg>
          Project I'm proud to share with you
        </span>
      </small>
      <div className="columns-1 items-center justify-center gap-4 gap-y-12 px-4 md:columns-2 lg:columns-3">
        <SingleProject
          name={"The Garden"}
          description="Currently working on building an ecosystem dedicated to grow, share and highlight talents."
          tags={["web", "js"]}
          imageUrl="project.png"
          linkUrl="www"
        />

        <SingleProject
          name={"The Garden"}
          description="Currently working on building an ecosystem dedicated to grow,working on building an ecosystem dedicated to grow, share and highlight talents."
          tags={["web", "js"]}
          imageUrl="project.png"
          linkUrl="www"
        />
        <SingleProject
          name={"Sand message anom"}
          description="Currently working on building an ecosystem dedicated to grow, share and highlight talents."
          tags={["web", "js"]}
          imageUrl="project1.png"
          linkUrl="www"
        />
        <SingleProject
          name={"Sand message anom"}
          description="Currently working on building an ecosystem dedicated to grow, share and highlight talents."
          tags={["web", "js"]}
          imageUrl="project1.png"
          linkUrl="www"
        />
        <SingleProject
          name={"The Garden"}
          description="Currently working on building an ecosystem dedicated to grow, share and highlight talents."
          tags={["web", "js"]}
          imageUrl="project.png"
          linkUrl="www"
        />
        <SingleProject
          name={"Sand message anom"}
          description="Currently working on building an ecosystem dedicated to grow, share and highlight talents."
          tags={["web", "js"]}
          imageUrl="project1.png"
          linkUrl="www"
        />
      </div>
    </section>
  );
};
export default Project;
