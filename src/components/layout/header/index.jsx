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
      <header
        className={`${
          sticky
            ? "header-sticky"
            : "py-[8px] bg-[#f0f0fe] border-b border-[#f0f0fe]"
        }`}
      >
        <Container className="flex items-center">
          <Logo />

          <NavMenu data={site_header.menu} />
          <AuthMenu
            btnProps={{
              onClick: handleLogin,
            }}
          />
          <button
            onClick={handleMobileMenu}
            className="btn-orange lg:hidden block ml-auto"
          >
            <i className="fi fi-rr-menu-burger"></i>
          </button>
        </Container>
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
