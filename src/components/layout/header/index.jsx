import dynamic from "next/dynamic";
import useSticky from "@utils/use-sticky";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import { siteSettings } from "@settings/site-settings";
import { useModalAction } from "@components/common/modal/modal.context";
import { useUI } from "@contexts/ui.context";
import Container from "@components/ui/container";
import Logo from "@components/ui/logo";
import { Drawer } from "@components/common/drawer/drawer";

const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const MobileMenu = dynamic(() => import("./mobile-menu"), { ssr: false });

const Header = () => {
  const { site_header } = siteSettings;
  const { sticky } = useSticky();
  const { openModal } = useModalAction();
  const { openSidebar, closeSidebar, displaySidebar } = useUI();

  const contentWrapperCSS = { left: 0 };

  function handleMobileMenu() {
    return openSidebar();
  }

  function handleLogin() {
    openModal("LOGIN_VIEW");
  }

  return (
    <>
      <header className={sticky ? "header-sticky" : ""}>
        <div className="flex justify-between items-center h-16 relative ">
          <div className="pl-4 md:pl-6 lg:pl-8 2xl:pl-1 lg:w-[240px] bg-white h-full flex items-center">
            <Logo />
          </div>
          <div className="hidden lg:flex lg:justify-end lg:items-center pr-4 md:pr-6 lg:pr-8 2xl:pr-1 w-full h-full bg-yellow">
            <NavMenu data={site_header.menu} />
            <AuthMenu
              btnProps={{
                onClick: handleLogin,
              }}
            />
          </div>
          <div className="lg:hidden bg-yellow h-full flex justify-end items-center w-full">
            <button
              onClick={handleMobileMenu}
              className="btn-purple block mr-4"
            >
              <i className="fi fi-rr-menu-burger"></i>
            </button>
          </div>
        </div>
      </header>

      <Drawer
        placement="left"
        open={displaySidebar}
        onClose={closeSidebar}
        handler={false}
        showMask={true}
        level={null}
        contentWrapperStyle={contentWrapperCSS}
      >
        <MobileMenu />
      </Drawer>
    </>
  );
};

export default Header;
