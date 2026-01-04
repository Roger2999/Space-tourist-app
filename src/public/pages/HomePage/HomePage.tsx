import "./HomePage.css";
const HomePage = () => {
  return (
    <section
      className={`home-page-container flex  justify-center items-center bg-[url('src/assets/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat pt-28 w-full h-full`}
    >
      <article className="content flex flex-col items-center justify-center gap-10 w-full px-12 pb-10 sm:mt-20 sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-full sm:px-5 sm:pr-20 lg:px-32">
        <article className="title-container flex flex-1 flex-col items-center justify-center gap-10 sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-0 sm:w-[500px] sm:max-w-[80%]">
          <h1 className="title sm:w-full">
            <span className="text-[32px] mb-4">So, you want to travel to</span>
            <br />
            <strong className="text-[144px] font-normal">Space</strong>
          </h1>
          <p className="text-[18px] text-justify">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <aside className="flex flex-1  justify-end items-center">
          <div className="explore-btn flex items-center justify-center w-48 h-48 sm:w-60 sm:h-60 bg-white rounded-full text-[46px] text-gray-950 transition-all duration-100 ease hover:text-gray-500">
            Explore
          </div>
        </aside>
      </article>
    </section>
  );
};
export default HomePage;
