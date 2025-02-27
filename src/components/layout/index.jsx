import { useEffect } from "react";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full min-h-[32px] py-1 px-4 md:px-6 lg:px-8 flex items-center justify-center relative bg-indigo-900">
        <p className="text-[12px] lg:text-[14px] tracking-wide font-medium text-white uppercase">
          Are you confused about right course for better job opportunities ? Get
          free consultation by Vinay Sir +91-7011898821 and make your future
          bright
        </p>
      </div>

      <Header />
      <main
        style={{
          WebkitOverflowScrolling: "touch",
        }}
        // className="bg-gradient-to-r from-[#ebeff8] to-[#f8f4ec]"
        className="backgroundBanner"
      >
        {children}
      </main>
      <Footer />
      <WhatsAppWidget
        phoneNumber="919999210504"
        companyName="ICPA Institute"
        message="Hello! 👋🏼 What can we do for you?"
      />
    </div>
  );
};

export default Layout;
