import React from "react";
// import Breadcrumb from "@components/bredcrumb";
// import CounterArea from "@components/home/counter-area";
// import CourseArea from "./course-area";
import CourseDetailsArea from "./course-details-area";

const CourseDetails = ({ course }) => {
  return (
    <>
      <CourseDetailsArea data={course} />
      {/* <CourseArea />
      <CounterArea /> */}
    </>
  );
};

export default CourseDetails;
