import React from "react";
import HeroArea from "./hero-area";
import ContactForm from "./contact-form";
import Container from "@components/ui/container";

export const BannerArea = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/banner/bg.jpg"
          alt="build your website image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-indigo-100 w-full h-full opacity-90"></div>
      </div>

      <Container className="py-8 flex flex-col lg:flex-row  lg:justify-between">
        <HeroArea />
        <ContactForm />
      </Container>
    </div>
    // <Container className="bg-[url('/images/banner/hero-bg.jpg')] bg-cover bg-no-repeat py-8 flex flex-col lg:flex-row  lg:justify-between ">
    //   <HeroArea />
    //   <ContactForm />
    // </Container>
  );
};
