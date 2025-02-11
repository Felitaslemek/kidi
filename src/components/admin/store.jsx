import React, {
	useEffect,
	useState,
} from "react";
import {
	getStoreStatus,
	toggleStoreStatus,
} from "../../utils/storeUtils";

const StoreButton = () => {
	const [storeStatus, setStoreStatus] =
		useState("loading");

	// Mendapatkan status toko saat komponen dimuat
	useEffect(() => {
		const fetchStatus = async () => {
			const status = await getStoreStatus();
			setStoreStatus(status);
		};

		fetchStatus();
	}, []);

	// Fungsi untuk mengganti status toko secara manual
	const handleToggle = async () => {
		const newStatus = await toggleStoreStatus(
			storeStatus
		);
		setStoreStatus(newStatus);
	};

	// Warna tombol berdasarkan status
	const buttonStyle =
		storeStatus === "open"
			? "bg-blue-500 hover:bg-blue-600"
			: "bg-red-500 hover:bg-red-600";

	return (
		<div className="flex flex-col items-center space-y-4">
			<button
				onClick={handleToggle}
				className={`text-white font-semibold py-2 px-6 rounded-lg transition-colors ${buttonStyle}`}>
				{storeStatus === "open"
					? "Tutup Toko"
					: "Buka Toko"}
			</button>

			<p className="text-gray-600 font-semibold">
				Status toko saat ini:{" "}
				<span
					className={
						storeStatus === "open"
							? "text-blue-500"
							: "text-red-500"
					}>
					{storeStatus === "loading"
						? "Memuat..."
						: storeStatus === "open"
						? "Buka"
						: "Tutup"}
				</span>
			</p>
		</div>
	);
};

export default StoreButton;
