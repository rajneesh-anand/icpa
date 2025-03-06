import React from "react";
import Container from "@components/ui/container";
import useMasonry from "@utils/use-masonry";
import { studentImage } from "@data/constant";

const StudentsArea = () => {
  const masonryContainer = useMasonry();
  return (
    <>
      <section className="py-28 relative">
        <div className="overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/banner/course-bg.jpg"
            alt="build your website image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-800 w-full h-full opacity-90"></div>
        </div>
        <Container>
          <div className="lg:flex justify-center">
            <div className="text-center relative">
              <div className="space-y-6">
                <h2 className="text-white text-3xl uppercase tracking-wide">
                  Photo Gallery
                </h2>
                <div className="h-0.5 bg-red-500 w-[224px] mx-auto"></div>
                <p className="text-gray-200">
                  Job oriented courses for working professional and college
                  students @ very affordable price
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container className="mt-4">
        <div
          ref={masonryContainer}
          className="grid items-start gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6"
        >
          {studentImage.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="student image"
              layout="fill"
              quality={100}
              className="object-fill rounded-sm w-full"
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default StudentsArea;
