import React, { useState } from "react";
import mockup from "../../assets/mockup.png";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import fungsi login Firebase
import { useNavigate } from "react-router-dom";
import { saveUserToLocalStorage } from "../../utils/storeUtils"; // Import fungsi untuk menyimpan user ke Local Storage

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] =
		useState(false);
	const [isSuccess, setIsSuccess] =
		useState(false); // Notifikasi keberhasilan
	const [errorMessage, setErrorMessage] =
		useState(""); // Notifikasi error
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/signup"); // Navigasi ke halaman utama
	}; // Notifikasi keberhasilan

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			console.log(
				"Login attempted with:",
				email,
				password
			);

			// Validasi dengan Firebase Authentication
			const userCredential =
				await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
			const userId = userCredential.user.uid;

			console.log(
				"Login successful, user ID:",
				userId
			);

			// Simpan status login berhasil
			setIsSuccess(true);
			setErrorMessage("");

			// Redirect setelah sukses login
			setTimeout(() => {
				setIsSuccess(false);
				navigate("/admin/dashboard"); // Arahkan ke halaman dashboard atau home
			}, 1000);
		} catch (error) {
			console.error("Error during login:", error);
			setErrorMessage(error.message); // Tampilkan pesan error
		}
	};

	return (
		<div className="bg-color_nuetral_100_light px-6 lg:p-8 min-h-screen mt-20 lg:mt-0">
			<div className="">
				{/* Notifikasi Berhasil */}
				{isSuccess && (
					<div className="">
						Akun berhasil dibuat!
					</div>
				)}

				{/* Notifikasi berhasil login */}
				{isSuccess && (
					<div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-green-600 text-sm font-semibold px-4 py-2">
						Login berhasil!
					</div>
				)}

				{/* Notifikasi error */}
				{errorMessage && (
					<div className="absolute bg-color_nuetral_100_light border-color_background_dark top-12 left-1/2 transform -translate-x-1/2 text-color_warning_500_light text-sm font-semibold px-4 py-2">
						{errorMessage}
					</div>
				)}
			</div>

			<div className="flex flex-col lg:flex-row">
				{/* Tombol Kembali */}
				<button
					onClick={handleBack}
					className="absolute top-12 lg:left-12">
					<svg
						width="24"
						height="24"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.95 8.63338C16.2667 8.63338 16.5833 8.75005 16.8333 9.00005C17.3167 9.48338 17.3167 10.2834 16.8333 10.7667L7.6 20L16.8333 29.2334C17.3167 29.7167 17.3167 30.5167 16.8333 31C16.35 31.4834 15.55 31.4834 15.0667 31L4.95 20.8834C4.46666 20.4 4.46666 19.6 4.95 19.1167L15.0667 9.00005C15.3167 8.75005 15.6333 8.63338 15.95 8.63338Z"
							fill="#717171"
						/>
						<path
							d="M6.11669 18.75L34.1667 18.75C34.85 18.75 35.4167 19.3167 35.4167 20C35.4167 20.6833 34.85 21.25 34.1667 21.25L6.11669 21.25C5.43336 21.25 4.86669 20.6833 4.86669 20C4.86669 19.3167 5.43336 18.75 6.11669 18.75Z"
							fill="#717171"
						/>
					</svg>
				</button>
				{/* Form Signup */}
				<div className="w-full lg:w-4/6 flex flex-col align-items justify-center">
					<div className="lg:px-24">
						<div className="space-y-3 mb-6 px-6">
							<h2 className="text-color_primary_500_light text-center text-2xl font-semibold">
								Masuk
							</h2>
							<p className="text-color_nuetral_300_light text-center text-sm">
								Selamat datang kembali, berbagai
								jajanan dari kami telah menunggu
								Anda
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="space-y-6">
							<div>
								<label
									htmlFor="email"
									className="block text-md font-semibold text-color_nuetral_700_light mb-3">
									Email Anda
								</label>
								<input
									type="email"
									id="email"
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
									placeholder="Masukkan email Anda"
									required
									className="w-full text-regular px-4 py-3 border border-color_nuetral_200_light rounded-lg focus:outline-none focus:ring-2 focus:ring-color_primary_500_light"
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-md font-semibold text-color_nuetral_700_light mb-3">
									Password
								</label>
								<div className="relative">
									<input
										type={
											showPassword
												? "text"
												: "password"
										}
										id="password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										placeholder="min. 8 karakter"
										required
										minLength={8}
										className="w-full text-regular px-4 py-3 border border-color_nuetral_200_light rounded-lg focus:outline-none focus:ring-2 focus:ring-color_primary_500_light"
										autoComplete="new-password"
										spellCheck="false"
										style={{
											WebkitTextSecurity:
												showPassword
													? "none"
													: "disc",
										}}
									/>
									<button
										type="button"
										onClick={() =>
											setShowPassword(
												!showPassword
											)
										}
										className="absolute right-3 top-1/2 transform -translate-y-1/2"
										aria-label={
											showPassword
												? "Sembunyikan password"
												: "Tampilkan password"
										}>
										{showPassword ? (
											// Ikon Mata Terbuka (Password terlihat)
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M11.9999 16.33C9.60992 16.33 7.66992 14.39 7.66992 12C7.66992 9.60998 9.60992 7.66998 11.9999 7.66998C14.3899 7.66998 16.3299 9.60998 16.3299 12C16.3299 14.39 14.3899 16.33 11.9999 16.33ZM11.9999 9.16998C10.4399 9.16998 9.16992 10.44 9.16992 12C9.16992 13.56 10.4399 14.83 11.9999 14.83C13.5599 14.83 14.8299 13.56 14.8299 12C14.8299 10.44 13.5599 9.16998 11.9999 9.16998Z"
													fill="#717171"
												/>
											</svg>
										) : (
											// Ikon Mata Tertutup (Password disembunyikan)
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M9.46998 15.28C9.27998 15.28 9.08998 15.21 8.93998 15.06C8.11998 14.24 7.66998 13.15 7.66998 12C7.66998 9.61004 9.60998 7.67004 12 7.67004C13.15 7.67004 14.24 8.12004 15.06 8.94004C15.2 9.08004 15.28 9.27004 15.28 9.47004C15.28 9.67004 15.2 9.86004 15.06 10L9.99998 15.06C9.84998 15.21 9.65998 15.28 9.46998 15.28Z"
													fill="#717171"
												/>
											</svg>
										)}
									</button>
								</div>
							</div>

							<button
								type="submit"
								className="w-full bg-color_primary_500_light text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg">
								Buat Akun
							</button>
						</form>

						<p className="mt-6 text-center font-semibold text-sm">
							Belum memiliki akun?{" "}
							<a
								href="/signup"
								className="text-color_primary_500_light font-semibold hover:underline">
								Buat Akun
							</a>
						</p>

						<p className="text-center text-xs text-gray-500 mt-8">
							© 2024 Kedai Manang. All rights
							reserved.
						</p>
					</div>
				</div>

				{/* Gambar Samping */}
				<div className="hidden lg:flex w-1/2 items-center justify-center">
					<img
						src={mockup}
						alt="App Preview"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
