import Layout from "@components/layout";
import CourseDetail from "@components/course-details";
import Seo from "@components/seo/seo";
import Breadcrumb from "@components/ui/breadcrumb";
import Container from "@components/ui/container";
import { courseData } from "@data/course";

export default function CourceDetailPage({ data }) {
  return (
    <>
      <Seo
        title={`${data.title}`}
        description={`${data.description}`}
        path={`course/${data.slug}`}
      />
      <Container>
        <div className="pt-4">
          <Breadcrumb />
        </div>
        <CourseDetail course={data} />
      </Container>
    </>
  );
}

CourceDetailPage.Layout = Layout;

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  const course = courseData.find((itm) => itm.slug === slug);

  return {
    props: { data: course },
  };
};
