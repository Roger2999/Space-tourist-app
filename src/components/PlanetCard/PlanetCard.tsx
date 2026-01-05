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
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-10 lg:h-[600px]">
        <figure className="flex items-center justify-center flex-1">
          <img
            src={img}
            alt="planet-photo"
            loading="lazy"
            decoding="async"
            className="w-52 h-52 sm:w-60 sm:h-60 md:min-w-80 md:min-h-80 xl:w-[584px] xl:h-[584px]"
          />
        </figure>
        <section className="flex flex-col gap-5 flex-1">
          <h2 className="text-7xl mt-5 lg:text-[100px] xl-[130px]">{title}</h2>
          <p className="description text-justify text-lg lg:text-xl xl-2xl">
            {description}
          </p>
          <article className="flex items-center gap-10 mt-5 border-t-[0.1rem]">
            <div className="date">
              <p className="text-sm lg:text-2xl">Avg. distance</p>{" "}
              <p className="text-2xl lg:text-2xl">{distance}</p>
            </div>
            <div className="date">
              <p className="text-sm lg:text-2xl">Est. travel time</p>{" "}
              <p className="text-2xl lg:2xl">{time}</p>
            </div>
            <p></p>
          </article>
        </section>
      </div>
    </>
  );
};
