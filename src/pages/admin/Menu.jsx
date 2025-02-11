import { useEffect, useState } from "react";
import {
	addMenu,
	getMenuList,
	deleteMenu,
	updateMenu,
} from "../../utils/storeUtils";
import logout from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/storeUtils";

export default function MenuAdmin() {
	const navigate = useNavigate();

	const [menuList, setMenuList] = useState([]);
	const [newMenu, setNewMenu] = useState({
		name: "",
		price: "",
		image: "",
	});

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

	const handleChange = (e) => {
		setNewMenu({
			...newMenu,
			[e.target.name]: e.target.value,
		});
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setNewMenu({
				...newMenu,
				image: reader.result,
			});
		};
	};

	const handleAddMenu = async () => {
		if (
			!newMenu.name ||
			!newMenu.price ||
			!newMenu.image
		) {
			alert("Harap lengkapi semua field!");
			return;
		}
		await addMenu(
			newMenu.name,
			newMenu.price,
			newMenu.image
		);
		setMenuList(await getMenuList()); // Refresh list
		setNewMenu({
			name: "",
			price: "",
			image: "",
		});
	};

	const handleDeleteMenu = async (id) => {
		await deleteMenu(id);
		setMenuList(await getMenuList()); // Refresh list
	};

	const handleEditMenu = async (
		id,
		updatedName,
		updatedPrice,
		updatedImage
	) => {
		await updateMenu(
			id,
			updatedName,
			updatedPrice,
			updatedImage
		);
		setMenuList(await getMenuList()); // Refresh list
	};

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
				<nav className="flex gap-4 text-color_nuetral_400_light">
					<a
						href="#"
						onClick={() =>
							navigate("/admin/dashboard")
						}
						className="hover:text-color_primary_500_light">
						Dashboard
					</a>
					<a
						href="#"
						onClick={() =>
							navigate("/admin/testimoni")
						}
						className="hover:text-color_primary_500_light">
						Testimoni
					</a>
					<a
						href="#"
						className="hover:text-color_primary_500_light text-color_primary_500_light">
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
				<div className="grid grid-cols-1 gap-6">
					<div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
						<div className="text-center">
							<h2 className="text-lg font-semibold text-gray-700 mb-4">
								Total Menu
							</h2>
							<p className="text-4xl font-bold text-blue-600 mb-4">
								{menuList.length}
							</p>
						</div>
						<button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
							Edit
						</button>
					</div>
				</div>

				<div className="bg-white shadow rounded-lg p-6">
					<h2 className="text-lg font-semibold text-gray-700 mb-4">
						Daftar Menu
					</h2>
					<ul>
						{menuList.map((menu) => (
							<li
								key={menu.id}
								className="flex justify-between items-center p-2 border-b">
								<div>
									<img
										src={menu.image}
										alt={menu.name}
										className="w-16 h-16 object-cover rounded"
									/>
									<p>{menu.name}</p>
									<p>{formatCurrency(menu.price ?? "0")}</p>

								</div>
								<button
									onClick={() =>
										handleDeleteMenu(menu.id)
									}
									className="text-red-600">
									Hapus
								</button>
								{/* <button
									onClick={() =>
										handleEditMenu(menu.id)
									}
									className="text-blue-600">
									Edit
								</button> */}
							</li>
						))}
					</ul>

					<h3 className="mt-6 text-lg font-semibold text-gray-700">
						Tambah Menu Baru
					</h3>
					<input
						type="text"
						name="name"
						placeholder="Nama Menu"
						value={newMenu.name}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="price"
						placeholder="Harga"
						value={newMenu.price}
						onChange={handleChange}
					/>
					<input
						type="file"
						onChange={handleImageChange}
					/>
					<button
						onClick={handleAddMenu}
						className="bg-blue-600 text-white py-2 px-4 rounded">
						Tambah
					</button>
				</div>
			</main>
		</div>
	);
}
