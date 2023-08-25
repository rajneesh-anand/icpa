import React from "react";
import Link from "@components/ui/link";
import { siteSettings } from "@settings/site-settings";
import Image from "next/image";

export default function YoutubeButton() {
  const channelId = siteSettings.youtube_channel_id;
  return (
    <div className="flex items-center py-1 px-4 border border-orange rounded-sm">
      <div className="mr-4">
        <Link
          href={`https://www.youtube.com/channel/${channelId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/social/youtube.svg"
            alt="youtube icon"
            height={32}
            width={32}
          />
        </Link>
      </div>

      <Link
        href={`https://www.youtube.com/channel/${channelId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="uppercase text-[14px]"
      >
        Subscribe ICPA Institute Youtube channel
      </Link>
    </div>
  );
}
