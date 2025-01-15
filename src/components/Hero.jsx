import React, { useState } from "react";
import mapImage from "../assets/map.jpg";

const Hero = () => {
	return (
		<div>
			{/* Konten Hero */}
			<div className="flex flex-col mx-auto text-center my-8 gap-y-3">
				<p className="text-sm text-color_black_to_white_200">
					Halo, Selamat Datang!
				</p>
				<h2 className="text-2xl font-semibold">
					Kedai kami adalah{" "}
					<span className="text-color_primary">
						solusi
					</span>{" "}
					segala <br /> macam perut lapar 😆
				</h2>
				<p className="text-gray-600">
					Lokasi strategis untuk Anda <br />
					yang ingin pergi kemana-mana
				</p>
			</div>

			<div className="mx-auto mb-8">
				<a
					href="https://www.google.com/maps"
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

			<div className="">
				<a
					href="https://www.google.com/maps"
					target="_blank"
					rel="noopener noreferrer">
					<button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
						Lihat lokasi toko →
					</button>
				</a>
			</div>
		</div>
	);
};

export default Hero;
