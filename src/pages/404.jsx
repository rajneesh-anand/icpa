import Layout from "@components/layout";
import Seo from "@components/seo/seo";
import ErrorInformation from "@components/404/error-information";

export default function ErrorPage() {
  return (
    <>
      <Seo
        title="ICPA Institute"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="404"
      />
      <ErrorInformation />
    </>
  );
}

ErrorPage.Layout = Layout;
