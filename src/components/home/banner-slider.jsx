import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "@components/ui/carousel/slider";
import Container from "@components/ui/container";
import Link from "@components/ui/link";

const BannerSlider = ({ banner, className, contentClassName = "py-24" }) => {
  return (
    <div>
      <Carousel
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={false}
      >
        <SwiperSlide>
          <Container>
            <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-4 mb-8 gap-[30px]">
              <div className="md:col-span-6 md:text-left text-center mt-4 lg:mt-24">
                <div className="md:ml-8">
                  <h4 className="font-bold leading-normal text-4xl lg:text-5xl mb-5 relative">
                    Learn with{" "}
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow relative inline-block">
                      <span className="relative text-white">Experts</span>
                    </span>{" "}
                  </h4>
                  <h4 className="font-bold leading-normal text-4xl lg:text-5xl mb-5 relative">
                    {" "}
                    Anytime &amp; Anywhere
                  </h4>

                  <p className="text-slate-400 text-lg max-w-xl">
                    We collaborate with people, teams, and businesses to develop
                    design systems, strategies, and processes to do a better
                    creative work everyday.
                  </p>
                  {/* <div className="text-center mt-8">
                    <Link
                      href="/auth/register"
                      className="inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Get Started
                    </Link>
                  </div> */}
                </div>
              </div>

              <div className="md:col-span-6 mt-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5">
                    <div className="grid grid-cols-1 gap-4">
                      <img
                        src="/images/banner/banner-01.png"
                        className="rounded-lg"
                        alt=""
                      />

                      <div className="ml-auto">
                        <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-7">
                    <div className="grid grid-cols-1 gap-4">
                      <img
                        src="/images/banner/banner-03.jpg"
                        className="rounded-lg"
                        alt="photo-2"
                        height={450}
                        width={250}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-4 gap-[30px]">
              <div className="md:col-span-6 md:text-left text-center">
                <div className="md:ml-8">
                  <p className="text-indigo-600 font-medium mb-4">
                    We are a very dedicated team
                  </p>
                  <h4 className="font-bold lg:leading-normal leading-normal text-2xl lg:text-3xl mb-4">
                    We are a full-service digital agency
                  </h4>
                  <p className="text-slate-400 text-lg max-w-xl">
                    We collaborate with people, teams, and businesses to develop
                    design systems, strategies, and processes to do a better
                    creative work everyday.
                  </p>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5">
                    <div className="grid grid-cols-1 gap-4">
                      <img
                        src="/images/banner/banner-01.jpg"
                        className="shadow rounded-lg"
                        alt=""
                      />

                      <div className="ml-auto">
                        <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-7">
                    <div className="grid grid-cols-1 gap-4">
                      <img
                        src="/images/banner/banner-01.jpg"
                        className="shadow rounded-lg"
                        alt="photo-2"
                        height={450}
                        width={250}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
