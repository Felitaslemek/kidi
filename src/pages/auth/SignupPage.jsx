import React, { useState } from "react";
import {
	auth,
	db,
} from "../../firebase/firebaseConfig"; // Firebase Import
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
	getDocs,
	query,
	collection,
	where,
} from "firebase/firestore";
import mockup from "../../assets/mockup.png";
import { useNavigate } from "react-router-dom";

// Fungsi untuk mengecek apakah email sudah terdaftar
const checkIfEmailExists = async (email) => {
	const usersRef = collection(db, "users");
	const q = query(
		usersRef,
		where("email", "==", email)
	);
	const querySnapshot = await getDocs(q);
	return !querySnapshot.empty; // True jika email sudah ada
};

// Regex untuk validasi email dan password
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const SignupPage = ({ onClose }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] =
		useState(false);
	const [isSuccess, setIsSuccess] =
		useState(false);
	const navigate = useNavigate(); // Pindahkan useNavigate ke dalam komponen
	const handleBack = () => {
		navigate("/"); // Navigasi ke halaman utama
	}; // Notifikasi keberhasilan

	// Fungsi untuk submit form signup
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!emailRegex.test(email)) {
			alert("Format email tidak valid.");
			return;
		}
		if (!passwordRegex.test(password)) {
			alert(
				"Password harus minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka."
			);
			return;
		}

		try {
			// Periksa apakah email sudah digunakan
			const emailExists =
				await checkIfEmailExists(email);
			if (emailExists) {
				alert(
					"Email sudah terdaftar. Silakan gunakan email lain atau login."
				);
				return;
			}

			// Buat akun baru
			const userCredential =
				await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
			const user = userCredential.user;

			// Simpan data pengguna ke Firestore
			await setDoc(doc(db, "users", user.uid), {
				name,
				email,
				role: "user", // Set default role sebagai "user"
			});

			setIsSuccess(true);

			// Tutup form signup setelah sukses
			setTimeout(() => {
				setIsOpen(false);
				setIsSuccess(false);
				if (onClose) {
					onClose();
				} else {
					console.warn(
						"onClose function is not provided!"
					);
				}
			}, 1000);
		} catch (error) {
			if (
				error.code === "auth/email-already-in-use"
			) {
				alert(
					"Email sudah terdaftar. Silakan gunakan email lain atau login."
				);
			} else {
				console.error(
					"Error during signup:",
					error
				);
				alert("Signup gagal. Silakan coba lagi.");
			}
		}
	};

	return (
		<div className="bg-color_nuetral_100_light p-6 lg:p-8 max-h-screen">
			<div className="">
				{/* Notifikasi Berhasil */}
				{isSuccess && (
					<div className="">
						Akun berhasil dibuat!
					</div>
				)}
			</div>

			<div className="flex flex-col lg:flex-row">
				{/* Tombol Kembali */}
				<button
					onClick={handleBack}
					className="absolute top-12 left-12">
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
					<div className="mx-auto">
						<div className="space-y-2 mb-6">
							<h2 className="text-color_primary_500_light text-center text-2xl font-semibold">
								Buat Akun
							</h2>
							<p className="text-color_nuetral_300_light text-center text-sm">
								Bergabung dan dapatkan informasi
								baru <br />
								dari kedai kami
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="space-y-6">
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
									placeholder="Masukkan nama Anda"
									required
									className="w-full text-regular px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

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
									placeholder="Masukkan email Anda"
									required
									className="w-full text-regular px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

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
											setPassword(e.target.value)
										}
										placeholder="min. 8 karakter"
										required
										minLength={8}
										className="w-full text-regular px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

							<button
								type="submit"
								className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg">
								Buat Akun
							</button>
						</form>

						<p className="mt-6 text-center font-semibold text-sm">
							Sudah memiliki akun?{" "}
							<a
								href="/login"
								className="text-blue-500 font-semibold hover:underline">
								Masuk
							</a>
						</p>

						<p className="mt-8 text-center text-xs text-gray-500">
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

export default SignupPage;
