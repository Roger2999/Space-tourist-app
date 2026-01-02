import { NavLink } from "react-router-dom";

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
      <NavLink
        to={"mars"}
        className={({ isActive }) =>
          `h-9 text-gray-400 ${isActive ? "border-b-4 text-gray-50" : ""}`
        }
      >
        Mars
      </NavLink>
      <NavLink
        to={"europa"}
        className={({ isActive }) =>
          `h-9 text-gray-400 ${isActive ? "border-b-4 text-gray-50" : ""}`
        }
      >
        Europa
      </NavLink>
      <NavLink
        to={"titan"}
        className={({ isActive }) =>
          `h-9 text-gray-400 ${isActive ? "border-b-4 text-gray-50" : ""}`
        }
      >
        Titan
      </NavLink>
    </nav>
  );
};
