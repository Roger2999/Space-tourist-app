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
      <section
        className={`crew-page-container flex flex-col gap-10 sm:flex sm:flex-row sm:justify-center sm:gap-0  bg-cover bg-center bg-no-repeat pt-28 sm:w-full sm:h-full`}
      >
        <section className="flex-1 flex flex-col justify-around gap-14 w-full px-10 sm:px-24 sm:gap-0">
          <h1 className="">
            <span>02</span> MEET YOUR CREW
          </h1>
          {selectedCrew && (
            <article key={selectedCrew.role} className={`flex flex-col gap-4`}>
              <h2 className="text-3xl">{selectedCrew.role}</h2>
              <h3 className="text-3xl sm:text-5xl">{selectedCrew.name}</h3>
              <p className="text-sm">{selectedCrew.bio}</p>
            </article>
          )}
          <article className="flex justify-center items-center gap-4">
            {crewMapData.map((c) => (
              <button
                onClick={() => {
                  setSelectCrew(c);
                  setCurrent(c.currentPos);
                }}
                key={c.role}
                className=" bg-gray-50 w-5 h-5 rounded-full
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
      </section>
    </>
  );
};
export default CrewPage;
