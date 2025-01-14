import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import apppreview from './assets/apppreview.jpg';

export default function TestimonialAuth() {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-1/2 p-8 flex flex-col">
        <button className="text-gray-600 self-start mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold text-blue-500 text-center mb-2">Testimoni</h1>
          <p className="text-gray-600 text-regular text-center mb-8">
            Bergabung dan dapatkan informasi baru dari kedai kami
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Agung Wisnu"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="contoh123@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="min. 8 karakter"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Masuk
            </button>
          </form>

          <p className="text-center text-regular font-semibold mt-6 text-gray-600">
            Belum memiliki akun?{" "}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Buat Akun
            </a>
          </p>
        </div>

        <footer className="mt-auto text-center text-regular text-sm text-gray-500">
          © 2024 Kedai Maneng. All rights reserved.
        </footer>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 bg-blue-500 p-8 flex items-center justify-center">
        <div className="text-white max-w-lg">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Jajanan terjangkau solusi perut lapar
          </h2>
          <img
            src={apppreview}
            alt="App Preview"
            className="mx-auto w-[300px] h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  )
};