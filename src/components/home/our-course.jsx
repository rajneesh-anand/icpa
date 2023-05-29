import { useState, useEffect } from "react";
import CourseCard from "@components/home/course-card";
import cn from "classnames";
import { courseData } from "@data/course";
import Container from "@components/ui/container";

export const CourseFilter = () => {
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
    <Container className="my-16">
      <div className="relative flex flex-col justify-center items-center text-neutral-900 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-orange">
          Explore Our Best Courses
        </h2>
        <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 ">
          Job oriented courses for working professional and college students{" "}
        </span>
      </div>

      <div className="flex items-center justify-center py-8">
        <button
          type="button"
          onClick={() => setButtonText("all")}
          className="text-white bg-orange hover:bg-orange/75 focus:ring-2 focus:ring-[#431d48] font-medium rounded-sm text-sm lg:text-lg px-4 lg:px-8 py-2 text-center inline-flex items-center  mr-2 mb-2"
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setButtonText("free")}
          className="text-white bg-orange hover:bg-orange/75 focus:ring-2 focus:ring-[#431d48] font-medium rounded-sm text-sm lg:text-lg px-4 lg:px-8 py-2 text-center inline-flex items-center  mr-2 mb-2"
        >
          Free Courses
        </button>
        <button
          type="button"
          onClick={() => setButtonText("paid")}
          className="text-white bg-orange hover:bg-orange/75 focus:ring-2 focus:ring-[#431d48] font-medium rounded-sm text-sm lg:text-lg px-4 lg:px-8 py-2 text-center inline-flex items-center  mr-2 mb-2"
        >
          Premium Courses
        </button>
      </div>

      <div className="grid   xl:grid-cols-3 3xl:grid-cols-4 gap-3 pb-4">
        {data?.map((item, idx) => (
          <CourseCard key={idx} course={item} />
        ))}
      </div>
    </Container>
  );
};
