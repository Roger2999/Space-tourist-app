import { NavLink } from "react-router-dom";

interface Props {
  navigation: {
    label: string;
    route: string;
    id: string;
  }[];
  onClose: () => void;
}
export const HeaderMobile = ({ navigation, onClose }: Props) => {
  const handleOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        onClick={onClose}
        className="sm:hidden overlay fixed bg-opacity-50 bg-gray-800 w-full h-full"
      >
        <nav
          className="absolute top-0 right-0 w-[200px] max-w-[50%] h-dvh bg-gray-800 transition-all duration-100 ease"
          onClick={handleOverlay}
        >
          <ul className="flex flex-col gap-10 mt-20 w-full p-5">
            {navigation.map((nav) => (
              <li key={nav.id}>
                <NavLink
                  to={nav.route}
                  key={nav.id}
                  className={({ isActive }) =>
                    `flex items-center gap-2 h-full ${
                      isActive
                        ? " border-b-4 border-gray-400 transition-all duration-100 ease scale-110"
                        : ""
                    }`
                  }
                  onClick={onClose}
                >
                  <strong className="font-bold">{nav.id}</strong> {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
