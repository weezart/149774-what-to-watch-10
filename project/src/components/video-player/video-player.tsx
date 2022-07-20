type VideoPlayerProps = {
  image: string;
  video: string;
};

function VideoPlayer({video, image}: VideoPlayerProps): JSX.Element {
  return (
    <video
      autoPlay
      muted
      src={video}
      className="player__video"
      poster={image}
    />
  );
}

export default VideoPlayer;
