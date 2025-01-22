import React from "react";
import tampilan from "../assets/tampilan.png";

const End = () => {
	return (
		<section className="bg-color_primary_500_light text-color_nuetral_100_light rounded-2xl p-5 flex flex-col gap-y-4 items-center md:p-7 md:gap-y-6">
			<h1 className="text-2xl font-semibold md:text-4xl md:leading-normal">
				Jajanan terjangkau, <br /> solusi perut
				lapar 😉
			</h1>
			<p className="text-base text-color_primary_200_light font-regular md:text-lg">
				Ya di Kedai Manang dong!
			</p>
			<div className="rounded-lg">
				<img
					src={tampilan}
					alt="tampilan"
					className="rounded-sm object-cover"
				/>
			</div>
			<div className="w-full">
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer"
					className="block w-full">
					<button className="w-full bg-color_nuetral_100_light text-color_primary_500_light px-6 py-3 font-semibold rounded-lg text-sm">
						Gas Mampir
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
									fill="#297BFF"
								/>
								<path
									d="M17.3698 11.125H3.34476C3.0031 11.125 2.71976 10.8417 2.71976 10.5C2.71976 10.1583 3.0031 9.875 3.34476 9.875H17.3698C17.7114 9.875 17.9948 10.1583 17.9948 10.5C17.9948 10.8417 17.7114 11.125 17.3698 11.125Z"
									fill="#297BFF"
								/>
							</svg>
						</span>
					</button>
				</a>
			</div>
		</section>
	);
};

export default End;
