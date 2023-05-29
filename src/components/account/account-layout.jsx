import Container from "@components/ui/container";

// const accountMenu = [
//   {
//     slug: "",
//     name: "account-settings",
//     icon: <SettingsIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
//   },

//   {
//     slug: ROUTES.WISHLIST,
//     name: "text-wishlist",
//     icon: <WishlistIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
//   },
//   {
//     slug: ROUTES.ADDRESS,
//     name: "text-address",
//     icon: <MapIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
//   },
//   {
//     slug: ROUTES.NOTIFICATION,
//     name: "text-notifications",
//     icon: <NotificationIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
//   },
//   {
//     slug: ROUTES.LEGAL_NOTICE,
//     name: "text-account-details-notice",
//     icon: <NoticeIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
//   },
//   {
//     slug: ROUTES.HELP_CENTER,
//     name: "text-account-details-help",
//     icon: <HelpIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
//   },
//   {
//     slug: ROUTES.CHANGE_PASSWORD,
//     name: "text-change-password",
//     icon: (
//       <IoSettingsOutline className="w-5 md:w-[22px] h-5 md:h-[22px] text-[#8C969F]" />
//     ),
//   },
// ];

const AccountLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AccountLayout;
