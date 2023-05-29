import FooterLink from "@components/layout/footer/widget/footer-link";
import Information from "@components/layout/footer/widget/information";
import Payment from "@components/layout/footer/widget/payment";
import Copyright from "@components/layout/footer/widget/copyright";
import { footer } from "./data";
const { links, payments, socials } = footer;

const Footer = () => (
  // <footer
  //   className="pt-[64px] bg-[url('/images/hero/footer-bg.png')]"
  //    style={{ backgroundImage: `url(/images/hero/footer-bg.png)` }}
  // >
  <footer className="bg-[#fff7ec] pt-[64px]">
    <Information socials={socials} />
    <Payment payments={payments} />
    <FooterLink links={links} />
    <Copyright />
  </footer>
);

export default Footer;
