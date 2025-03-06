import React from "react";
import HeroArea from "./hero-area";
import ContactForm from "./contact-form";
import Container from "@components/ui/container";

export const ContactArea = () => {
  return (
    <Container className="py-8 mt-8">
      <div className="flex justify-center">
        <div className="lg:w-2/3 space-y-5 text-center">
          <h1 className="text-2xl text-gray-800  tracking-wide font-medium uppercase">
            Find ICPA Institute on Google Map
          </h1>
          <div className="h-0.5 bg-red-500 w-[400px] mx-auto"></div>
          {/* <p className="text-gray-400 dark:text-gray-300/60">
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with faucibus sapien odio
            measurable results.
          </p> */}
        </div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
        <div className="lg:col-span-1 ">
          <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
            <div className="mb-6">
              <h1 className=" text-base font-medium mb-2 dark:text-white">
                Office Address 1:
              </h1>
              <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">
                4461 Cedar Street Moro, AR 72368
              </h1>
            </div>

            <div className="mb-6">
              <h1 className=" text-base font-medium mb-2 dark:text-white">
                Office Address 2:
              </h1>
              <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">
                2467 Swick Hill Street <br />
                New Orleans, LA 70171
              </h1>
            </div>

            <div className="mb-6">
              <h1 className=" text-base font-medium mb-2 dark:text-white">
                Office Address 3:
              </h1>
              <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">
                9:00AM To 6:00PM
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <ContactForm />
        </div>
      </div> */}
      <div className="py-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.871303491198!2d77.1795265!3d28.6756491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03cd035888b9%3A0x5dca567f9bead6bd!2sICPA%20Global%20Consultant!5e0!3m2!1sen!2sru!4v1694007853479!5m2!1sen!2sru"
          style={{ border: 0, width: "100%", height: "420px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};
