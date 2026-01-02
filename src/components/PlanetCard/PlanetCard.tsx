interface Props {
  title?: string;
  description?: string;
  distance?: string;
  time?: string;
  img?: string;
}
export const PlanetCard = ({
  title = "Mars",
  description = "Descripcion",
  distance = "384,400 km",
  time = "3 days",
  img,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-10">
        <figure className="flex items-center justify-center flex-1">
          <img
            src={img}
            loading="lazy"
            decoding="async"
            className="w-52 h-52 sm:w-52 sm:h-52 md:w-72 md:h-72"
          />
        </figure>
        <section className="flex flex-col gap-5 flex-1">
          <h2 className="text-5xl mt-5">{title}</h2>
          <h3>{description}</h3>
          <article className="flex items-center gap-10 mt-5 border-t-[0.1rem]">
            <div className="">
              <p className="text-sm">Avg. distance</p>{" "}
              <p className="text-xl">{distance}</p>
            </div>
            <div>
              <p className="text-sm">Est. travel time</p>{" "}
              <p className="text-xl">{time}</p>
            </div>
            <p> </p>
          </article>
        </section>
      </div>
    </>
  );
};
