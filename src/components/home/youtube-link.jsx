import React from "react";
import Link from "@components/ui/link";
import Image from "next/image";
import { siteSettings } from "@settings/site-settings";
import Container from "@components/ui/container";

const YoutubeLink = () => {
  const channelId = siteSettings.youtube_channel_id;
  return (
    <Container>
      <div className="text-center my-16">
        <div className="relative">
          <Link
            href={`https://www.youtube.com/channel/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/social/youtube.svg"
              alt="youtube icon"
              height={104}
              width={104}
            />
          </Link>
        </div>

        <div>
          <Link
            href={`https://www.youtube.com/channel/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:border lg:border-rose-500 py-4 px-8 rounded bg-gradient-to-r from-orange  to-rose-500 inline-block text-white font-medium"
          >
            Join / Subscribe our Youtube channel for latest courses updates ,
            career councelling &amp; trainings
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default YoutubeLink;
