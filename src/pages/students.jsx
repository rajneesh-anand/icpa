import Layout from "@components/layout";
import Seo from "@components/seo/seo";
import React from "react";
import Container from "@components/ui/container";
import useMasonry from "@utils/use-masonry";
import { studentImage } from "@data/constant";
import { FadeIn, FadeInStagger } from "@components/common/fade-in";

export default function StudentsPage() {
  const masonryContainer = useMasonry();

  return (
    <>
      <Seo
        title="Our Students"
        description="Job oriented online courses for college students and working professional "
      />
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
                <h2 className="text-white text-3xl tracking-wide uppercase">
                  Our Proud Students
                </h2>
                <div className="h-0.5 bg-red-500 w-[320px] mx-auto"></div>
              </div>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0">
          <img
            src="/images/bg-pattern-light.png"
            alt="bg-pattern-light"
            className="block dark:hidden"
          />
          <img
            src="/images/bg-pattern-dark2.png"
            alt="bg-pattern-light"
            className="hidden dark:block"
          />
        </div>
      </section>
      <Container className="my-8">
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
}

StudentsPage.Layout = Layout;
