import React, { useState, useEffect } from "react";
import CounterArea from "@components/common/counter-area";
import { useModalAction } from "@components/common/modal/modal.context";
// import { CourseArea } from "./course-area";
import { CourseImage } from "./course-image";
import { ContactArea } from "./contact-area";

import StudentsArea from "./students-area";
import HeroArea from "./hero-area";

const Home = () => {
  const { openModal } = useModalAction();

  useEffect(() => {
    setTimeout(() => {
      openModal("POPFORM_VIEW");
    }, 5000);
  }, []);

  return (
    <>
      {/* <BannerSlider /> */}
      <HeroArea />
      {/* <BannerArea /> */}
      {/* <CourseArea /> */}
      <CourseImage />
      <CounterArea />
      <StudentsArea />
      <ContactArea />
    </>
  );
};

export default Home;
