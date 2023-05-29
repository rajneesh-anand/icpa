import React from "react";
import ReactPlayer from "react-player/youtube";

function VideoPlayer({ videoId }) {
  // const videoURL = "https://www.youtube.com/watch?v=" + videoId;
  return (
    <ReactPlayer
      url={videoId}
      playing={true}
      // onEnded={props.onEnd}
      config={{
        youtube: {
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
        },
      }}
      width="100%"
      height="100%"
    />
  );
}

export default VideoPlayer;
