import React from "react";

const Footer = () => {
	return (
		<footer className="bg-color_nuetral_100_light text-color_nuetral_900_light py-5 px-6 left-0 right-0 md:p-10">
			<div className="flex gap-3 items-center justify-between">
				{/* Kedai Manang Section */}
				<div>
					<h3 className="font-semibold text-base text-color_primary_500_light">
						Kedai Manang
					</h3>
					<p className="mt-2 text-color_nuetral_600_light text-xs font-regular">
						Kedai kami solusi segala <br />
						macam perut lapar
					</p>
				</div>

				{/* Servis Section */}
				<div className="flex gap-12">
					<div>
						<h3 className="font-semibold text-color_nuetral_900_light text-base">
							Servis
						</h3>
						<ul className="mt-2 space-y-2 text-xs">
							<li>
								<a
									href="#lokasi"
									className="text-color_nuetral_600_light hover:underline">
									Lokasi
								</a>
							</li>
							<li>
								<a
									href="#menu"
									className="text-color_nuetral_600_light hover:underline">
									Menu
								</a>
							</li>
							<li>
								<a
									href="#testimoni"
									className="text-color_nuetral_600_light hover:underline">
									Testimoni
								</a>
							</li>
						</ul>
					</div>

					{/* Kontak Section */}
					<div>
						<h3 className="flex gap-60 font-semibold text-color_nuetral_900_light">
							Kontak
						</h3>
						<ul className="mt-2 text-xs">
							<li>
								<a className="text-regular text-color_nuetral_600_light hover:underline">
									WhatsApp
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full my-6">
				<div className="border-t border-color_nuetral_200_light" />
			</div>
			<div className="text-center text-xs font-regular text-gray-500 mt-4">
				© 2024 Kedai Manang. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
