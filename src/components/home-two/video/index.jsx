import BgVideo from "../../../assets/videos/bg.mp4"; // Make sure the file exists

function Video() {
	return (
		<div className="aximo-video-section video-wrapper">
			<video
				className="video-bg"
				src={BgVideo}
				autoPlay
				muted
				loop
				playsInline
			></video>

			<div className="video-overlay-content">
				{/* Optional content over video can go here */}
			</div>
		</div>
	);
}

export default Video;
