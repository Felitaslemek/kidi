import React from "react";

const Hero = () => {
	return (
		<div className="flex flex-col gap-5">
			{/* Konten Hero */}
			<div className="flex flex-col text-center gap-y-3">
				<p className="text-sm text-color_nuetral_600_light">
					Halo, Selamat Datang!
				</p>
				<h2 className="text-2xl font-semibold">
					Kedai kami adalah{" "}
					<span className="text-color_primary_500_light">
						solusi
					</span>{" "}
					segala <br /> macam perut lapar 😆
				</h2>
				<p className="text-color_nuetral_600_light">
					Lokasi strategis untuk Anda <br />
					yang ingin pergi kemana-mana
				</p>
			</div>

			{/* Embed Google Maps */}
			<div className="w-full h-96 overflow-hidden rounded-lg">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.63778145287!2d110.4187902871427!3d-7.011285324295994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d2fd7afca71%3A0x921193cb14508ddb!2sKedai%20Manang!5e0!3m2!1sen!2sid!4v1699875207000!5m2!1sen!2sid"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			{/* Button */}
			<a
				href="https://www.google.com/maps/place/Kedai+Manang"
				target="_blank"
				rel="noopener noreferrer">
				<button className="w-full bg-color_primary_500_light text-color_nuetral_100_light font-semibold py-3 rounded-lg hover:bg-color_primary_300_light transition-colors flex justify-center items-center">
					Lihat lokasi toko
					<span className="ml-2 flex items-center">
						<svg
							width="21"
							height="21"
							viewBox="0 0 21 18"
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
	);
};

export default Hero;
