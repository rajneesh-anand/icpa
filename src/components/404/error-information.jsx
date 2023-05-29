import Container from "@components/ui/container";
import Image from "next/image";
const ErrorInformation = () => {
  // const backgroundThumbnail = "/images/404-bg.png";
  const errorThumbnail = "/images/404.svg";
  return (
    <Container>
      <div className="px-12 py-16 sm:py-20 lg:py-24 xl:py-32 text-center">
        <Image
          src={errorThumbnail}
          alt="error-heading"
          width={150}
          height={150}
        />

        <h2 className="text-3xl  2xl:text-6xl font-bold  pt-5 xl:pt-9">
          Page Not Found
        </h2>
        <p className="text-15px md:text-base 2xl:text-[18px] leading-7 md:leading-8 pt-4 font-medium">
          We're sorry! This page is currently unavailable. We request you to
          please try again later
        </p>
      </div>
    </Container>
  );
};

export default ErrorInformation;
