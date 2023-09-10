import React from "react";

import Container from "@components/ui/container";

const StudentsArea = () => {
  return (
    <>
      <section className="py-16 mt-8">
        <Container>
          <div className="flex justify-center">
            <div className="space-y-5 text-center">
              <h1 className="text-2xl text-gray-800 uppercase tracking-wide font-semibold">
                OUR STUDENTS
              </h1>
              <div className="h-0.5 bg-red-500 w-40 mx-auto"></div>
              {/* <p className="text-gray-700 pb-8 ">
                ICPA Institute provides quality education at affordable price.
                We have been serving the students for more than 10 years.
              </p> */}
            </div>
          </div>
        </Container>
        <Container className="mt-4">
          <section>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/1.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/2.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/3.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/4.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/5.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/6.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/7.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/8.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/9.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/10.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/11.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/12.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/13.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/14.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/15.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/16.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/17.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/18.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/19.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/20.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
              <div className="col-span-6 lg:col-span-4 shadow-md rounded-sm bg-indigo-100 bg-opacity-25 ">
                <img
                  src="/images/students/21.jpeg"
                  alt="student image"
                  layout="fill"
                  quality={100}
                  className="object-fill rounded-sm h-48 lg:h-64 w-full"
                />
              </div>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default StudentsArea;
