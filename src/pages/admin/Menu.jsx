import React from "react";
import logout from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";

export default function MenuAdmin() {
	const navigate = useNavigate();

	const onLogout = () => {
		alert("Anda berhasil logout.");
		navigate("/", { replace: true });
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
			<header className="w-full flex justify-between items-center bg-white shadow p-4 rounded-lg max-w-6xl">
				<h1 className="text-xl font-semibold text-blue-600">
					Kedai Manang
				</h1>
				<nav className="flex gap-4 text-gray-600">
					<a
						href="#"
						onClick={() =>
							navigate("/admin/dashboard")
						}
						className="hover:text-blue-600">
						Dashboard
					</a>
					<a
						href="#"
						onClick={() =>
							navigate("/admin/testimoni")
						}
						className="hover:text-blue-600">
						Testimoni
					</a>
					<a
						href="#"
						className="hover:text-blue-600 text-blue-600">
						Menu
					</a>
				</nav>
				<button className="text-gray-600 hover:text-blue-600">
					<img
						src={logout}
						onClick={onLogout}
						alt="Logout"
						className="w-6 h-6"
					/>
				</button>
			</header>

			<main className="w-full max-w-6xl mt-6 grid grid-cols-1 gap-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
						<div className="text-center">
							<h2 className="text-lg font-semibold text-gray-700 mb-4">
								Total Menu
							</h2>
							<p className="text-4xl font-bold text-blue-600 mb-4">
								4
							</p>
						</div>
						<button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
							Edit
						</button>
					</div>
					<div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
						<div className="text-center">
							<h2 className="text-lg font-semibold text-gray-700 mb-4">
								Menu Baru
							</h2>
							<p className="text-4xl font-bold text-blue-600 mb-4">
								&nbsp;
							</p>
						</div>
						<button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
							Tambah
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{[1, 2, 3, 4].map((item) => (
						<div
							key={item}
							className="bg-white shadow rounded-lg h-64 p-4"
						/>
					))}
				</div>
			</main>
		</div>
	);
}
