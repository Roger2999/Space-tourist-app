import { useState } from "react";

import { navigation } from "../../data/headerData";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import logoIcon from "../../assets/shared/logo.svg";
import iconHamburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenuButton = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  return (
    <>
      <header
        className="header-container flex justify-between w-full absolute 
      top-0"
      >
        {/* logo */}
        <figure className="logo flex justify-center items-center relative top-10 left-10 rounded-full">
          <img
            src={logoIcon}
            alt="logo-icon"
            decoding="async"
            loading="lazy"
            height={40}
            width={40}
          />
        </figure>
        {/* hamburger button */}

        <button
          type="button"
          className="hamburger-btn sm:hidden fixed z-50 right-10 top-10 hover:scale-110 transition-all duration-75 ease"
          onClick={handleMenuButton}
        >
          {openMenu ? (
            <img
              src={iconClose}
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              alt="hamburger-icon"
            />
          ) : (
            <img
              src={iconHamburger}
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              alt="hamburger-icon"
            />
          )}
        </button>
        <HeaderDesktop navigation={navigation} />
        {openMenu && (
          <HeaderMobile
            openMenu={openMenu}
            onClose={() => setOpenMenu(false)}
            navigation={navigation}
          />
        )}
      </header>
    </>
  );
};
