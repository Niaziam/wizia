import React, { useState } from 'react';  // Import useState
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);  // Add useState for isMenuOpen

	const menuItems = [
		'About Us',
		'Pricing',
		'Customers',
		'Solutions',
		'Book a Demo',
		'Contact Us',
	];

	const navItems = [
		'About Us',
		'Pricing',
		'Customers',
		'Solutions',
	];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className='bg-primary border-b-[1px] border-white' maxWidth='xl'>
			<NavbarContent>
				<NavbarBrand>
					<img src="Logo.png" alt="" />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-10" justify="center">
				{navItems.map(item => (
					<NavbarItem key={item}>
						<Link className="text-white" href="#">
							{item}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent justify="end">
				<Button radius='full' color="secondary" className='hidden lg:flex text-black font-semibold'>
					Book a Demo
				</Button>
				<Button radius='full' color="white" className='hidden lg:flex text-white font-semibold' variant="bordered">
					Contact us
				</Button>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color="primary"
							className="w-full"
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="sm:hidden text-white"
			/>
		</Navbar>
	);
};

export default Header;
