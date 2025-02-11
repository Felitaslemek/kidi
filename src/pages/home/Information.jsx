import Toko from "../../assets/toko.png";
import React, {
	useEffect,
	useState,
} from "react";
import {
	doc,
	onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const Information = () => {
	const [storeStatus, setStoreStatus] =
		useState("loading"); // Default loading
	const [btnColor, setBtnColor] = useState(
		"bg-gray-500"
	); // Default warna abu-abu

	useEffect(() => {
		const storeRef = doc(
			db,
			"store",
			"EMQVnvYaxnwqnUiPQZsG"
		);

		// Ambil status toko secara real-time dari Firestore
		const unsubscribe = onSnapshot(
			storeRef,
			(docSnap) => {
				if (docSnap.exists()) {
					const status = docSnap.data().status;
					setStoreStatus(status);

					// Ubah warna tombol berdasarkan status toko
					setBtnColor(
						status === "open"
							? "bg-color_primary_500_light"
							: "bg-color_warning_500_light"
					);
				} else {
					console.log(
						"No store status found, defaulting to closed."
					);
					setStoreStatus("closed");
					setBtnColor(
						"bg-color_warning_500_light"
					);
				}
			}
		);

		return () => unsubscribe(); // Hentikan listener saat komponen di-unmount
	}, []);

	return (
		// Background
		<div
			className={`${btnColor} text-color_nuetral_100_light py-5 px-5 mt-28 flex rounded-2xl justify-center gap-4 md:justify-between md:px-10`}>
			{/* Image */}
			<div className="flex items-center">
				<img
					src={Toko}
					alt="Toko"
					className="w-24 h-24"
				/>
			</div>

			{/* Teks */}
			<div className="flex flex-col justify-center gap-4 md:w-full md:flex-row md:items-center md:justify-between">
				<div className="flex flex-col gap-1">
					<p className="font-semibold text-xl md:text-2xl">
						{storeStatus === "open"
							? "Kedai Sudah Buka"
							: "Kedai Sedang Tutup"}
					</p>
					<p
						className={`font-normal ${
							storeStatus === "open"
								? "text-color_primary_200_light"
								: "text-color_warning_200_light"
						} text-lg`}>
						{storeStatus === "open"
							? "17:00 - 22:00 WIB"
							: "Buka kembali besok"}
					</p>
				</div>

				{/* Button */}
				<a
					href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer">
					<button
						className={`bg-color_nuetral_100_light px-4 py-2 rounded-lg text-sm font-semibold md:text-lg flex gap-2 transition-colors 
    					${
								storeStatus === "open"
									? "text-color_primary_500_light hover:bg-color_primary_100_light"
									: "text-color_warning_500_light hover:bg-color_warning_100_light"
							}`}>
						Lihat lokasi toko{" "}
						<span>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.4531 16.1833C12.2948 16.1833 12.1364 16.125 12.0114 16C11.7698 15.7583 11.7698 15.3583 12.0114 15.1166L16.6281 10.5L12.0114 5.88331C11.7698 5.64164 11.7698 5.24164 12.0114 4.99998C12.2531 4.75831 12.6531 4.75831 12.8948 4.99998L17.9531 10.0583C18.1948 10.3 18.1948 10.7 17.9531 10.9416L12.8948 16C12.7698 16.125 12.6114 16.1833 12.4531 16.1833Z"
									fill={
										storeStatus === "open"
											? "#297BFF"
											: "#FF4B3A"
									}
								/>
								<path
									d="M17.3698 11.125H3.34476C3.0031 11.125 2.71976 10.8417 2.71976 10.5C2.71976 10.1583 3.0031 9.875 3.34476 9.875H17.3698C17.7114 9.875 17.9948 10.1583 17.9948 10.5C17.9948 10.8417 17.7114 11.125 17.3698 11.125Z"
									fill={
										storeStatus === "open"
											? "#297BFF"
											: "#FF4B3A"
									}
								/>
							</svg>
						</span>
					</button>
				</a>
			</div>
		</div>
	);
};

export default Information;
