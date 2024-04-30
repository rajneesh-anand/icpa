import { useState, useEffect } from "react";
import Image from "@components/ui/image";
import Container from "@components/ui/container";

export const CourseImage = () => {
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
                <h2 className="text-white text-3xl">Our Courses</h2>
                <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
                <p className="text-gray-300/90">
                  Job oriented courses for working professional and college
                  students @ very affordable price
                </p>
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

      <Container className="mt-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a1.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a2.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          {/* <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a3.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div> */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a4.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a5.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a6.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a7.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a8.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a9.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a10.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a11.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a12.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a13.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a14.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a15.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a16.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a17.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a18.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a19.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a20.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a21.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <img
              src="/images/course/a22.jpg"
              alt="course image"
              layout="fill"
              quality={100}
              className="object-fill shadow-md rounded-sm"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
