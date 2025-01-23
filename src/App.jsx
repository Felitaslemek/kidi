import React, { useState } from "react";
import profileIcon from "./assets/profile.png";
import ProductShowCase from "./components/ProductShowCase";
import Testimonial from "./components/Testimoni";
import End from "./components/lastSection";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Information from "./components/Information";
import Hero from "./components/Hero";

function App() {
	const [isSignupPageVisible, setIsSignupPageVisible] = useState(false);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	const openSignupPage = () => {
		setIsSignupPageVisible(true);
	};

	const closeSignupPage = () => {
		setIsSignupPageVisible(false);
	};

	return (
		<div className="min-h-screen bg-color_background_light overflow-x-hidden px-6 md:px-14 lg:px-20">
			{/* Navbar */}
			<nav className="bg-color_nuetral_100_light z-50 flex items-center justify-between px-6 py-3 rounded-2xl fixed left-6 right-6 mt-6 md:left-14 md:right-14 lg:left-20 lg:right-20">
				<h1 className="text-2xl font-semibold text-color_primary_500_light">
					Kedai Manang
				</h1>

				<div className="hidden lg:flex items-center font-normal text-color_nuetral_400_light gap-10 text-base mx-auto">
					{[
						{ label: "Lokasi", id: "location" },
						{ label: "Menu", id: "menu" },
						{ label: "Testimoni", id: "testimonials" },
						{ label: "Kontak", id: "contact" },
					].map((item, index) => (
						<button
							key={index}
							onClick={() => scrollToSection(item.id)}
							className="hover:text-color_primary_500_light transition duration-200 hover:scale-105">
							{item.label}
						</button>
					))}
				</div>

				{/* Profile Icon */}
				<div className=" sm:relative sm:top-auto sm:transform-none">
					<img
						src={profileIcon || "/placeholder.svg"}
						alt="Profile Icon"
						className="w-6 h-6 text-gray-100 hover:bg-blue-300 rounded-full cursor-pointer"
						onClick={openSignupPage}
					/>
				</div>
			</nav>

			{/* transisi ke sign up page nya*/}
			<div
				className={`fixed inset-0 bg-white z-50 transition-transform duration-0 ${
					isSignupPageVisible ? "translate-x-0" : "translate-x-full"
				}`}>
				<SignupPage onClose={closeSignupPage} />
			</div>


			{!isSignupPageVisible && (
				<>
					<div id="location">
						<Information />
					</div>

					<div className="mt-6">
						<Hero />
					</div>

					<div id="menu" className="mt-6">
						<ProductShowCase />
					</div>

					<div id="testimonials">
						<Testimonial />
					</div>

					<div className="mt-6">
						<End />
					</div>

					<div id="contact" className="mt-6">
						<div className="-mx-6 md:-mx-12">
							<Footer />
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
