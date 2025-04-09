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
							<NavItem url="#">Home</NavItem>
							<NavItem url="#">About</NavItem>
							<NavItem url="#">Services</NavItem>
							<NavItem url="#">Projects</NavItem>
							<NavItem url="#">Careers</NavItem>
							<NavItem url="#">Contact</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Aximo" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
