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

      <Container>
        <div className="pt-4">
          <Breadcrumb />
        </div>
        <ContactInformation />
        <ContactMap />
      </Container>
    </>
  );
};

ContactPage.Layout = Layout;

export default ContactPage;
