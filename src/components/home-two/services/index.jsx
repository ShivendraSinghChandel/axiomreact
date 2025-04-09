import StarImg from "../../../assets/images/v2/shape-star.png";
import Award1Img from "../../../assets/images/v2/h-thumb1.png";
import Award2Img from "../../../assets/images/v2/h-thumb2.png";
import Award3Img from "../../../assets/images/v2/h-thumb3.png";
import Award4Img from "../../../assets/images/v2/h-thumb4.png";
import Award5Img from "../../../assets/images/v2/h-thumb5.png";
import ServiceCard from "./ServiceCard";

const awardsData = [
	{
		id: crypto.randomUUID(),
		title: "Top Security Innovator 2024",
		description:
			"Recognized for pioneering innovation in advanced surveillance and AI-driven threat detection systems.",
		img: Award1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Best Risk Management Firm",
		description:
			"Awarded for delivering outstanding risk assessment strategies to global enterprises and governments.",
		img: Award2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Cyber Excellence Award",
		description:
			"Honored for excellence in cybersecurity services and digital infrastructure protection.",
		img: Award3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "National Safety Award",
		description:
			"Received for exceptional physical security services across critical infrastructure facilities.",
		img: Award4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Client Satisfaction Gold Badge",
		description:
			"Rated #1 by clients for service quality, responsiveness, and industry-leading solutions.",
		img: Award5Img,
	},
];

function Awards() {
	return (
		<div className="section aximo-section-padding position-relative">
			<div className="container">
				<div className="aximo-section-title center clash-grotesk">
					<h2>Our Awards & Recognition</h2>
				</div>
			</div>
			<div className="aximo-service-increase-wrap">
				{awardsData.map((award) => (
					<ServiceCard key={award.id} service={award} />
				))}
			</div>
		</div>
	);
}

export default Awards;
