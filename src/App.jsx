import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import profileIcon from "./assets/profile.png";
import ProductShowCase from "./pages/home/ProductShowCase";
import Testimonial from "./pages/home/Testimoni";
import End from "./pages/home/lastSection";
import Footer from "./pages/home/Footer";
import SignupPage from "./pages/auth/SignupPage";
import Information from "./pages/home/Information";
import Hero from "./pages/home/Hero";
import ErrorBoundary from "./errors/errorBoundary";

function App() {
	const [
		isSignupPageVisible,
		setIsSignupPageVisible,
	] = useState(false);

	// Fungsi untuk scroll ke section tertentu
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	// Fungsi untuk membuka halaman signup
	const openSignupPage = () => {
		setIsSignupPageVisible(true);
	};

	// Fungsi untuk menutup halaman signup
	const closeSignupPage = () => {
		setIsSignupPageVisible(false);
	};

  return (
    <div className="min-h-screen bg-color_background_light overflow-x-hidden px-6 md:px-14 lg:px-20">
      <Navbar scrollToSection={scrollToSection} />

      <div id="location">
        <Information />
      </div>

      <div className="mt-6">
        <Hero />
      </div>

      <div id="menu" className="mt-6">
        <ProductShowCase />
      </div>

      <div id="testimonials">
        <Testimonial />
      </div>

      <div className="mt-6">
        <End />
      </div>

      <div id="contact" className="mt-6">
        <div className="-mx-6 md:-mx-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Halaman Signup */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;