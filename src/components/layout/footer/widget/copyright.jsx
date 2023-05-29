import Container from "@components/ui/container";
import Image from "@components/ui/image";
import { siteSettings } from "@settings/site-settings";

const year = new Date().getFullYear();
const Copyright = ({ payment }) => {
  return (
    <div className="text-center mb-4 py-2 border-t border-t-gray-300">
      <p className="text-skin-base text-sm leading-7 lg:leading-[27px] lg:text-15px">
        &copy;&nbsp; copyright {year}&nbsp;
        <a
          className="text-skin-primary transition-colors duration-200 ease-in-out hover:text-green-700"
          href={siteSettings.author.websiteUrl}
        >
          {siteSettings.author.name}
        </a>
        &nbsp; all rights reserved
      </p>

      {payment && (
        <ul className="flex flex-wrap justify-center items-center space-l-4 sm:space-l-5 lg:space-l-7 -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
          {payment?.map((item) => (
            <li
              className="mb-2 md:mb-0 mx-1.5 transition hover:opacity-80 inline-flex"
              key={`payment-list--key${item.id}`}
            >
              <a
                href={item.path ? item.path : "/"}
                target="_blank"
                className="inline-flex"
                rel="noreferrer"
              >
                <Image
                  src={item.image}
                  alt={t(item.name)}
                  height={item.height}
                  width={item.width}
                />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Copyright;
