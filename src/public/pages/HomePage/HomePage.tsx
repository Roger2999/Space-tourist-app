import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section
      className={`home-page-container flex  justify-center items-center bg-[url('src/assets/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat pt-28 w-full h-full`}
    >
      <article className="content flex flex-col items-center justify-center w-full h-full px-12 pb-0 md:h-auto md:mt-20 sm:flex sm:flex-col sm:justify-between sm:items-center sm:gap-10 sm:h-auto  sm:w-full sm:px-12 sm:pr-20 md:flex-row lg:px-32">
        <article className="title-container flex flex-1 flex-col items-center justify-center gap-10 pt-20 sm:pt-0 sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-0 sm:w-[500px] sm:max-w-[80%]">
          <h1 className="title sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-full md:block">
            <span className="text-4xl sm:text-4xl md:text-[42px] mb-4">
              So, you want to travel to
            </span>
            <br />
            <strong className="text-[160px] sm:text-[180px] md:text-[180px] font-normal">
              Space
            </strong>
          </h1>
          <p className="text-[18px] sm:text-[18px] md:text-[28px] text-justify">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <aside className="flex flex-1  justify-end items-center">
          <button
            onClick={() => navigate("/destination")}
            className="explore-btn flex items-center justify-center w-72 h-72 text-[56px] bg-white rounded-full sm:w-72 sm:h-72 sm:text-[56px] md:w-72 md:h-72 md:text-[46px] lg:w-96 lg:h-96 text-gray-950 transition-all duration-100 ease hover:text-gray-500"
          >
            Explore
          </button>
        </aside>
      </article>
    </section>
  );
};
export default HomePage;
