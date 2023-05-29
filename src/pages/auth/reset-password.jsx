import Layout from "@components/layout";

import Container from "@components/ui/container";
import ResetPassword from "@components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <Container>
      <ResetPassword />
    </Container>
  );
}

ResetPasswordPage.Layout = Layout;
