import { Outlet } from "react-router-dom";
import "./DestinationPage.css";
import { PlanetsNav } from "../../../components";

const DestinationPage = () => {
  return (
    <section
      className={`destination-page-container flex flex-col  justify-center items-center bg-cover bg-center bg-no-repeat pt-28 pb-8 px-8 sm:px-20 w-full h-full`}
    >
      <h1 className="w-full my-7 ">01 PICK YOUR DESTINATION</h1>

      <article className="flex flex-col gap-0 sm:flex-col sm:gap-5 h-full">
        <PlanetsNav />
        <Outlet />
      </article>
    </section>
  );
};
export default DestinationPage;
