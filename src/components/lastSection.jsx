import React from "react";
import tampilan from "../assets/tampilan.png";

const End = () => {
	return (
		<section className="bg-color_primary_500_light text-color_nuetral_100_light rounded-lg p-6 md:p-12 text-center max-w-3xl mx-auto mt-10">
			<h1 className="text-2xl md:text-4xl font-semibold">
				Jajanan Terjangkau, <br /> Solusi Perut
				Lapar 😉
			</h1>
			<p className="mt-2 text-sm font-regular md:text-lg">
				Ya di Kedai Manang dong!
			</p>
			<div className="mt-6">
				<img
					src={tampilan}
					alt="tampilan"
					className="rounded-lg shadow-md w-full object-cover"
				/>
			</div>
			<div className="mt-6">
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer">
					<button className="bg-white text-blue-600 py-3 px-6 rounded-lg font-medium-regular text-sm md:text-lg hover:bg-blue-200 transition-colors">
						Gas Mampir →
					</button>
				</a>
			</div>
		</section>
	);
};

export default End;
