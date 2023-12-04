import YtHelper from "youtube-player";
import { FC, useEffect, useRef } from "react";

type Props = {
  videoId: string;
  options?: object;
  className?: string; // Add className to the Props type
};

export const YoutubePlayer: FC<Props> = ({ videoId, options, className }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      YtHelper(videoRef.current, {
        videoId,
        playerVars: options,
      });
    }
  }, [options, videoId]);

  return <div ref={videoRef} className={className}></div>; // Use className here
};
