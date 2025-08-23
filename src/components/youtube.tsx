import YouTube from "react-youtube";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const opts: {
    width: string;
    height: string;
    playerVars: { autoplay?: 0 | 1 };
  } = {
    width: "100%",
    height: "400",
    playerVars: {
      autoplay: 0 as 0,
    },
  };

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "visible",
        maxWidth: "100%",
        marginBottom: "20px",
      }}
    >
      <YouTube
        videoId={videoId}
        opts={opts}
        title={title || "YouTube video"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
