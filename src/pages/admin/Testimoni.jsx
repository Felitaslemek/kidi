import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	getTestimoniList,
	deleteTestimoni,
	addTestimoni,
} from "../../utils/storeUtils";
import logoutIcon from "../../assets/logout.png";

export default function TestimonialAdmin() {
	const navigate = useNavigate();
	const [testimonials, setTestimonials] =
		useState([]);

	const onLogout = () => {
		alert("Anda berhasil logout.");
		navigate("/", { replace: true });
	};

	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const data = await getTestimoniList();
				setTestimonials(data);
			} catch (error) {
				console.error(
					"Gagal mengambil testimoni:",
					error
				);
			}
		};

		fetchTestimonials();
	}, []);

	const handlePost = async (id) => {
		if (
			window.confirm(
				"Apakah Anda yakin ingin memposting testimoni ini?"
			)
		) {
			try {
				const testimoni = testimonials.find(
					(item) => item.id === id
				);
				if (!testimoni) return;
				await addTestimoni(
					testimoni.name,
					testimoni.email,
					testimoni.rating,
					testimoni.pesan
				);
				alert("Testimoni berhasil diposting!");
			} catch (error) {
				console.error(
					"Gagal memposting testimoni:",
					error
				);
			}
		}
	};

	const handleDelete = async (id) => {
		if (
			window.confirm(
				"Apakah Anda yakin ingin menghapus testimoni ini?"
			)
		) {
			try {
				await deleteTestimoni(id);
				setTestimonials((prev) =>
					prev.filter((item) => item.id !== id)
				);
			} catch (error) {
				console.error(
					"Gagal menghapus testimoni:",
					error
				);
			}
		}
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
						className="hover:text-blue-600">
						Testimoni
					</a>
					<a
						href="#"
						onClick={() =>
							navigate("/admin/menu")
						}
						className="hover:text-blue-600">
						Menu
					</a>
				</nav>
				<button className="text-gray-600 hover:text-blue-600">
					<img
						src={logoutIcon}
						onClick={onLogout}
						alt="Logout"
						className="w-6 h-6"
					/>
				</button>
			</header>

			<main className="w-full max-w-6xl mt-6 grid grid-cols-1 gap-6">
				<div className="bg-white shadow rounded-lg p-6 text-center">
					<h2 className="text-lg font-semibold text-gray-700 mb-4">
						Testimoni Masuk
					</h2>
					<p className="text-4xl font-bold text-blue-600 mb-4">
						{testimonials.length}
					</p>
					<button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
						Review
					</button>
				</div>

				<div className="overflow-x-auto bg-white shadow rounded-lg p-4">
					<table className="min-w-full border border-gray-300">
						<thead>
							<tr className="bg-gray-200">
								<th className="border px-4 py-2">
									Nama
								</th>
								<th className="border px-4 py-2">
									Email
								</th>
								<th className="border px-4 py-2">
									Pesan
								</th>
								<th className="border px-4 py-2">
									Rating
								</th>
								<th className="border px-4 py-2">
									Aksi
								</th>
							</tr>
						</thead>
						<tbody>
							{testimonials.length > 0 ? (
								testimonials.map((item) => (
									<tr
										key={item.id}
										className="odd:bg-white even:bg-gray-100">
										<td className="border px-4 py-2 text-center">
											{item.name}
										</td>
										<td className="border px-4 py-2 text-center">
											{item.email}
										</td>
										<td className="border px-4 py-2 text-center">
											{item.pesan}
										</td>
										<td className="border px-4 py-2 text-center">
											{item.rating}
										</td>
										<td className="border px-4 py-2 text-center flex flex-col md:flex-row gap-2 justify-center">
											<button
												onClick={() =>
													handlePost(item.id)
												}
												className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
												Posting
											</button>
											<button
												onClick={() =>
													handleDelete(item.id)
												}
												className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
												Hapus
											</button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan="5"
										className="text-center text-gray-500 py-4">
										Belum ada testimoni
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
}
