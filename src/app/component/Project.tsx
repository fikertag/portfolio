import SingleProject from "./SingleProject";

const Project = () => {
  return (
    <section className="noise flex flex-col gap-12 bg-[#edede9] dark:bg-black transition-all">
      <h1 className="text-center text-4xl lg:text-5xl text-[#2f3e46] dark:text-[#f2e8e3]">
        Projects
      </h1>
      <div className="columns-1 items-center justify-center gap-4 gap-y-12 px-4 md:columns-2 lg:columns-3">
        <SingleProject
          name={"Goosip"}
          description="A Fullstack web application that allows users to share their thoughts and ideas with the world anonymously. It uses pusher to update the feed in real-time."
          tags={[
            "Next.js",
            "React",
            "TailwindCSS",
            "MongoDB",
            "pusher",
            "Vercel",
            "Hashing",
            "Typescript",
          ]}
          imageUrl="gossip.png"
          linkUrl="https://gossip-eta.vercel.app/"
          sourceLinkUrl="https://github.com/fikertag/GG"
        />
        <SingleProject
          name={"Taskup"}
          description="A Fullstack web application that allows users to Signup and create, update, delete, and view their tasks. It uses JWT for authentication and MongoDB for storing data."
          tags={["Next.js", "JWT", "React", "TailwindCSS", "MongoDB", "Vercel"]}
          imageUrl="taskup1.png"
          linkUrl="https://taskmanager-eosin-three.vercel.app/"
          sourceLinkUrl="https://github.com/fikertag/GG"
        />
        <SingleProject
          name={"Goosip"}
          description="A Fullstack web application that allows users to share their thoughts and ideas with the world anonymously. It uses pusher to update the feed in real-time."
          tags={[
            "Next.js",
            "React",
            "TailwindCSS",
            "MongoDB",
            "pusher",
            "Vercel",
            "Hashing",
            "Typescript",
          ]}
          imageUrl="gossip.png"
          linkUrl="https://gossip-eta.vercel.app/"
          sourceLinkUrl="https://github.com/fikertag/GG"
        />
      </div>
    </section>
  );
};
export default Project;
