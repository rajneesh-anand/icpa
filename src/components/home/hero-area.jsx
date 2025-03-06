import React from "react";
import Container from "@components/ui/container";
import Link from "@components/ui/link";
import YoutubeIcon from "@assets/icons/youtube-icon";
import Instagram from "@assets/icons/instagram";
import Youtube from "@assets/icons/youtube";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger } from "@components/common/fade-in";

export default function HeroArea() {
  return (
    <Container>
      <div className="grid md:grid-cols-12 grid-cols-1 pt-16 gap-8 ">
        <div className="md:col-span-7">
          <div className="flex flex-col md:flex-row items-center ">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-4 uppercase font-semibold text-[14px] md:text-xs text-red-600"
            >
              Registered Government of NCT of DELHI
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-4 md:ml-4 uppercase font-semibold text-[14px] md:text-xs text-red-600"
            >
              ISO 9001:2015 Certified Institute
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center md:text-start my-8"
          >
            <h1 className="uppercase leading-tight text-slate-900 font-semibold text-4xl  lg:text-[68px] max-w-4xl tracking-tight">
              Learn from <span className="text-orange"> Experts</span>
            </h1>
            <h1 className="text-slate-600 uppercase font-semibold text-xl md:text-2xl  lg:text-4xl  max-w-4xl tracking-tight ">
              Anytime &amp; Anywhere at{" "}
              <span className="animate-pulse tracking-wide inline bg-gradient-1 bg-clip-text text-transparent">
                Free of Cost
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap items-center justify-center md:justify-start"
          >
            <Link
              href="https://www.youtube.com/@icpacomputereducation"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mb-6 md:mr-6  inline-flex md:h-[60px] h-[48px] items-center rounded-md bg-black px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
            >
              <span className="mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed dark:border-[#BDBDBD]">
                Subscribe ICPA Youtube Channel
              </span>
              <span>
                <YoutubeIcon color="#ffffff" className="mr-2 h-8 w-8" />
              </span>
            </Link>
            <Link
              href="https://www.instagram.com/icpacomputereducation/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mb-6 inline-flex items-center py-4 text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <span className="md:mr-[18px] mr-[12px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-slate-200">
                <Instagram className="h-10 w-10" />
              </span>
              <span className="text-base font-medium">
                <span className="block text-sm"> Watch Video </span>Instagram
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="md:col-span-5 ">
          <FadeInStagger
            faster
            className="grid grid-cols-2 gap-3 h-3/4 md:mx-8
            "
          >
            <FadeIn className="relative overflow-hidden rounded">
              <img
                className="w-full object-cover"
                src="/images/banner/b1.jpg"
                alt="banner-1"
              />
            </FadeIn>

            <FadeIn className="relative overflow-hidden rounded">
              <img
                className="w-full object-fit"
                src="/images/students/stu-12.jpg"
                alt="banner-1"
              />
            </FadeIn>
            <FadeIn className="relative overflow-hidden rounded">
              <img
                className="w-full object-contain"
                src="/images/students/stu-20.jpg"
                alt="banner-1"
              />
            </FadeIn>
            <FadeIn className="relative overflow-hidden rounded">
              <img
                className="w-full"
                src="/images/students/stu-6.jpg"
                alt="banner-1"
              />
            </FadeIn>
          </FadeInStagger>
        </div>
      </div>
    </Container>
  );
}
