import React from "react";
import HeroArea from "./hero-area";
import ContactForm from "./contact-form";
import Container from "@components/ui/container";

export default function BannerArea() {
  return (
    <Container className="bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat py-8 flex flex-col lg:flex-row  lg:justify-between">
      <HeroArea />
      <ContactForm />
    </Container>
  );
}
