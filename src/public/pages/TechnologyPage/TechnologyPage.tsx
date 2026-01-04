import "./TechnologyPage.css";
import data from "../../../data/data.json";
import { useState } from "react";
import { useInterval } from "../../../hooks/useInterval";

type Technology = {
  id: string;
  currentPos: number;
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};
const TechnologyPage = () => {
  const technologies = data.technology.map((tech) => ({
    id: tech.id,
    currentPos: tech.currentPos,
    name: tech.name,
    images: {
      portrait: tech.images.portrait,
      landscape: tech.images.landscape,
    },
    description: tech.description,
  }));
  const [current, setCurrent] = useState<number>(0);
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology | null>(technologies[0]);

  useInterval(6000, current, setCurrent, setSelectedTechnology, technologies);
  return (
    <section className="technology-page-container flex flex-col justify-center bg-cover bg-center bg-no-repeat pt-28 w-full h-full">
      <section className="content flex flex-col w-full h-full gap-20 px-10 pb-10 sm:pb-0 sm:px-14 md:px-20 md:pb-0 md:pr-0 md:flex-row md:gap-10">
        <article className="flex flex-1 flex-col justify-start gap-10 sm:gap-28">
          <h1 className="text-xl">03 SPACE LAUNCH 101</h1>
          <article className="flex flex-col gap-5">
            <div className="flex gap-10 max-w-full min-h-72 md:gap-14 ">
              <div className="flex flex-col items-center justify-evenly">
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    className={`flex justify-center items-center w-14 h-14 rounded-full  border-[0.1rem] border-gray-400 active:bg-gray-50 active:text-gray-900
                    `}
                    onClick={() => {
                      setSelectedTechnology(tech);
                      setCurrent(tech.currentPos);
                    }}
                  >
                    {tech.id}
                  </button>
                ))}
              </div>
              <article className="flex flex-col justify-start gap-10 w-[60%]">
                <h2 className="text-sm">THE TERMINOLOGY...</h2>
                {selectedTechnology && (
                  <>
                    <h3 className="text-3xl sm:text-5xl ">
                      {selectedTechnology.name}
                    </h3>
                    <p className=" text-justify text-sm">
                      {selectedTechnology.description}
                    </p>
                  </>
                )}
              </article>
            </div>
          </article>
        </article>
        <aside className="flex-1 flex justify-center items-center md:justify-end">
          <figure>
            <img
              src={selectedTechnology?.images.portrait}
              alt={selectedTechnology?.name}
              loading="lazy"
              decoding="async"
              className="w-[30rem]"
            />
          </figure>
        </aside>
      </section>
    </section>
  );
};
export default TechnologyPage;
