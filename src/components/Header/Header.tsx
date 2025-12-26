import { useState } from "react";

import { navigation } from "../../data/headerData";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenuButton = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  return (
    <>
      <div
        className="header-container flex justify-between w-full absolute 
      top-0"
      >
        <span className="logo flex justify-center items-center relative top-10 left-10 rounded-full w-10 h-10 bg-gray-700 p-6">
          logo
        </span>
        <HeaderDesktop navigation={navigation} />
        <button
          type="button"
          className="hamburger-btn sm:hidden absolute z-20 right-10 top-10 hover:scale-110 transition-all duration-75 ease"
          onClick={handleMenuButton}
        >
          <img
            src="src/assets/shared/icon-hamburger.svg"
            width={20}
            height={20}
            loading="lazy"
            alt="hamburger-icon"
            decoding="async"
          />
        </button>
        {openMenu && (
          <HeaderMobile
            onClose={() => setOpenMenu(false)}
            navigation={navigation}
          />
        )}
      </div>
    </>
  );
};
