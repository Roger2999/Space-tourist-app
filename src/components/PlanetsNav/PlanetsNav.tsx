import { NavLink } from "react-router-dom";
import planets from "../../data/data.json";
export const PlanetsNav = () => {
  return (
    <nav className="flex gap-6">
      <NavLink
        end
        to={""}
        className={({ isActive }) =>
          `h-9 text-gray-400 ${isActive ? "border-b-4 text-gray-50" : ""}`
        }
      >
        Moon
      </NavLink>
      {planets.destinations.map((planet) => (
        <NavLink
          key={planet.name}
          to={planet.name}
          className={({ isActive }) =>
            `h-9 text-gray-400 ${isActive ? "border-b-4 text-gray-50" : ""}`
          }
        >
          {planet.name}
        </NavLink>
      ))}
    </nav>
  );
};
