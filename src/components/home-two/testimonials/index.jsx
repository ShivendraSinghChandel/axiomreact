import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
// Reusing same images or you can import more: t_thumb4.png, etc.
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am impressed with their innovative ideas and forward-thinking approach. They have helped us embrace digital transformation.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"Aximo has been a game-changer for our startup. Their team guided us through the development of a custom software solution perfectly suited us.",
		author: "Willium Joe",
		designation: "VP of Marketing",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"Their ability to understand our unique needs and provide tailored solutions. Their team is friendly, approachable & always ready to go the extra mile.",
		author: "Adrew Maslo",
		designation: "Head of X company",
		img: Thumb3Img,
	},
	// Additional Testimonials
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"Reliable, professional, and highly skilled — we are beyond satisfied with the results. I would recommend them without hesitation.",
		author: "Lisa Ray",
		designation: "Operations Manager",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"The team delivered beyond expectations. We saw immediate results from their marketing and business development strategies.",
		author: "Rahul Mehta",
		designation: "CEO, Mehta Group",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"Our collaboration was smooth and insightful. They truly act as partners in growth, not just service providers.",
		author: "Amira Elbaz",
		designation: "Founder, Elbaz Tech",
		img: Thumb3Img,
	},
];

function Testimonials() {
	return (
		<div className="bg-orange aximo-section-padding extra-side-margin">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="aximo-default-content clash-grotesk aximo-sticky">
							<h2>Appreciation from our loving clients</h2>
							<p>
								Its wonderful to hear that our clients appreciate our services! Client appreciation is
								valuable proof of the quality of our work.
							</p>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="aximo-testimonial-column">
							{testimonialsData.map((testimonial) => (
								<TestimonialCard key={testimonial.id} testimonial={testimonial} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
