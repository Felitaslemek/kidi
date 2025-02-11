import { useEffect, useState } from "react";
import { getMenuList } from "../../utils/storeUtils";
import { formatCurrency } from "../../utils/storeUtils";

function ProductShowcase() {
	const [hoveredItem, setHoveredItem] =
		useState(null);

	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		const fetchMenu = async () => {
			const menus = await getMenuList();
			setMenuItems(menus);
		};
		fetchMenu();
	}, []);

	const handleHover = (id) => setHoveredItem(id);
	const handleLeave = () => setHoveredItem(null);

	return (
		// Text
		<div className="flex flex-col gap-5 z-0 md:gap-7">
			<div className="text-center flex flex-col gap-4">
				<p className="text-color_nuetral_600_light font-regular text-sm md:text-base">
					Menu Kami
				</p>
				<h2 className="text-2xl font-semibold md:leading-normal md:text-4xl">
					Menyediakan berbagai macam <br />
					<span className="text-color_primary_500_light">
						jajanan terjangkau 🤤
					</span>
				</h2>
				<p className="text-color_nuetral_600_light text-base md:text-xl">
					Kami menyediakan berbagai macam <br />{" "}
					jajanan kekinian dari churros hingga
					corndog
				</p>
			</div>

			<div className="grid gap-4 grid-cols-2 lg:grid-cols-4 md:gap-4">
				{/* Gambar Produk */}
				{menuItems.map((item) => (
					<div
						key={item.id}
						className="relative rounded-2xl overflow-hidden bg-color_nuetral_100_light grid-cols-2">
						<img
							src={item.image}
							alt={item.name}
							className="w-full h-full object-cover rounded-t-lg"
						/>
						<div className="absolute bg-color_primary_500_light bottom-0 left-0 right-0 p-3 text-color_nuetral_100_light rounded-b-2xl flex justify-between	">
							<span className="font-semibold text-xl">
								{item.name}
							</span>
							<span className="font-regular text-base">
								{formatCurrency(item.price ?? "0")}
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
					<button
						onClick={() => {
							const phoneNumber = "6281325181773"; // Ganti dengan nomor WhatsApp penjual (format internasional tanpa +)
							const message = encodeURIComponent(
								"Halo, saya ingin memesan produk Anda."
							);
							window.open(
								`https://wa.me/${phoneNumber}?text=${message}`,
								"_blank"
							);
						}}
						className="justify-center w-full items-center bg-color_primary_500_light text-color_nuetral_100_light py-3 rounded-lg hover:bg-color_primary_300_light transition-colors font-semibold shadow-md hover:shadow-lg">
						Pesan Sekarang{" "}
						<span className="ml-2 items-center">
							<svg
								width="21"
								height="21"
								viewBox="0 0 20 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="inline-block align-middle">
								<path
									d="M12.4531 16.1833C12.2948 16.1833 12.1364 16.125 12.0114 16C11.7698 15.7583 11.7698 15.3583 12.0114 15.1166L16.6281 10.5L12.0114 5.88331C11.7698 5.64164 11.7698 5.24164 12.0114 4.99998C12.2531 4.75831 12.6531 4.75831 12.8948 4.99998L17.9531 10.0583C18.1948 10.3 18.1948 10.7 17.9531 10.9416L12.8948 16C12.7698 16.125 12.6114 16.1833 12.4531 16.1833Z"
									fill="#FFFFFF"
								/>
								<path
									d="M17.3698 11.125H3.34476C3.0031 11.125 2.71976 10.8417 2.71976 10.5C2.71976 10.1583 3.0031 9.875 3.34476 9.875H17.3698C17.7114 9.875 17.9948 10.1583 17.9948 10.5C17.9948 10.8417 17.7114 11.125 17.3698 11.125Z"
									fill="#FFFFFF"
								/>
							</svg>
						</span>
					</button>
				</a>
			</div>
		</div>
	);
}

export default ProductShowcase;
