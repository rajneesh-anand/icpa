// import Link from "@components/ui/link";
// import SearchIcon from "@components/icons/search-icon";
// import MenuIcon from "@components/icons/menu-icon";
// import HomeIcon from "@components/icons/home-icon";
// import { useUI } from "@contexts/ui.context";
// import { useRouter } from "next/router";
// import { ROUTES } from "@utils/routes";
// import dynamic from "next/dynamic";
// import { Drawer } from "@components/common/drawer/drawer";

// const AuthButton = dynamic(
//   () => import("@components/layout/mobile-navigation/auth-button"),
//   {
//     ssr: false,
//   }
// );

// const MobileMenu = dynamic(() =>
//   import("@components/layout/header/mobile-menu")
// );

// const BottomNavigation = () => {
//   const { t } = useTranslation("common");
//   const { openSidebar, closeSidebar, displaySidebar, toggleMobileSearch } =
//     useUI();

//   const { locale } = useRouter();
//   const dir = getDirection(locale);
//   const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

//   function handleMobileMenu() {
//     return openSidebar();
//   }

//   return (
//     <>
//       <div className="lg:hidden fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-skin-fill w-full h-14 px-4 md:px-6 lg:px-8 text-skin-muted pb-0.5">
//         <button
//           aria-label="Menu"
//           className="flex flex-col items-center justify-center flex-shrink-0 font-medium outline-none focus:outline-none"
//           onClick={handleMobileMenu}
//         >
//           <MenuIcon className="text-red-900" />
//         </button>
//         <button
//           className="flex items-center justify-center flex-shrink-0 font-medium h-auto relative focus:outline-none"
//           onClick={toggleMobileSearch}
//           aria-label="Search Button"
//         >
//           <SearchIcon className="text-red-900" />
//         </button>
//         <Link href={ROUTES.HOME} className="flex-shrink-0 font-medium">
//           <span className="sr-only">{t("breadcrumb-home")}</span>
//           <HomeIcon color="text-red-900" />
//         </Link>
//         <CartButton
//           hideLabel={true}
//           iconClassName="text-red-900"
//           className="font-medium"
//         />
//         <AuthButton iconClassName="text-red-900" className="font-medium" />
//       </div>
//       <Drawer
//         placement={dir === "rtl" ? "right" : "left"}
//         open={displaySidebar}
//         onClose={closeSidebar}
//         handler={false}
//         showMask={true}
//         level={null}
//         contentWrapperStyle={contentWrapperCSS}
//       >
//         <MobileMenu />
//       </Drawer>
//     </>
//   );
// };

// export default BottomNavigation;
