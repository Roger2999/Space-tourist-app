import { NavLink } from "react-router-dom";
import planets from "../../data/data.json";
export const PlanetsNav = () => {
  return (
    <nav className="flex ml-0 gap-6 mb-14 sm:mb-0 sm:justify-center sm:ml-60">
      <NavLink
        end
        to={""}
        className={({ isActive }) =>
          `nav-link h-9 text-gray-400 text-xl ${
            isActive ? "border-b-4 text-gray-50" : ""
          }`
        }
      >
        Moon
      </NavLink>
      {planets.destinations.map((planet) => (
        <NavLink
          key={planet.name}
          to={planet.name}
          className={({ isActive }) =>
            `nav-link h-9 text-gray-400 text-xl hover:border-b-4 ${
              isActive ? "border-b-4 text-gray-50" : ""
            }`
          }
        >
          {planet.name}
        </NavLink>
      ))}
    </nav>
  );
};
