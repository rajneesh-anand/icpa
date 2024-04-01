import Layout from "@components/layout";
import Seo from "@components/seo/seo";
import { useState, useEffect } from "react";
import CourseCard from "@components/home/course-card";
import { courseData } from "@data/course";
import Container from "@components/ui/container";

export default function FreeCoursePage() {
  const [data, setData] = useState();

  useEffect(() => {
    const filterData = courseData.filter((item) => item.course_type === "free");
    setData(filterData);
  }, []);

  return (
    <>
      <Seo
        title="Free Courses"
        description="Job oriented online courses for college students and working professional "
      />
      <section className="py-28 relative">
        <div className="overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/banner/course-bg.jpg"
            alt="build your website image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-800 w-full h-full opacity-90"></div>
        </div>
        <Container>
          <div className="lg:flex justify-center">
            <div className="text-center relative">
              <div className="space-y-6">
                <h2 className="text-white text-3xl">
                  Explore Our Free Courses
                </h2>
                <div className="h-0.5 bg-red-500 w-[320px] mx-auto"></div>
                <p className="text-gray-300/90">
                  Job oriented courses for working professional and college
                  students at free of cost
                </p>
              </div>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0">
          <img
            src="/images/bg-pattern-light.png"
            alt="bg-pattern-light"
            className="block dark:hidden"
          />
          <img
            src="/images/bg-pattern-dark2.png"
            alt="bg-pattern-light"
            className="hidden dark:block"
          />
        </div>
      </section>

      <Container className="mt-4">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center ">
          {data?.map((item, idx) => (
            <CourseCard key={idx} course={item} />
          ))}
        </div>
      </Container>
    </>
  );
}

FreeCoursePage.Layout = Layout;
