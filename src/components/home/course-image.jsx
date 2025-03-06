import Container from "@components/ui/container";
import { FadeIn, FadeInStagger } from "@components/common/fade-in";
import { courseImage } from "@data/constant";
import useMasonry from "@utils/use-masonry";

export const CourseImage = () => {
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
                  Our Courses
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
        <FadeInStagger
          ref={masonryContainer}
          className="grid items-start gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6"
        >
          {courseImage.map((item, index) => (
            <FadeIn key={item.title}>
              <img
                src={item.imageSrc}
                alt={item.title}
                layout="fill"
                quality={100}
                className="object-cover rounded-md"
              />
            </FadeIn>
          ))}
        </FadeInStagger>

        {/* <FadeInStagger faster className="grid grid-cols-12 gap-2 ">
          {courseImage.map((item, index) => (
            <FadeIn
              key={item.title}
              className="col-span-12 md:col-span-6 lg:col-span-4 shadow-md  "
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                layout="fill"
                quality={100}
                className="object-cover rounded-md"
              />
            </FadeIn>
          ))}
        </FadeInStagger> */}
      </Container>
    </>
  );
};
