import Layout from "@components/layout";
import Seo from "@components/seo/seo";
import { useState, useEffect } from "react";
import CourseCard from "@components/home/course-card";
import { courseData } from "@data/course";
import Container from "@components/ui/container";

export default function StudentsPage() {
  const [data, setData] = useState();

  useEffect(() => {
    const filterData = courseData.filter((item) => item.course_type === "free");
    setData(filterData);
  }, []);

  return (
    <>
      <Seo
        title="Our Students"
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
                <h2 className="text-white text-3xl">Our Proud Students</h2>
                <div className="h-0.5 bg-red-500 w-[320px] mx-auto"></div>
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
        <section>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/1.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/2.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/3.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/4.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/5.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/6.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/7.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/8.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/9.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/10.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/11.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/12.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/13.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/14.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/15.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/16.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/17.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/18.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/19.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/20.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
            <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
              <img
                src="/images/students/21.jpeg"
                alt="student image"
                layout="fill"
                quality={100}
                className="object-cover rounded-sm h-48 lg:h-64 w-full"
              />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

StudentsPage.Layout = Layout;
