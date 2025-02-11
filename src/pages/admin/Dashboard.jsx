import { useEffect, useState } from "react";
import logok from "../../assets/toko.png";
import logout from "../../assets/logout.png";
import StoreButton from "../../components/admin/store";
import { useNavigate } from "react-router-dom";
import {
	getTestimoniList,
	getMenuList,
} from "../../utils/storeUtils";

const Dashboard = () => {
	const [menuList, setMenuList] = useState([]);

	useEffect(() => {
		const fetchMenu = async () => {
			try {
				const menus = await getMenuList();
				setMenuList(menus);
			} catch (error) {
				console.log(
					"Gagal mengambil menu:",
					error
				);
			}
		};
		fetchMenu();
	}, []);

	const navigate = useNavigate();
	const [testimonials, setTestimonials] =
		useState([]); // State untuk menyimpan testimoni

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

	return (
		<div className="min-h-screen bg-color_background_light flex flex-col items-center px-6 py-6 md:px-14 lg:px-20">
			{/* Header */}
			<header className="w-full flex justify-between items-center bg-color_nuetral_100_light px-6 py-3 rounded-2xl">
				<h1 className="text-2xl font-semibold text-color_primary_500_light">
					Kedai Manang
				</h1>
				<nav className="flex gap-10 text-base text-color_nuetral_400_light">
					<button
						onClick={() =>
							navigate("/admin/dashboard")
						}
						className="text-color_primary_500_light">
						Dashboard
					</button>
					<button
						onClick={() =>
							navigate("/admin/testimoni")
						}
						className="hover:text-color_primary_500_light">
						Testimoni
					</button>
					<button
						onClick={() =>
							navigate("/admin/menu")
						}
						className="hover:text-color_primary_500_light">
						Menu
					</button>
				</nav>
				<button
					onClick={onLogout}
					className="text-color_nuetral_400_light hover:text-color_primary_500_light">
					<img
						src={logout}
						alt="Logout"
						className="h-6 w-6"
					/>
				</button>
			</header>

			<main className="w-full max-w-6xl mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* status kedai */}
				<div className="bg-blue-100 shadow p-6 rounded-md flex flex-col items-center gap-3">
					<h2 className="text-lg font-semibold text-center text-color_nuetral_900_light">
						Jadwal Toko
					</h2>
					<img
						src={logok}
						alt="Logok"
						className="h-16 w-16"
					/>
					<StoreButton />
				</div>

				{/* testimoni masuk */}
				<div className="bg-white shadow p-6 rounded-md flex flex-col items-center">
					<h2 className="text-lg font-semibold text-gray-700">
						Total Testimoni
					</h2>
					<p className="text-4xl font-bold text-blue-600 mt-2">
						{testimonials.length}
					</p>
					<button
						onClick={() =>
							navigate("/admin/testimoni")
						}
						className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
						Review
					</button>
				</div>

				{/* daftar menu */}
				<div className="bg-white shadow p-6 rounded-md flex flex-col items-center">
					<h2 className="text-lg font-semibold text-gray-700">
						Daftar Menu
					</h2>
					<p className="text-4xl font-bold text-blue-600 mt-2">
						{menuList.length}
					</p>
					<button
						onClick={() =>
							navigate("/admin/menu")
						}
						className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
						Edit
					</button>
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
