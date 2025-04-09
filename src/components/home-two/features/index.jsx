import {
	default as Illustrator1Img,
	default as Illustrator2Img,
	default as Illustrator3Img,
} from "../../../assets/images/v2/illustrator1.png";
import Shape2Img from "../../../assets/images/v2/shape2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		title: "physical security",
		description:
			"By adopting and implementing strategies, we not only help survive but also thrive in the face of uncertainty.",
		img: Illustrator1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "facility management",
		description:
			"Our aim is to disrupt existing industries or create entirely new ones with our talents and innovative business ideas.",
		img: Illustrator2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "AI Integrated Security",
		description:
			"Growth is a central objective for us. We’ve also a strong emphasis on rapid growth and scaling business growth.",
		img: Illustrator3Img,
	},
];
function Features() {
	return (
		<div className="section bg-light2 aximo-section-padding3 position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title clash-grotesk">
							<h2>Our Services</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} index={index} className="col-xl-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Features;
