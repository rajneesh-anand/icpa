import React, { useState, useEffect } from "react";
import CounterArea from "@components/common/counter-area";

import { useModalAction } from "@components/common/modal/modal.context";
import { BannerArea } from "./banner-area";
import { CourseArea } from "./course-area";
import { CourseImage } from "./course-image";

const Home = () => {
  const { openModal } = useModalAction();

  // useEffect(() => {
  //   setTimeout(() => {
  //     openModal("POPFORM_VIEW");
  //   }, 30000);
  // }, []);

  return (
    <>
      <BannerArea />
      <CourseArea />
      <CourseImage />
      <CounterArea />
    </>
  );
};

export default Home;
