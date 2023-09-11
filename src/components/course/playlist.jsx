import React, { useState } from "react";
import Link from "@components/ui/link";
import VideoPlayer from "@components/player";
import cn from "classnames";
import { Disclosure, Transition } from "@headlessui/react";
import ArrowDown from "@assets/icons/arrow";

function MediaPlayer({ mediaId }) {
  return <VideoPlayer videoId={mediaId} />;
}

export default function PlayList({ mediaData }) {
  const [playlistId, setPlaylistId] = useState(
    mediaData[0].unit_chapters[0].youtube_video_link
  );
  const setPlaylisthandler = (videoId) => {
    setPlaylistId(videoId);
  };
  return (
    <div className="grid grid-cols-12 my-2 ">
      <div className="lg:col-span-8 col-span-12 h-screen relative">
        {playlistId != "" && <MediaPlayer mediaId={playlistId} />}
      </div>
      <div className="lg:col-span-4 col-span-12 h-screen overflow-y-scroll ml-2 bg-indigo-100 ">
        {mediaData &&
          mediaData.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="w-full mx-auto shadow-category bg-skin-fill rounded group">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 bg-indigo-200 text-base font-medium text-start text-skin-base focus:outline-indigo-200 mb-1">
                        <span
                          className={cn(
                            "text-sm font-medium leading-relaxed text-heading pr-2"
                            // {
                            //   "md:text-base": variant === "gray",
                            //   "md:text-base lg:text-lg":
                            //     variant === "transparent",
                            // }
                          )}
                        >
                          {item.unit_name}
                        </span>
                        <ArrowDown
                          className={` text-[14px] text-skin-base text-opacity-60 group-hover:text-opacity-100 -mr-2 lg:-mr-1.5 flex-shrink-0 ${
                            open ? "transform rotate-180" : ""
                          }`}
                        />
                      </Disclosure.Button>

                      <Transition
                        show={open}
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-5 opacity-0"
                        enterTo="transform scale-10 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-5 opacity-0"
                      >
                        {open && (
                          <Disclosure.Panel static>
                            <div className="px-4 pb-2 ">
                              {item.unit_chapters.map((itm, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center pt-2"
                                >
                                  <button
                                    onClick={() =>
                                      setPlaylisthandler(itm.youtube_video_link)
                                    }
                                    className=" hover:bg-orange text-rose-600 hover:text-white py-1 px-4 rounded inline-flex items-center"
                                  >
                                    Play
                                    <i className="fi fi-rr-play-alt  font-semibold text-[18px] h-4 w-4 ml-1"></i>
                                  </button>
                                  <p className="ml-2 text-[14px] font-medium">
                                    {itm.chapter_name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        )}
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          ))}
        {/* {mediaData.items.map(({ id, snippet = {} }) => {
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { medium } = thumbnails;
          return (
            <div key={resourceId.videoId} className="flex bg-indigo-100 mb-2">
              <button
                onClick={() => setPlaylisthandler(resourceId.videoId)}
                className="bg-indigo-100 hover:bg-indigo-200 text-rose-500 hover:text-white py-1 px-4 rounded inline-flex items-center"
              >
                Play
                <i className="fi fi-rr-play-alt  font-semibold text-[18px] h-4 w-4 ml-1"></i>
              </button>
              <p>{title}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
