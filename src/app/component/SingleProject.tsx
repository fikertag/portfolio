import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
  linkUrl?: string; // Optional
  sourceLinkUrl?: string; // Optional
}

const SingleProject = ({
  name,
  description,
  tags,
  imageUrl,
  linkUrl,
  sourceLinkUrl,
}: ProjectProps) => {
  return (
    <div className="min-h-96 mb-3 flex break-inside-avoid-column flex-col items-center justify-center rounded-[0.2rem] border border-[#2f3e46]/30 dark:border-[#c7c7c7]/50 bg-[#edede9] brightness-95 noise dark:bg-black transition-all">
      <Image
        src={`/${imageUrl}`}
        alt="project1"
        width={1000} // Any large width to ensure responsiveness
        height={0} // Auto height
        className="w-full h-auto"
      />
      <div className="flex w-full flex-col items-center justify-center gap-1 p-2">
        <h3 className="min-w-full p-2 text-left text-3xl font-semibold text-[#344d50] dark:text-[#f2e8e3]">
          {name}
        </h3>{" "}
        <div className="flex w-full flex-row flex-wrap items-start justify-start gap-2 px-2">
          {tags.map((tag) => (
            <small
              key={tag}
              className="text-[#2E2E2D] dark:text-[#c7c7c7] rounded-sm shadow-[0_3px_2px_rgb(0_0_0/15%)] dark:shadow-[0_3px_2px_rgb(255_255_255/15%)] bg-[#ddddd5] dark:bg-transparent  cursor-pointer whitespace-nowrap transition-all hover:scale-105 px-2  font-[400] dark:border-[#333333] dark:border"
            >
              {tag}{" "}
            </small>
          ))}
        </div>{" "}
        <p className=" w-full px-2 py-4 font-light text-[#2f3e46] dark:text-[#f2e8e3] ">
          {description}
        </p>{" "}
        <div className="flex justify-start w-full">
          <div className="flex w-fit flex-row items-start justify-start gap-2 p-2 text-[#2f3e46] dark:text-[#f2e8e3]">
            {linkUrl && (
              <Link
                className="flex items-center gap-2 border border-[#2f3e46] dark:border-[#c7c7c7] px-3 text-sm font-bold py-1 rounded-sm"
                href={linkUrl || "#"}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.2"
                  height="18.2"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                </svg>{" "}
                SITE{" "}
              </Link>
            )}
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-2 p-2 text-[#2f3e46] dark:text-[#f2e8e3] ">
            {sourceLinkUrl && (
              <Link
                className="flex items-center gap-2 border border-[#2f3e46] px-3 text-sm font-bold py-1 rounded-sm dark:border-[#c7c7c7]"
                href={sourceLinkUrl || "#"}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.2"
                  height="18.2"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                </svg>{" "}
                SOURCE{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
