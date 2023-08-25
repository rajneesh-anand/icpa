import Link from "@components/ui/link";
import Logo from "@components/ui/logo";
import Image from "@components/ui/image";
import CallIcon from "@assets/icons/call";
import MessageIcon from "@assets/icons/message";
import PinIcon from "@assets/icons/pin";

const Information = ({ className, socials }) => {
  return (
    <>
      <div className="text-center">
        <Logo />
        {/* <p>ICPA Institute </p> */}
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center justify-center  ">
          {socials.map((item, index) => (
            <Link
              href={item.path ? item.path : "/"}
              key={index}
              className="mx-1 transition hover:opacity-80 social-link-vertical-align"
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
          ))}

          {/* <div className="border-l-2 border-l-gray-400 px-2 ml-2">
            <p className="font-medium">+91-750-649-6604</p>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center mt-4">
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
              <a href="mailto:support@icpainstitute.com">
                support@icpainstitute.com
              </a>
            </div>
          </div>
          <div className="flex ml-4 items-center">
            <div className=" flex justify-center items-center h-[48px] w-[48px] rounded-full  bg-white ">
              <PinIcon color="#ff6652" />
            </div>
            <div className="footer-widget-info-text ml-3">
              <label>Address</label>
              <a href="#">B Block, 1749, Shastri Nagar , New Delhi 110052</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
