import React, { useState } from "react";
import chuross from "../assets/chuross.jpg";
import otak from "../assets/otak.jpg";
import corndog from "../assets/corndog.jpg";
import citul from "../assets/citul.jpg";
import pricechuross from "../assets/pricechuross.jpg";
import pricecorndog from "../assets/pricecorndog.jpg";
import pricecitul from "../assets/pricecitul.jpg";
import priceotak from "../assets/priceotak.jpg";

function ProductShowcase() {
	const [hoveredItem, setHoveredItem] =
		useState(null);

	const handleHover = (id) => setHoveredItem(id);
	const handleLeave = () => setHoveredItem(null);

	const menuItems = [
		{
			id: 1,
			name: "Churros",
			price: "5-10K",
			image: chuross,
			priceImage: pricechuross,
		},
		{
			id: 2,
			name: "Corndog",
			price: "6-8K",
			image: corndog,
			priceImage: pricecorndog,
		},
		{
			id: 3,
			name: "Otak-otak",
			price: "5K",
			image: otak,
			priceImage: priceotak,
		},
		{
			id: 4,
			name: "Citul",
			price: "5K",
			image: citul,
			priceImage: pricecitul,
		},
	];

	return (
		<div className="flex flex-col gap-5">
			<div className="text-center flex flex-col gap-3">
				<p className="text-color_nuetral_600_light font-regular text-sm">
					Menu Kami
				</p>
				<h2 className="text-2xl font-semibold">
					Menyediakan berbagai macam{" "}
					<span className="text-color_primary_500_light">
						Jajanan terjangkau 🤤
					</span>
				</h2>
				<p className="text-color_nuetral_600_light text-base">
					Kami menyediakan berbagai macam <br />{" "}
					jajanan kekinian dari churros hingga
					corndog
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 font-semibold">
				{menuItems.map((item) => (
					<div
						key={item.id}
						className="relative rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer bg-white"
						onMouseEnter={() =>
							handleHover(item.id)
						}
						onMouseLeave={handleLeave}>
						<div className="">
							<img
								src={
									hoveredItem === item.id
										? item.priceImage
										: item.image
								}
								alt={item.name}
								className="w-full h-full object-cover rounded-t-lg"
							/>
						</div>
						<div className="absolute bottom-0 left-0 right-0 p-4 text-color_nuetral_100_light rounded-b-2xl flex justify-between">
							<span className="font-semibold text-3xl">
								{item.name}
							</span>
							<span className="font-semibold text-2xl">
								{item.price}
							</span>
						</div>
					</div>
				))}
			</div>

			<div>
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer">
					<button className="justify-center w-full items-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
						Lihat lokasi toko →
					</button>
				</a>
			</div>
		</div>
	);
}

export default ProductShowcase;
