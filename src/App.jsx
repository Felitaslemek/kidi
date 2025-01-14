import React, { useState } from "react";
import logok from "./assets/logok.png";
import mapImage from "./assets/map.jpg";
import profileIcon from "./assets/profile.png";
import ProductShowCase from "./commponents/ProductShowCase";
import Testimonial from "./commponents/Testimonial";
import Hero from "./commponents/Hero";
import Footer from "./commponents/Footer";
import LoginPage from "./commponents/LoginPage";
import SignupPage from "./commponents/SignupPage";

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
		<div className="min-h-screen bg-background overflow-x-hidden px-15">
			{/* Navbar */}
			<nav className="bg-white flex items-center justify-between px-6 py-3 border-1 rounded-2xl fixed top-[20px] left-10 right-10 ">
				{/* Teks Kedai Manang */}
				<h1 className="text-2xl font-semibold text-color_primary leading-6">
					Kedai Manang
				</h1>
				{/* Router Navbar */}
				<div className="hidden md:flex items-center text-color_black_200 gap-10 text-1.25 leading-6 mx-auto">
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
							className="hover:text-color_primary transition duration-200 hover:scale-105">
							{item.label}
						</button>
					))}
				</div>
				{/* Profile Icon */}
				<div className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:relative sm:top-auto sm:transform-none">
					<img
						src={profileIcon}
						alt="Profile Icon"
						className="w-10 h-10 rounded-full cursor-pointer"
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
			{/* Panel Jadwal Toko */}
			<div
				id="location"
				className="bg-blue-600 text-white py-6 px-6 flex flex-col md:flex-row items-center justify-between mx-4 md:mx-10 my-10 rounded-lg gap-4">
				<div className="flex items-center gap-4">
					<div className="bg-white/20 p-2 rounded-lg">
						<img
							src={logok}
							alt="Logok"
							className="w-12 h-12"
						/>
					</div>
					<div>
						<p className="font-semibold">
							Kedai Sudah Buka
						</p>
						<p className="text-sm text-blue-100">
							17:00 - 22:00 WIB
						</p>
					</div>
				</div>
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer">
					<button className="bg-white text-blue-600 px-8 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors">
						Lihat lokasi toko →
					</button>
				</a>
			</div>

			<div className="max-w-3xl mx-auto text-center px-4 py-12">
				<p className="text-lg mb-4 text-gray-600">
					Halo, Selamat Datang!
				</p>
				<h2 className="text-3xl md:text-4xl font-semibold mb-4">
					Kedai kami adalah{" "}
					<span className="text-blue-600 font-semibold">
						solusi
					</span>{" "}
					segala macam perut lapar 😆
				</h2>
				<p className="text-gray-600">
					Lokasi strategis untuk Anda yang ingin
					pergi kemana-mana
				</p>
			</div>

			<div className="max-w-5xl mx-auto px-4 mb-8">
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-gray-100 rounded-lg overflow-hidden block">
					<img
						src={mapImage}
						alt="Store Location Map"
						className="w-full h-auto object-cover"
					/>
				</a>
			</div>

			<div className="px-4 sm:px-16 pb-16">
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer">
					<button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
						Lihat lokasi toko →
					</button>
				</a>
			</div>

			<div id="menu">
				<ProductShowCase />
			</div>

			<div id="testimonials">
				<Testimonial />
			</div>

			<Hero />

			<div id="contact">
				<Footer />
			</div>
		</div>
	);
}

export default App;
