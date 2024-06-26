// import LocationIcon from "@assets/icons/location";
// import PhoneIcon from "@assets/icons/phone";
// import MailIcon from "@assets/icons/mail";
import CallIcon from "@assets/icons/call";
import MessageIcon from "@assets/icons/message";
import PinIcon from "@assets/icons/pin";

const ContactInformation = () => {
  return (
    // <div className="flex flex-col lg:flex-row justify-center items-center px-5 py-[64px] ">
    //   <div className="w-full md:w-1/3  mb-3 text-center">
    //     <div className="flex justify-center mb-1">
    //       <LocationIcon className="w-12 lg:w-13 xl:w-[60px] h-12 lg:h-13 xl:h-[60px] " />
    //     </div>

    //     <div className="lg:ps-3 2xl:ps-4 mt-4 lg:mt-0">
    //       <h4 className="mb-2 lg:mb-2.5 font-bold">ICPA Institute Location</h4>
    //       <p className="text-skin-muted text-sm leading-7 lg:leading-[27px] lg:text-15px mb-1">
    //         B-1829 , VedusOne Academy Building
    //       </p>
    //       <p className="text-skin-muted text-sm leading-7 lg:leading-[27px] lg:text-15px mb-1">
    //         Shastri Nagar , Delhi 110052
    //       </p>
    //     </div>
    //   </div>
    //   <div className="w-full md:w-1/3  mb-3 text-center">
    //     <div className="flex justify-center mb-1">
    //       <PhoneIcon className="w-12 lg:w-13 xl:w-[60px] h-12 lg:h-13 xl:h-[60px] " />
    //     </div>

    //     <div className="lg:ps-3 2xl:ps-4 mt-4 lg:mt-0">
    //       <h4 variant="mediumHeading" className="mb-2 lg:mb-2.5 font-bold">
    //         Call Us Anytime
    //       </h4>
    //       <p>( +91 ) 8810436602</p>
    //     </div>
    //   </div>
    //   {/*
    //   <div className="w-full md:w-1/3  mb-3 text-center">
    //     <div className="flex justify-center mb-1">
    //       <MailIcon className="w-12 lg:w-13 xl:w-[60px] h-12 lg:h-13 xl:h-[60px] " />
    //     </div>

    //     <div className="lg:ps-3 2xl:ps-4 mt-4 lg:mt-0">
    //       <Heading variant="mediumHeading" className="mb-2 lg:mb-2.5 font-bold">
    //         Send Email @
    //       </Heading>
    //       <p className="mb-1">
    //         <a
    //           href="mailto: studentsupport@vedusone.com"
    //           className="text-skin-muted text-sm leading-7 lg:leading-[27px] lg:text-15px"
    //         >
    //           studentsupport@vedusone.com
    //         </a>
    //       </p>
    //       <p>
    //         <a
    //           href="mailto:vedusone@gmail.com"
    //           className="text-skin-muted text-sm leading-7 lg:leading-[27px] lg:text-15px"
    //         >
    //           vedusone@gmail.com
    //         </a>
    //       </p>
    //     </div>
    //   </div> */}
    // </div>
    <div className="flex justify-center mt-4 mb-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center px-4 py-4 lg:border-y-2 lg:border-y-orange max-w-[980px]">
        <div className="flex ml-4 lg:ml-0">
          <div className=" flex justify-center items-center h-[48px] w-[48px] rounded-full  bg-white ">
            <CallIcon color="#ff6652" />
          </div>
          <div className="footer-widget-info-text ml-3">
            <label>Phone</label>
            <a href="tel:+917011898821">(+91) 701 189 88-21</a>
          </div>
        </div>
        <div className="flex ml-4">
          <div className=" flex justify-center items-center h-[48px] w-[48px] rounded-full  bg-white ">
            <MessageIcon color="#ff6652" />
          </div>
          <div className="footer-widget-info-text ml-3">
            <label>Email</label>
            <a href="mailto:theicpaglobal@gmail.com">theicpaglobal@gmail.com</a>
          </div>
        </div>
        <div className="flex ml-4 items-center">
          <div className=" flex justify-center items-center h-[48px] w-[48px] rounded-full  bg-white ">
            <PinIcon color="#ff6652" />
          </div>
          <div className="footer-widget-info-text ml-3">
            <label>Address</label>
            <a href="#">B-1619, Shastri Nagar , New Delhi 110052</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
