import dynamic from "next/dynamic";
import { useUI } from "@contexts/ui.context";
import { Drawer } from "@components/common/drawer/drawer";

const MobileAuthMenu = dynamic(() =>
  import("@components/layout/mobile-navigation/mobile-auth-menu")
);

const ManagedDrawer = () => {
  const { displayDrawer, closeDrawer, drawerView } = useUI();

  const contentWrapperCSS = { right: 0 };

  return (
    <Drawer
      open={displayDrawer}
      placement="right"
      onClose={closeDrawer}
      handler={false}
      showMask={true}
      level={null}
      contentWrapperStyle={contentWrapperCSS}
    >
      {drawerView === "AUTH_SIDEBAR" && <MobileAuthMenu />}
    </Drawer>
  );
};

export default ManagedDrawer;
