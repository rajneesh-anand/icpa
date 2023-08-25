import { useState } from "react";
import Link from "@components/ui/link";
import { siteSettings } from "@settings/site-settings";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import Scrollbar from "@components/ui/scrollbar";
import cn from "classnames";
import CloseIcon from "@assets/icons/close-icon";
import { useSession, signOut } from "next-auth/react";
import { useModalAction } from "@components/common/modal/modal.context";

// const social = [
//   {
//     id: 0,
//     link: "https://www.facebook.com/",
//     icon: <IoLogoFacebook />,
//     className: "facebook",
//     title: "text-facebook",
//   },
//   {
//     id: 1,
//     link: "https://twitter.com/",
//     icon: <IoLogoTwitter />,
//     className: "twitter",
//     title: "text-twitter",
//   },
//   {
//     id: 2,
//     link: "https://www.youtube.com/channel/",
//     icon: <IoLogoYoutube />,
//     className: "youtube",
//     title: "text-youtube",
//   },
//   {
//     id: 3,
//     link: "https://www.instagram.com/",
//     icon: <IoLogoInstagram />,
//     className: "instagram",
//     title: "text-instagram",
//   },
// ];

export default function MobileMenu() {
  const [activeMenus, setActiveMenus] = useState([]);
  const { site_header } = siteSettings;
  const { closeSidebar } = useUI();
  const { data: session, status } = useSession();
  const { openModal } = useModalAction();

  const handleArrowClick = (menuName) => {
    let newActiveMenus = [...activeMenus];
    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }
    setActiveMenus(newActiveMenus);
  };

  function handleLogin() {
    closeSidebar();
    openModal("LOGIN_VIEW");
  }

  const ListMenu = ({
    dept,
    data,
    hasSubMenu,
    menuName,
    menuIndex,
    className = "",
  }) =>
    data.label && (
      <li className={`transition-colors duration-200 ${className}`}>
        <div className="flex items-center justify-between relative">
          <Link
            href={data.path}
            className="relative w-full py-4 transition duration-300 ease-in-out menu-item ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 ltr:pr-4 rtl:pl-4 text-brand-dark"
          >
            <span className="block w-full" onClick={closeSidebar}>
              {data.label}
            </span>
          </Link>
          {/* {hasSubMenu && (
            <div
              className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2"
              onClick={() => handleArrowClick(menuName)}
            >
              <IoIosArrowDown
                className={`transition duration-200 ease-in-out transform ${
                  activeMenus.includes(menuName) ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>
          )} */}
        </div>
        {hasSubMenu && (
          <SubMenu
            dept={dept}
            data={data.subMenu}
            toggle={activeMenus.includes(menuName)}
            menuIndex={menuIndex}
          />
        )}
      </li>
    );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <ul className={cn("mobile-sub-menu", dept > 2 && "-ms-4")}>
        {data?.map((menu, index) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.subMenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
              className={cn(dept > 1 && "pl-4", dept > 2 && "pl-8")}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <button
          className="flex text-2xl items-center justify-end px-4 md:px-5 py-5 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
          onClick={closeSidebar}
          aria-label="close"
        >
          <CloseIcon className="text-gray-500 mt-0.5" color="#000000" />
        </button>
        {/* <div className="w-full bg-yellow/50 border-b border-yellow flex justify-between items-center relative ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 shrink-0 py-0.5">
          <button
            className="flex text-2xl items-center justify-center px-4 md:px-5 py-5 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
            onClick={closeSidebar}
            aria-label="close"
          >
            <CloseIcon className="text-gray-500 mt-0.5" color="#000000" />
          </button>
        </div> */}
        {session ? (
          <div className="border-b border-gray-200">
            <div className="text-center">
              <img
                className="rounded-full mx-auto"
                src={session?.user?.image ?? "/images/placeholder/avatar.svg"}
                width="128"
                height="128"
                alt={session?.user?.name}
              />
              <p className="text-[18px] font-medium mt-1 uppercase ">
                {session?.user?.name}
              </p>
            </div>

            <ul className="flex justify-center items-center mb-2 ">
              <li onClick={closeSidebar}>
                <Link
                  href="/account/profile"
                  className="py-[4px] px-[6px]  bg-orange/90 rounded-sm text-[14px] text-white "
                >
                  My Profile
                </Link>
              </li>
              <li onClick={closeSidebar}>
                <Link
                  href="/account/course"
                  className="py-[4px] px-[6px]  bg-orange/90 rounded-sm text-[14px] text-white ml-[4px]"
                >
                  My Courses
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="py-[2px] px-[6px]  bg-slate-500/90 rounded-sm text-[14px] text-white ml-[4px] "
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="border-b border-gray-200">
            <div className="text-center">
              <img
                className="rounded-full mx-auto "
                src={session?.user?.image ?? "/images/placeholder/avatar.svg"}
                width="128"
                height="128"
                alt={session?.user?.name}
              />
            </div>

            <ul className="flex justify-center items-center ">
              <li className="px-4 pb-2">
                <button
                  type="button"
                  className="py-[4px] px-[16px]  bg-orange/90 rounded-sm text-[14px] text-white "
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        )}

        <Scrollbar className="menu-scrollbar flex-grow mb-auto">
          <div className="flex flex-col py-6 pl-8">
            <ul className="mobile-menu">
              {site_header.menu.map((menu, index) => {
                const dept = 1;
                const menuName = `sidebar-menu-${dept}-${index}`;

                return (
                  <ListMenu
                    dept={dept}
                    data={menu}
                    hasSubMenu={menu.subMenu}
                    menuName={menuName}
                    key={menuName}
                    menuIndex={index}
                  />
                );
              })}
            </ul>
          </div>
        </Scrollbar>

        {/* <div className="flex items-center justify-center bg-skin-fill border-t border-skin-base px-7 flex-shrink-0 space-s-1 py-5">
          {social?.map((item, index) => (
            <Link
              href={item.link}
              className={`text-heading space-s-6 transition duration-300 ease-in text-opacity-60 hover:text-orange ${item.className}`}
              key={index}
            >
              <span className="sr-only">{item.title}</span>
              {item.icon}
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
}
