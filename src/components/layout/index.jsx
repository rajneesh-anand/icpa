import { useEffect } from "react";
import BackToTop from "@components/scroll-top";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import { animationCreate } from "@utils/animate";
import { useSessionStorage } from "react-use";
import HighlightedBar from "@components/common/highlighted-bar";
import Link from "@components/ui/link";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const Layout = ({ children }) => {
  const [highlightedBar, setHighlightedBar] = useSessionStorage(
    "topbar",
    "false"
  );
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {highlightedBar !== "true" && (
        <HighlightedBar
          variant="purple"
          onClose={() => setHighlightedBar("true")}
          className="text-white"
        >
          <div className="text-[12px] lg:text-[14px] font-medium py-0.5 pr-6">
            <span>
              Are you confused about right course for better job opportunities ?
              Get free consultation By Vinay Sir
              {/* <Link
                href="/"
                className="inline-flex text-xs uppercase font-bold pl-1.5 items-center relative transition-all top-[1px] hover:opacity-80"
              >
                <span className="border-b border-[#460135] inline-block pb-0.5">
                  Learn More
                </span>
                <i className="fi fi-rr-arrow-circle-right"></i>
              </Link> */}
            </span>
          </div>
        </HighlightedBar>
      )}
      <Header />
      <main
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>

      <Footer />
      {/* <BackToTop /> */}
      <WhatsAppWidget
        phoneNumber="919999210504"
        companyName="ICPA Institute"
        message="Hello! 👋🏼 What can we do for you?"
      />
    </div>
  );
};

export default Layout;
