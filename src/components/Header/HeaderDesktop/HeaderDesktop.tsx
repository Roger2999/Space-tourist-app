import { NavLink } from "react-router-dom";

interface Props {
  navigation: {
    label: string;
    route: string;
    id: string;
  }[];
}
export const HeaderDesktop = ({ navigation }: Props) => {
  return (
    <>
      <section className="nav-container hidden sm:flex items-center absolute z-10 top-0 right-0 w-[800px] max-w-[85%] min-h-20 max-h-[96px] mt-5 backdrop-blur-3xl bg-white/5">
        <nav className="flex justify-start items gap-10 w-full min-h-20 sm:pl-5 md:pl-20">
          {navigation.map((nav) => (
            <NavLink
              to={nav.route}
              key={nav.id}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? " border-b-4 border-gray-400 transition-all duration-100 ease scale-110"
                    : ""
                }`
              }
            >
              <strong className="font-bold">{nav.id}</strong> {nav.label}
            </NavLink>
          ))}
        </nav>
      </section>
    </>
  );
};
