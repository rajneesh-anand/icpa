import Layout from "@components/layout";
import Home from "@components/home";
import Seo from "@components/seo/seo";

export default function HomePage() {
  return (
    <>
      <Seo
        title="ICPA Institute"
        description="Job oriented online courses for college students and working professional "
      />
      <Home />
    </>
  );
}

HomePage.Layout = Layout;
