import React, { useState } from "react";
import Container from "@components/ui/container";
import Layout from "@components/layout";
import Seo from "@components/seo/seo";
import ContactInformation from "@components/contact/contact-information";
// import ContactForm from "@components/contact/contact-form";
import Breadcrumb from "@components/ui/breadcrumb";
import ContactMap from "@components/contact/map";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact ICPA Institute"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="contact"
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
                <h2 className="text-white text-3xl">Contact Us</h2>
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

      <Container className="py-8">
        {/* <div className="pt-4">
          <Breadcrumb />
        </div> */}
        <ContactInformation />
        <ContactMap />
      </Container>
    </>
  );
};

ContactPage.Layout = Layout;

export default ContactPage;
