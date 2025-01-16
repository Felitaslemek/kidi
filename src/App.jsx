import React, { useState } from "react";
import profileIcon from "./assets/profile.png";
import ProductShowCase from "./components/ProductShowCase";
import Testimonial from "./components/Testimonial";
import End from "./components/lastSection";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Information from "./components/Information";
import Hero from "./components/Hero";

function App() {
	const [isModalOpen, setIsModalOpen] =
		useState(false);
	const [modalContent, setModalContent] =
		useState("menu");

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
		setModalContent("menu");
	};

	const showLoginPage = () => {
		setModalContent("login");
	};

	const showSignupPage = () => {
		setModalContent("signup");
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalContent("menu");
	};

	return (
		//Buat Background
		<div className="min-h-screen bg-color_background_light overflow-x-hidden px-6 md:px-12">
			{/* Navbar */}
			<nav className="bg-color_nuetral_100_light z-50 flex items-center justify-between px-6 py-3 rounded-2xl fixed left-6 right-6 mt-6 md:left-12 md:right-12">
				{/* Teks Kedai Manang */}
				<h1 className="text-2xl font-semibold text-color_primary_500_light">
					Kedai Manang
				</h1>

				{/* Router Navbar */}
				<div className="hidden md:flex items-center font-normal text-color_nuetral_400_light gap-10 text-1.25 mx-auto">
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

				{/* Profile Icon */}
				<div className=" sm:relative sm:top-auto sm:transform-none">
					<img
						src={profileIcon}
						alt="Profile Icon"
						className="w-6 h-6 rounded-full cursor-pointer"
						onClick={toggleModal}
					/>
				</div>
			</nav>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					{modalContent === "menu" && (
						<div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
							<button
								onClick={toggleModal}
								className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
								✕
							</button>
							<h2 className="text-xl font-semibold mb-4 text-center">
								Selamat Datang!
							</h2>
							<p className="text-gray-600 mb-6 text-center">
								Silakan masuk untuk melanjutkan
								atau buat akun baru.
							</p>
							<div className="flex flex-col gap-4">
								<button
									className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
									onClick={showLoginPage}>
									Masuk
								</button>
								<button
									className="bg-gray-100 text-blue-500 py-2 rounded-lg hover:bg-gray-200 transition-colors"
									onClick={showSignupPage}>
									Buat Akun
								</button>
							</div>
						</div>
					)}
					{modalContent === "login" && (
						<LoginPage onClose={closeModal} />
					)}
					{modalContent === "signup" && (
						<SignupPage onClose={closeModal} />
					)}
				</div>
			)}

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
		</div>
	);
}

export default App;
