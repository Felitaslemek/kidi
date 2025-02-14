import React from "react";

const Bubbleicon = () => {
	return (
		<div className="fixed right-6 bottom-20 lg:right-20 lg:bottom-20 z-[100]">
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
				className="bg-color_nuetral_100_light rounded-full w-20 h-20 flex justify-center items-center shadow-lg pointer-events-auto  hover:bg-color__300_light">
				<img
					src="https://img.icons8.com/fluency/48/000000/whatsapp.png"
					alt="whatsapp"
				/>
			</button>
		</div>
	);
};

export default Bubbleicon;
