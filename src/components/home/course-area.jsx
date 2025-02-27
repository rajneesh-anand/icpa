import { useState, useEffect } from "react";
import CourseCard from "@components/home/course-card";
import { courseData } from "@data/course";
import Container from "@components/ui/container";

export const CourseArea = () => {
  const [data, setData] = useState();
  const [buttonText, setButtonText] = useState("all");

  useEffect(() => {
    if (buttonText === "paid") {
      const filterData = courseData.filter(
        (item) => item.course_type === "paid"
      );
      setData(filterData);
    } else if (buttonText === "free") {
      const filterData = courseData.filter(
        (item) => item.course_type === "free"
      );
      setData(filterData);
    } else {
      setData(courseData);
    }
  }, [buttonText]);

  return (
    <>
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
                <h2 className="text-white text-3xl">Explore Our Courses</h2>
                <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
                <p className="text-gray-300/90">
                  Job oriented courses for working professional and college
                  students @ very affordable price
                </p>
              </div>
            </div>
          </div>
        </Container>
        {/* <div className="absolute bottom-0 left-0 right-0">
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
        </div> */}
      </section>

      <Container className="mt-4">
        <div className="flex items-center justify-center py-8">
          <button
            type="button"
            onClick={() => setButtonText("all")}
            className="uppercase text-white bg-orange hover:bg-orange/75 focus:ring-2 focus:ring-[#431d48] font-medium rounded-sm text-[12px] lg:text-lg px-4 lg:px-8 py-2 text-center inline-flex items-center  mr-2 mb-2"
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setButtonText("free")}
            className="uppercase text-white bg-orange hover:bg-orange/75 focus:ring-2 focus:ring-[#431d48] font-medium rounded-sm text-[12px] lg:text-lg px-4 lg:px-8 py-2 text-center inline-flex items-center  mr-2 mb-2"
          >
            Free Courses
          </button>
          <button
            type="button"
            onClick={() => setButtonText("paid")}
            className="uppercase text-white bg-orange hover:bg-orange/75 focus:ring-2 focus:ring-[#431d48] font-medium rounded-sm text-[12px] lg:text-lg px-4 lg:px-8 py-2 text-center inline-flex items-center  mr-2 mb-2"
          >
            Premium Courses
          </button>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center ">
          {data?.map((item, idx) => (
            <CourseCard key={idx} course={item} />
          ))}
        </div>
      </Container>
    </>
  );
};
