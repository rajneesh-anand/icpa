import React, { useEffect } from "react";
import CounterArea from "@components/common/counter-area";
import { CourseFilter } from "./our-course";
import BannerSlider from "@components/home/banner-slider";
import { heroBanner } from "@data/banner";
import YoutubeLink from "./youtube-link";
import { useModalAction } from "@components/common/modal/modal.context";

const Home = () => {
  const { openModal } = useModalAction();
  useEffect(() => {
    setTimeout(() => {
      openModal("POPFORM_VIEW");
    }, 6000);
  }, []);

  return (
    <>
      <BannerSlider
        banner={heroBanner}
        contentClassName="pb-24 xl:pb-32 pt-16 xl:pt-24"
      />
      <CourseFilter />
      <CounterArea />
      <YoutubeLink />
    </>
  );
};

export default Home;
