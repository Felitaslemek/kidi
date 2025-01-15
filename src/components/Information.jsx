import React from "react";
import Toko from "../assets/toko.png";

const Information = () => {
	return (
		// Background
		<div className="bg-color_primary text-white py-5 px-5 mt-32 flex rounded-2xl justify-center gap-4">
			{/* Image */}
			<div className="flex items-center">
				<img
					src={Toko}
					alt="Toko"
					className="w-24 h-24"
				/>
			</div>

			{/* Teks */}
			<div className="flex flex-col justify-center gap-4">
				<div className="flex flex-col gap-1">
					<p className="font-semibold text-xl">
						Kedai Sudah Buka
					</p>
					<p className="font-normal text-color_white_to_blue_600 text-sm">
						17:00 - 22:00 WIB
					</p>
				</div>

				{/* Button */}
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer">
					<button className="bg-white text-blue-600 px-8 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors">
						Lihat lokasi toko →
					</button>
				</a>
			</div>
		</div>
	);
};

export default Information;
