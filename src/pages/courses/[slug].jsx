import Layout from "@components/layout";
import CourseGrid from "@components/course-grid";
import Seo from "@components/seo/seo";

export default function CourceListPage() {
  return (
    <>
      <Seo
        title="Organic Beauty Products"
        description="Geenia International is here to serve you better products for you we are in this Industry from many years and continuosly  upgrading products as per the environment"
        path="cources"
      />

      <CourseGrid />
    </>
  );
}

CourceListPage.Layout = Layout;
