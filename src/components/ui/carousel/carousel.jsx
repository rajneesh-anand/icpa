import { useRef } from "react";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/pagination";
import {
  Swiper,
  Navigation,
  Autoplay,
  Pagination,
  Grid,
} from "@components/ui/carousel/slider";
import cn from "classnames";

const Carousel = ({
  children,
  className = "",
  buttonGroupClassName = "",
  prevActivateId = "",
  nextActivateId = "",
  prevButtonClassName = "-left-3.5 lg:-left-4 xl:-left-5",
  nextButtonClassName = "-right-3.5 lg:-right-4 xl:-right-5",
  buttonSize = "default",
  breakpoints,
  navigation = true,
  pagination = false,
  loop = false,
  grid,
  autoplay,
  ...props
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  let nextButtonClasses = cn(
    "w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-skin-fill absolute transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform shadow-navigation",
    { "3xl:text-2xl": buttonSize === "default" },
    nextButtonClassName
  );
  let prevButtonClasses = cn(
    "w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-skin-fill absolute transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform shadow-navigation",
    { "3xl:text-2xl": buttonSize === "default" },
    prevButtonClassName
  );
  return (
    <div
      className={`carouselWrapper relative ${className} ${
        pagination ? "dotsCircle" : "dotsCircleNone"
      }`}
    >
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Grid]}
        autoplay={autoplay}
        breakpoints={breakpoints}
        dir="right"
        pagination={pagination}
        grid={grid}
        navigation={
          navigation
            ? {
                prevEl: prevActivateId.length
                  ? `#${prevActivateId}`
                  : prevRef.current,
                nextEl: nextActivateId.length
                  ? `#${nextActivateId}`
                  : nextRef.current,
              }
            : {}
        }
        {...props}
      >
        {children}
      </Swiper>
      {Boolean(navigation) && (
        <div
          className={`flex items-center w-full absolute top-2/4 z-10 ${buttonGroupClassName}`}
        >
          {prevActivateId.length > 0 ? (
            <div className={prevButtonClasses} id={prevActivateId}>
              <IoIosArrowBack />
            </div>
          ) : (
            <div ref={prevRef} className={prevButtonClasses}>
              <IoIosArrowBack />
            </div>
          )}

          {nextActivateId.length > 0 ? (
            <div className={nextButtonClasses} id={nextActivateId}>
              <IoIosArrowForward />
            </div>
          ) : (
            <div ref={nextRef} className={nextButtonClasses}>
              <IoIosArrowForward />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
