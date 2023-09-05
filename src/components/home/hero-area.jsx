import React from "react";
import { siteSettings } from "@settings/site-settings";
import Link from "@components/ui/link";
import YoutubeIcon from "@assets/icons/youtube-icon";

export default function HeroArea() {
  const channelId = siteSettings.youtube_channel_id;
  return (
    <div className="lg:px-8 lg:w-2/3 text-center lg:text-left relative">
      <p className="mt-8 transition-colors duration-300 nc-Badge  inline-flex px-8 py-2 rounded-full font-semibold text-md  text-indigo-700 bg-white ">
        Recognised by Indian Government
      </p>

      <div className="mt-8">
        <h1 className="font-noto text-slate-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl max-w-4xl ">
          Learn from Experts
        </h1>
      </div>
      <div className="mb-8">
        <h1 className="text-slate-600 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-3xl  max-w-4xl ">
          Anytime &amp; Anywhere at Free of Cost
        </h1>
      </div>

      {/* <div className="border-t bg-orange h-[2.5px]"></div> */}
      <Link
        href={`https://www.youtube.com/channel/${channelId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center my-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-sm"
      >
        <YoutubeIcon color="#ffffff" className="mr-2" />
        Subscribe ICPA Institute Youtube channel
      </Link>
      {/* <img
        src="/images/icon/iso.png"
        alt="iso image"
        height={112}
        width={112}
      /> */}
    </div>
  );
}
