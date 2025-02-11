import React, {
	useState,
	useEffect,
} from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Star } from "lucide-react";
import {
	getTestimoniList,
	addTestimoniWithLimit,
} from "../../utils/storeUtils";

function Testimonial() {
	const [testimonials, setTestimonials] =
		useState([]);
	const [showForm, setShowForm] = useState(false);
	const [newTestimonial, setNewTestimonial] =
		useState({
			name: "",
			text: "",
			rating: 0,
		});

	// Mengambil daftar testimoni saat komponen dimuat
	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const testimoniData =
					await getTestimoniList();
				setTestimonials(testimoniData);
			} catch (error) {
				console.error(
					"Error fetching testimonials:",
					error
				);
			}
		};
		fetchTestimonials();
	}, []);

	const handleStarClick = (rating) => {
		setNewTestimonial({
			...newTestimonial,
			rating,
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewTestimonial({
			...newTestimonial,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			newTestimonial.name &&
			newTestimonial.text &&
			newTestimonial.rating > 0
		) {
			try {
				await addTestimoniWithLimit(
					newTestimonial.name,
					"",
					newTestimonial.rating,
					newTestimonial.text
				);
				const updatedTestimonials =
					await getTestimoniList();
				setTestimonials(updatedTestimonials);
				setNewTestimonial({
					name: "",
					text: "",
					rating: 0,
				});
				setShowForm(false);
			} catch (error) {
				console.error(
					"Error submitting testimonial:",
					error
				);
			}
		}
	};

	const StarRating = ({
		rating,
		onStarClick,
	}) => (
		<div className="flex gap-1">
			{[1, 2, 3, 4, 5].map((star) => (
				<button
					key={star}
					onClick={() =>
						onStarClick && onStarClick(star)
					}
					className="focus:outline-none">
					<Star
						className={`w-5 h-5 ${
							star <= rating
								? "fill-blue-500 text-blue-500"
								: "text-gray-300"
						}`}
					/>
				</button>
			))}
		</div>
	);

	return (
		<div className="flex flex-col gap-5 md:gap-7">
			<div className="text-center flex flex-col gap-4">
				<p className="text-sm font-regular text-gray-600 md:text-base">
					Testimoni
				</p>
				<h2 className="text-2xl font-semibold md:text-4xl md:leading-normal">
					Cerita mereka{" "}
					<span className="text-blue-500">
						bermula
					</span>{" "}
					ketika <br /> mencoba jajanan kami 🥰
				</h2>
				<p className="text-gray-600 font-regular text-lg md:text-xl">
					Ayo berikan testimoni Anda
				</p>
			</div>

			<div className="overflow-hidden w-full grid-rows-2 gap-4">
				<motion.div
					className="flex gap-5"
					style={{ minWidth: "max-content" }}
					animate={{ x: ["0%", "-100%"] }}
					transition={{
						repeat: Infinity,
						duration: 100,
						ease: "linear",
					}}
					whileHover={{
						animationPlayState: "paused",
					}} // Pause animation saat hover
				>
					{testimonials
						.concat(testimonials)
						.map((testimonial, index) => (
							<div
								key={index}
								className="bg-color_nuetral_100_light p-6 rounded-lg w-80 flex-shrink-0">
								<h3 className="font-semibold mb-2">
									{testimonial.name}
								</h3>
								<p className="text-gray-600 mb-4">
									{testimonial.pesan}
								</p>
								<StarRating
									rating={testimonial.rating}
								/>
							</div>
						))}
				</motion.div>
			</div>

			<button
				onClick={() => setShowForm(!showForm)}
				className="bg-blue-500 text-white rounded-lg py-3 justify-center flex font-semibold hover:bg-blue-600 transition-colors">
				Berikan testimoni
			</button>

			{showForm && (
				<div className="mt-6 p-6 bg-white rounded-lg">
					<form
						onSubmit={handleSubmit}
						className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-1">
								Nama
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={newTestimonial.name}
								onChange={handleInputChange}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="text"
								className="block text-sm font-medium text-gray-700 mb-1">
								Testimoni
							</label>
							<textarea
								id="text"
								name="text"
								value={newTestimonial.text}
								onChange={handleInputChange}
								rows={4}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required></textarea>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Rating
							</label>
							<StarRating
								rating={newTestimonial.rating}
								onStarClick={handleStarClick}
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
							Kirim Testimoni →
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default Testimonial;
