import { Link } from "react-router-dom";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import BgImage from "../../../assets/images/about/group.jpg"; // React-compatible path

function Hero() {
	return (
		<div
			className="hero-wrapper"
			style={{
				backgroundImage: `url(${BgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed", // Parallax effect
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="overlay" />
			<div className="aximo-hero-content5">
				<h1>A Legacy of Trust and Innovation</h1>
			</div>
		</div>
	);
}

export default Hero;
