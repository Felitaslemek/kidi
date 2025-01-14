import React, { useState } from 'react';
import appPreview from '../assets/appPreview.jpg';

const SignupPage = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // buat notifikasi keberhasilan

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Signup attempted with:', name, email, password);

    // bakal muncul notifikasi berhasil
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg overflow-hidden relative">
      {/* tombol buat balik */}
      <div className="absolute top-4 left-4">
        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 text-lg font-semibold"
        >
          <span className="text-3xl font-semibold ">←</span>
        </button>
      </div>

      {/* notifikasi berhasil atau sukses */}
      {isSuccess && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-black text-lg font-semibold px-4 py-2 ">
          Akun berhasil dibuat!
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 md:hidden"
          >
            ✕
          </button>

          <div className="max-w-md mx-auto">
            <h2 className="text-blue-500 text-center text-2xl font-semibold mb-2">Buat Akun</h2>
            <p className="text-gray-400 text-center font-plusjakartasans mb-8 text-sm">
              Bergabung dan dapatkan informasi baru dari kedai kami
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-md font-semibold text-gray-700 mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Agung Wisnu"
                  required
                  className="w-full text-regular px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-md font-semibold text-gray-700 mb-1">
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh123@gmail.com"
                  required
                  className="w-full text-regular px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-md font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="min. 8 karakter"
                    required
                    minLength={8}
                    className="w-full text-regular px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Buat Akun
              </button>
            </form>

            <p className="mt-4 text-center font-semibold text-sm">
              Sudah memiliki akun?{" "}
              <button
                onClick={() => {
                  onClose();
                }}
                className="text-blue-500 font-semibold hover:underline"
              >
                Masuk
              </button>
            </p>

            <p className="mt-8 text-center text-regular font-jakartasans text-xs text-gray-500">
              © 2024 Kedai Manang. All rights reserved.
            </p>
          </div>
        </div>

        {/* tampilaan gambar di kanan */}
        <div className="hidden md:block w-1/2 bg-blue-500 p-8 text-white">
          <div className="h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Jajanan terjangkau
              <br />
              solusi perut lapar
            </h2>
            <div className="relative w-full max-w-xs h-auto rounded-3xl overflow-hidden shadow-xl">
              <img
                src={appPreview}
                alt="App Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
