const HomePage = () => {
  return (
    <section
      className={`home-container flex  justify-center items-center bg-[url('src/assets/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat pt-28 w-full h-full`}
    >
      <article className="flex flex-col items-center justify-center gap-10 pb-10 sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-full sm:px-24">
        <article className="flex flex-col justify-center items-start gap-10 w-[300px] max-w-[80%]">
          <h1 className="w-full">
            <p className="text-xl">So, you want to travel to</p>
            <p className="text-7xl font-normal tracking-[0.6rem]">Space</p>
          </h1>
          <p className="text-sm text-justify">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <aside>
          <div className="flex items-center justify-center w-40 h-40 bg-white rounded-full text-gray-950">
            Explore
          </div>
        </aside>
      </article>
    </section>
  );
};
export default HomePage;
