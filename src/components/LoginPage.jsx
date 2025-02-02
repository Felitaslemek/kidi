import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, ArrowLeftIcon } from "lucide-react";
import buat from "../assets/buat.png";
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", email, password);


    if (email === "kedaimanang@gmail.com") {
      navigate("admin/Dashboard"); 
    } else {
      navigate("/"); 
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8">
        <button
          onClick={handleBack}
          className="text-gray-500 hover:text-gray-700 mb-6 self-start"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>

        <div className="flex-1 flex flex-col justify-start max-w-md w-full">
          <h1 className="text-[#2563EB] text-3xl md:text-4xl font-semibold mb-4 md:mb-8 text-center">
            Masuk
          </h1>
          <p className="text-gray-500 font-plusjakartasans text-sm md:text-base text-center">
          Bergabung dan dapatkan informasi baru
          </p>
          <p className="text-gray-500 font-plusjakartasans text-sm md:text-base mb-6 md:mb-10 text-center">
          dari kedai kami.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                className="font-semibold block text-sm text-gray-600 mb-1"
              >
                Email Anda
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan  Email"
                className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                className="font-semibold block text-sm text-gray-600 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="min. 8 karakter"
                  className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeIcon className="h-4 w-4" />
                  ) : (
                    <EyeOffIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2563EB] text-white py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
            >
              Masuk
            </button>
          </form>

          <p className="font-semibold mt-6 md:mt-8 text-center text-sm text-black">
            Belum memiliki akun?{" "}
            <a
              href="/signup"
              className="font-semibold text-[#2563EB] hover:underline"
            >
              Buat Akun
            </a>
          </p>

          <p className="mt-8 md:mt-12 text-center text-xs text-gray-400">
            © 2024 Kedai Manang. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden w-0 md:w-1/2 md:flex md:items-center md:justify-center transition-all duration-300 ease-in-out">
        <img
          src={buat || "/placeholder.svg"}
          alt="Jajanan terjangkau"
          className="w-4/5 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LoginPage;
