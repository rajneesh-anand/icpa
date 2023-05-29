import FeatureArea from "@components/common/feature-area";
import SuitableArea from "@components/common/suitable-area";
import React from "react";
import Breadcrumb from "@components/bredcrumb";
import CounterArea from "@components/home/counter-area";
import CourseListArea from "./course-list-area";

const CourseList = () => {
  return (
    <>
      <Breadcrumb title="Course List" subtitle="Course List" isDbbl="Course" />
      <FeatureArea style_about={true} />
      <CourseListArea />
      <SuitableArea style_2={true} />
      <CounterArea />
    </>
  );
};

export default CourseList;
