import React, { useState } from "react";
import { signInWithEmailAndPassword } from "../firebase/firebaseAuth";
import { auth } from "../firebase/firebaseAuth";
import login from "../assets/login.png";
import ErrorBoundary from "../err/errorBoundary";

const LoginPage = () => {
	const [name, setName] = useState(""); // Nama pengguna (opsional)
	const [email, setEmail] = useState(""); // Email pengguna
	const [password, setPassword] = useState(""); // Password pengguna
	const [showPassword, setShowPassword] =
		useState(false); // Tampilkan atau sembunyikan password
	const [isSuccess, setIsSuccess] =
		useState(false); // Notifikasi keberhasilan login

	const handleLogin = async (e) => {
		e.preventDefault(); // Mencegah form submit default
		try {
			await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setIsSuccess(true); // Login berhasil
			alert("Login successful!");
			// Lakukan redirect atau aksi lain setelah login berhasil
		} catch (error) {
			console.error(
				"Login failed:",
				error.message
			);
			setIsSuccess(false); // Reset status keberhasilan
			alert("Login failed. Please try again.");
		}
	};

	return (
		<ErrorBoundary>
			<div className="bg-white w-full max-w-5xl rounded-lg shadow-lg overflow-hidden relative">
				{/* Notifikasi berhasil */}
				{isSuccess && (
					<div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-black text-lg font-semibold px-4 py-2">
						Login berhasil!
					</div>
				)}

				<div className="flex flex-col md:flex-row">
					{/* Bagian kiri: Form login */}
					<div className="w-full md:w-1/2 p-8">
						<div className="max-w-md mx-auto">
							<h2 className="text-blue-500 text-center text-2xl font-semibold mb-2">
								Masuk
							</h2>
							<p className="text-gray-500 text-center font-semibold mb-8 text-sm">
								Bergabung dan dapatkan informasi
								baru dari kedai kami
							</p>

							<form
								onSubmit={handleLogin}
								className="space-y-4">
								{/* Nama */}
								<div>
									<label
										htmlFor="name"
										className="block text-md font-semibold text-gray-700 mb-1">
										Nama Anda
									</label>
									<input
										type="text"
										id="name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										placeholder="Agung Wisnu"
										className="w-full text-regular px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								{/* Email */}
								<div>
									<label
										htmlFor="email"
										className="block text-md font-semibold text-gray-700 mb-1">
										Email Anda
									</label>
									<input
										type="email"
										id="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										placeholder="contoh123@gmail.com"
										required
										className="w-full text-regular px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								{/* Password */}
								<div>
									<label
										htmlFor="password"
										className="block text-md font-semibold text-gray-700 mb-1">
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
												setPassword(
													e.target.value
												)
											}
											placeholder="min. 8 karakter"
											required
											minLength={8}
											className="w-full text-regular px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
										<button
											type="button"
											onClick={() =>
												setShowPassword(
													!showPassword
												)
											}
											className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
											{showPassword ? "👁️" : "👁️‍🗨️"}
										</button>
									</div>
								</div>

								{/* Tombol Login */}
								<button
									type="submit"
									className="w-full font-semibold bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
									Masuk
								</button>
							</form>

							<p className="mt-4 text-center font-semibold text-sm">
								Belum memiliki akun?{" "}
								<button className="text-blue-500 font-semibold hover:underline">
									Buat Akun
								</button>
							</p>

							<p className="mt-8 text-center text-regular text-xs text-gray-500">
								© 2024 Kedai Manang. All rights
								reserved.
							</p>
						</div>
					</div>

					{/* Bagian kanan: Preview */}
					<div className="hidden md:block w-1/2 bg-blue-500 p-8 text-white">
						<div className="h-full flex flex-col items-center justify-center">
							<h2 className="text-3xl font-semibold text-center mb-8">
								Jajanan terjangkau
								<br />
								solusi perut lapar
							</h2>
							<div className="relative w-full max-w-xs h-auto rounded-3xl overflow-hidden shadow-xl">
								<img
									src={login}
									alt="login"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	);
};

export default LoginPage;
