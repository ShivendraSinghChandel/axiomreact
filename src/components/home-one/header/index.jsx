import React, { useEffect, useState } from "react";
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`site-header site-header--menu-center aximo-header-section aximo-header2 ${
				isScrolled ? "scrolled" : "transparent"
			}`}
			id="sticky-menu"
		>
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="home-two">Home</NavItem>
							<NavItem url="about-us">About</NavItem>
							<NavItem url="service">Services</NavItem>
							{/* <NavItem url="portfolio-two">Projects</NavItem> */}
							<NavItem url="career">Careers</NavItem>
							<NavItem url="contact-us">Contact</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="IBI Group" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
