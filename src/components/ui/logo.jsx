import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";
import useWindowSize from "@utils/use-window-size";

const Logo = ({ className, href = siteSettings.logo.href, ...props }) => {
  const windowSize = useWindowSize();
  return (
    <Link
      href={href}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      <Image
        src={siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={windowSize.width > 768 ? 40 : 32}
        width={windowSize.width > 768 ? 240 : 72}
        layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
