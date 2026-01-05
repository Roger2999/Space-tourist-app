import { useState } from "react";
import data from "../../../data/data.json";
import { useInterval } from "../../../hooks/useInterval";
import "./CrewPage.css";

export type crewData = {
  currentPos: number;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};
const CrewPage = () => {
  const crewMapData = data.crew.map((c) => ({
    currentPos: c.currentPos,
    name: c.name,
    images: {
      png: c.images.png,
      webp: c.images.webp,
    },
    role: c.role,
    bio: c.bio,
  }));
  const [selectedCrew, setSelectCrew] = useState<crewData | null>(
    crewMapData[0]
  );
  const [current, setCurrent] = useState<number>(0);
  //hook reutilizable para efecto de carrusel
  useInterval<crewData>(6000, current, setCurrent, setSelectCrew, crewMapData);
  return (
    <>
      <section className="crew-page-container flex flex-col justify-center bg-cover bg-center bg-no-repeat pt-28 w-full h-full">
        <h1 className="title w-full my-7 text-xl px-10 sm:px-14 md:px-20">
          <span>02</span> MEET YOUR CREW
        </h1>
        <article className="content flex flex-col w-full h-full gap-20 px-10 pb-10 sm:pb-0 sm:px-14 sm:flex-col md:px-20 md:pb-0 md:pr-0 md:flex-row md:gap-10">
          <section className="flex-1 flex flex-col justify-around gap-14 w-full px-10 sm:pt-8 md:pt-0 md:px-24 md:gap-0">
            {selectedCrew && (
              <article
                key={selectedCrew.role}
                className={`flex flex-col gap-4`}
              >
                <h2 className="role text-3xl text-gray-400">
                  {selectedCrew.role}
                </h2>
                <h3 className="text-3xl sm:text-6xl">{selectedCrew.name}</h3>
                <p className="description text-base text-gray-400">
                  {selectedCrew.bio}
                </p>
              </article>
            )}
            <article className="flex justify-start items-center gap-8">
              {crewMapData.map((c) => (
                <button
                  onClick={() => {
                    setSelectCrew(c);
                    setCurrent(c.currentPos);
                  }}
                  key={c.role}
                  className=" bg-gray-50 w-3 h-3 rounded-full
                transition-transform duration-200 ease focus:bg-gray-600 focus:scale-110"
                />
              ))}
            </article>
          </section>
          <aside className="flex-1 flex justify-center items-end">
            {selectedCrew && (
              <img
                src={selectedCrew.images.png}
                alt="crew-photo"
                className="w-96"
                loading="lazy"
                decoding="async"
              />
            )}
          </aside>
        </article>
      </section>
    </>
  );
};
export default CrewPage;
