import Layout from "@components/layout";
import Seo from "@components/seo/seo";
import { useState, useEffect } from "react";
import CourseCard from "@components/home/course-card";
import { courseData } from "@data/course";
import Container from "@components/ui/container";

export default function AboutUsPage() {
  const [data, setData] = useState();

  useEffect(() => {
    const filterData = courseData.filter((item) => item.course_type === "free");
    setData(filterData);
  }, []);

  return (
    <>
      <Seo
        title="About Us"
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
                <h2 className="text-white text-3xl">About ICPA Institute</h2>
                <div className="h-0.5 bg-red-500 w-[160px] mx-auto"></div>
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

      <section className="section mt-4 mb-16 ">
        <Container className="mt-4">
          <div className="grid lg:grid-cols-3 gap-7">
            <div>
              <div className="border rounded-md dark:bg-zinc-900/20 dark:border-zinc-700/50">
                <div className="p-6 text-center">
                  <img
                    src="/images/banner/b1.jpg"
                    alt=""
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                  <h6 className="text-lg mb-0 mt-4 dark:text-white">
                    Vinay Gupta
                  </h6>
                  <p className="text-gray-400 dark:text-gray-300/60 mb-4">
                    ICPA Institute (Head)
                  </p>
                  <div className="inline-flex gap-2">
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="flex w-10 h-10 justify-center items-center bg-gray-100 dark:bg-zinc-700/30 dark:text-white rounded-full"
                      >
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="flex w-10 h-10 justify-center items-center bg-gray-100 dark:bg-zinc-700/30 dark:text-white rounded-full"
                      >
                        <i className="mdi mdi-whatsapp"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="flex w-10 h-10 justify-center items-center bg-gray-100 dark:bg-zinc-700/30 dark:text-white rounded-full"
                      >
                        <i className="mdi mdi-phone"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="border rounded-md dark:bg-zinc-900/20 dark:border-zinc-700/50">
                <div className="p-6">
                  <div>
                    <h6 className="text-lg font-semibold mb-3 dark:text-white">
                      About Me
                    </h6>
                    <p className="text-gray-400 dark:text-gray-300/60 mb-2">
                      Very well thought out and articulate communication. Clear
                      milestones, deadlines and fast work. Patience. Infinite
                      patience. No shortcuts. Even if the client is being
                      careless. Some quick example text to bmdid on the card
                      title and bulk the card's content Moltin gives you
                      platform.
                    </p>
                    <p className="text-gray-400 dark:text-gray-300/60 mb-0">
                      As a highly skilled and successfull product development
                      and design specialist with more than 4 Years of My
                      experience lies in successfully conceptualizing,
                      designing, and modifying consumer products specific to
                      interior design and home furnishings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

AboutUsPage.Layout = Layout;
