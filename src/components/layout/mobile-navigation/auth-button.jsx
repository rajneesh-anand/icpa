import UserIcon from "@components/icons/user-icon";
import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";
import { useTranslation } from "next-i18next";
import cn from "classnames";
import { useModalAction } from "@components/common/modal/modal.context";
import { useSession } from "next-auth/react";

const AuthButton = ({ className, iconClassName, isShowing }) => {
  const { data: session, status } = useSession();
  const { openDrawer, setDrawerView } = useUI();
  const { openModal } = useModalAction();

  function handleAuthOpen() {
    if (session) {
      setDrawerView("AUTH_SIDEBAR");
      isShowing;
      return openDrawer();
    } else {
      openModal("LOGIN_VIEW");
    }
  }

  return (
    <button
      className={cn(
        "flex items-center justify-center flex-shrink-0 h-auto focus:outline-none transform",
        className
      )}
      onClick={handleAuthOpen}
    >
      <UserIcon className={cn(iconClassName)} />
    </button>
  );
};

export default AuthButton;
