import FeatureArea from "@components/common/feature-area";
import SuitableArea from "@components/common/suitable-area";
import React from "react";
import Breadcrumb from "@components/bredcrumb";
import CounterArea from "@components/home/counter-area";
import CourseArea from "./course-area";

const CourseGrid = () => {
  return (
    <>
      <Breadcrumb title="Course Grid" subtitle="Course Grid" isDbbl="Course" />
      <FeatureArea style_about={true} />
      <CourseArea />
      <SuitableArea style_2={true} />
      <CounterArea />
    </>
  );
};

export default CourseGrid;
