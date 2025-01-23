import React, { useState } from "react";
import profileIcon from "./assets/profile.png";
import ProductShowCase from "./pages/ProductShowCase";
import Testimonial from "./pages/Testimoni";
import End from "./pages/lastSection";
import Footer from "./pages/Footer";
import SignupPage from "./components/SignupPage";
import Information from "./pages/Information";
import Hero from "./pages/Hero";
import ErrorBoundary from "./err/errorBoundary";

function App() {
	const [
		isSignupPageVisible,
		setIsSignupPageVisible,
	] = useState(false);

	// Fungsi untuk scroll ke section tertentu
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	// Fungsi untuk membuka halaman signup
	const openSignupPage = () => {
		setIsSignupPageVisible(true);
	};

	// Fungsi untuk menutup halaman signup
	const closeSignupPage = () => {
		setIsSignupPageVisible(false);
	};

	return (
		<ErrorBoundary>
			{/* Container Utama */}
			<div className="min-h-screen bg-color_background_light overflow-x-hidden scrollbar-hide px-6 md:px-14 lg:px-20">
				{/* Navbar */}
				<nav className="bg-color_nuetral_100_light z-50 flex items-center justify-between px-6 py-3 rounded-2xl fixed left-6 right-6 mt-6 md:left-14 md:right-14 lg:left-20 lg:right-20">
					{/* Teks Kedai Manang */}
					<h1 className="text-2xl font-semibold text-color_primary_500_light">
						Kedai Manang
					</h1>

					{/* Menu Navigasi */}
					<div className="hidden lg:flex items-center font-normal text-color_nuetral_400_light gap-10 text-base mx-auto">
						{[
							{ label: "Lokasi", id: "location" },
							{ label: "Menu", id: "menu" },
							{
								label: "Testimoni",
								id: "testimonials",
							},
							{ label: "Kontak", id: "contact" },
						].map((item, index) => (
							<button
								key={index}
								onClick={() =>
									scrollToSection(item.id)
								}
								className="hover:text-color_primary_500_light transition duration-200 hover:scale-105">
								{item.label}
							</button>
						))}
					</div>

					{/* Ikon Profile */}
					<div className="sm:relative sm:top-auto sm:transform-none">
						<img
							src={
								profileIcon || "/placeholder.svg"
							}
							alt="Profile Icon"
							className="w-6 h-6 text-gray-100 rounded-full cursor-pointer"
							onClick={openSignupPage}
						/>
					</div>
				</nav>

				{/* Halaman Signup */}
				<div
					className={`fixed inset-0 bg-white z-50 ${
						isSignupPageVisible
							? "translate-x-0"
							: "translate-x-full"
					}`}>
					<SignupPage onClose={closeSignupPage} />
				</div>

				{/* Konten Utama */}
				{!isSignupPageVisible && (
					<>
						{/* Section Lokasi */}
						<div id="location">
							<Information />
						</div>

						{/* Section Hero */}
						<div className="mt-6 md:mt-14">
							<Hero />
						</div>

						{/* Section Menu */}
						<div
							id="menu"
							className="mt-6 md:mt-14">
							<ProductShowCase />
						</div>

						{/* Section Testimoni */}
						<div
							id="testimonials"
							className="mt-6 md:mt-14">
							<Testimonial />
						</div>

						{/* Section Akhir */}
						<div className="mt-6 md:mt-14">
							<End />
						</div>

						{/* Section Kontak */}
						<div id="contact" className="mt-6">
							<div className="-mx-6 md:-mx-12 lg:-mx-20">
								<Footer />
							</div>
						</div>
					</>
				)}
			</div>
		</ErrorBoundary>
	);
}

export default App;
