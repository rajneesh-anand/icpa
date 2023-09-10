import React, { useState, useEffect } from "react";
import CounterArea from "@components/common/counter-area";

import { useModalAction } from "@components/common/modal/modal.context";
import { BannerArea } from "./banner-area";
import { CourseArea } from "./course-area";
import { CourseImage } from "./course-image";
import { ContactArea } from "./contact-area";
import BannerSlider from "./banner-slider";
import StudentsArea from "./students-area";

const Home = () => {
  const { openModal } = useModalAction();

  // useEffect(() => {
  //   setTimeout(() => {
  //     openModal("POPFORM_VIEW");
  //   }, 30000);
  // }, []);

  return (
    <>
      <BannerSlider />
      {/* <BannerArea /> */}
      <CourseArea />
      <CourseImage />
      <CounterArea />
      <StudentsArea />
      <ContactArea />
    </>
  );
};

export default Home;
