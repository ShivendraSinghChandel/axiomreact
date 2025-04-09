import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

// Images
import Img1 from "../../../assets/images/v2/1.jpg";
import Img2 from "../../../assets/images/v2/2.jpg";
import Img3 from "../../../assets/images/v2/3.jpg";
import Img4 from "../../../assets/images/v2/4.jpg";
import Img5 from "../../../assets/images/v2/5.jpg";
import Img6 from "../../../assets/images/v2/6.jpg";
import Img7 from "../../../assets/images/v2/7.jpg";
import Img8 from "../../../assets/images/v2/8.jpg";
import Img9 from "../../../assets/images/v2/9.jpg";
import Img10 from "../../../assets/images/v2/10.jpg";
import Img11 from "../../../assets/images/v2/11.jpg";
import Img12 from "../../../assets/images/v2/12.jpg";
import BgImg from "../../../assets/images/about/mumbai.jpg"; // your background image

// Swiper data
const imagePaths = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12];
const sliderData = [...imagePaths, ...imagePaths].map((img) => ({
	id: crypto.randomUUID(),
	img,
}));

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		768: { slidesPerView: 3 },
		992: { slidesPerView: 4 },
		1200: { slidesPerView: 5 },
		1400: { slidesPerView: 6 },
	},
};

function BrandLogo() {
	return (
		<div
			className="aximo-brandlogo-section bg-with-overlay"
			style={{
				backgroundImage: `url(${BgImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
				position: "relative",
			}}
		>
			{/* Overlay */}
			<div className="overlay" />

			{/* Title */}
			<div className="aximo-brandlogo-title">
				<h3>Some of Our Clients</h3>
			</div>

			{/* Slider */}
			<div className="swiper aximo-auto-slider">
				<Swiper {...swiperSettings}>
					{sliderData.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="aximo-brandlogo-item">
								<img src={item.img} alt="brand logo" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default BrandLogo;
