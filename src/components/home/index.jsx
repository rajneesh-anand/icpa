import React, { useState, useEffect } from "react";
import CounterArea from "@components/common/counter-area";
import { CourseFilter } from "./course-area";
import { useModalAction } from "@components/common/modal/modal.context";
import BannerArea from "./banner-area";

const Home = () => {
  const { openModal } = useModalAction();

  // useEffect(() => {
  //   setTimeout(() => {
  //     openModal("POPFORM_VIEW");
  //   }, 30000);
  // }, []);

  return (
    <>
      {/* <BannerSlider
        banner={heroBanner}
        contentClassName="pb-24 xl:pb-32 pt-16 xl:pt-24"
      /> */}
      <BannerArea />
      <CourseFilter />
      <CounterArea />
    </>
  );
};

export default Home;
