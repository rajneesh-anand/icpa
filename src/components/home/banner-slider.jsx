import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "@components/ui/carousel/slider";
import Container from "@components/ui/container";
import Link from "@components/ui/link";
import YoutubeIcon from "@assets/icons/youtube-icon";
import { siteSettings } from "@settings/site-settings";
import Image from "@components/ui/image";
import { footer } from "@data/footer";
const { socials } = footer;

const BannerSlider = ({ banner, className, contentClassName = "py-24" }) => {
  const channelId = siteSettings.youtube_channel_id;
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
          <Container className="bg-[url('/images/banner/banner-bg.jpg')]">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center py-8 lg:pb-12 gap-1">
              <div className="md:col-span-6 md:text-left text-center">
                <div className="md:ml-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-2 shadow-dropDown bg-gradient-to-r from-red-600 to-amber-800  rounded-sm">
                      <p className="uppercase transition-colors duration-300 px-6 md:px-3 py-2 font-semibold text-[12px] text-white ">
                        Registered Government of NCT of DELHI
                      </p>
                    </div>
                    <div className="mb-2 shadow-dropDown bg-gradient-to-r from-amber-800 to-red-600  rounded-sm lg:ml-1">
                      <p className="uppercase transition-colors duration-300 px-6 md:px-3 py-2 font-semibold text-[12px] text-white ">
                        ISO 9001:2015 Certified Institute
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h1 className="font-noto text-slate-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl max-w-4xl tracking-wider">
                      Learn from <span className="text-orange"> Experts</span>
                      {/* <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-yellow relative inline-block">
                        <span className="relative text-white">Experts</span>
                      </span>{" "} */}
                    </h1>
                  </div>

                  <div className="mt-4">
                    <h1 className="text-slate-600 font-semibold text-xl md:text-4xl md:!leading-[120%] lg:text-3xl  max-w-4xl ">
                      Anytime &amp; Anywhere at{" "}
                      <span className="text-orange"> Free of Cost</span>
                      {/* <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-orange relative inline-block">
                        <span className="relative text-white">
                          Free of Cost
                        </span>
                      </span>{" "} */}
                    </h1>
                  </div>
                  <div className="flex items-center mt-8 lg:mt-16">
                    <Link
                      href={`https://www.youtube.com/@icpacomputereducation`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center my-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-sm"
                    >
                      <YoutubeIcon color="#ffffff" className="mr-2" />
                      Subscribe ICPA Institute Youtube channel
                    </Link>

                    {/* {socials.map((item, index) => (
                      <Link
                        href={item.path ? item.path : "/"}
                        key={index}
                        className="mx-1 transition hover:opacity-80 social-link-vertical-align "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={item.height}
                          width={item.width}
                          className="align-middle transform scale-85 md:scale-100 "
                        />
                      </Link>
                    ))} */}
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 mt-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5">
                    <div className="grid grid-cols-1 gap-4">
                      <img
                        src="/images/banner/b1.jpg"
                        className="rounded-lg"
                        alt="banner-1"
                      />

                      <div className="ml-auto">
                        <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-7">
                    <div className="grid grid-cols-1 gap-4">
                      <img
                        src="/images/students/12.jpeg"
                        className="rounded-lg"
                        alt="banner-2"
                        height={480}
                        width={280}
                      />
                      <img
                        src="/images/students/20.jpeg"
                        className="rounded-lg"
                        alt="banner-2"
                        height={450}
                        width={280}
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
