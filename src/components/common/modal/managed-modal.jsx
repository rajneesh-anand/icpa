import Modal from "@components/common/modal/modal";
import dynamic from "next/dynamic";
import {
  useModalAction,
  useModalState,
} from "@components/common/modal/modal.context";
const LoginForm = dynamic(() => import("@components/auth/login-form"));
const PopUpForm = dynamic(() => import("@components/auth/popup-form"));

const SignUpForm = dynamic(() => import("@components/auth/sign-up-form"));
const ForgetPasswordForm = dynamic(() =>
  import("@components/auth/forget-password-form")
);

const ManagedModal = () => {
  const { isOpen, view } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === "LOGIN_VIEW" && <LoginForm />}
      {view === "POPFORM_VIEW" && <PopUpForm />}
      {view === "SIGN_UP_VIEW" && <SignUpForm />}
      {view === "FORGET_PASSWORD" && <ForgetPasswordForm />}
    </Modal>
  );
};

export default ManagedModal;
