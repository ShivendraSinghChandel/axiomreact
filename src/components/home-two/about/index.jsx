import { motion } from "framer-motion";
import ThumbImg from "../../../assets/images/v2/about3.png";

function About() {
	return (
		<div className="aximo-about-section bg-orange">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className=" clash-grotesk">
						<h2>WELCOME TO IBI Groups</h2>
						<h3>One of the Leading Security Companies in India</h3>
							<p>
							Founded in 2003, IBI Security provides proactive security services to the India's wide range of customers in a variety of industries and customer segments. IBI Security has earned its reputation as a highly dependable choice for security services within the India.

							</p>
						</div>
					</div>
					<div className="col-lg-5">
						<motion.div
							initial={{
								opacity: 0,
								rotate: 135,
							}}
							whileInView={{
								opacity: 1,

								rotate: -5,

								transition: {
									duration: 1,
									type: "spring",
									stiffness: 70,
								},
							}}
							className="aximo-thumb"
							id="rotatetwo"
						>
							<img src={ThumbImg} alt="ThumbImg" />
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
