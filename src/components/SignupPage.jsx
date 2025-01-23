import React, { useState } from "react"
import appPreview from "../assets/appPreview.jpg"

const SignupPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Pendaftaran dicoba dengan:", name, email, password)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      // Redirect ke halaman utama setelah 3 detik
      window.location.href = "/"
    }, 1000)
  }

  const handleBack = () => {
    // Kembali ke halaman sebelumnya atau ke halaman utama
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = "/"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg overflow-hidden relative">
        {/* Tombol Kembali */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 text-lg font-semibold flex items-center space-x-2"
        >
          <span className="text-3xl">←</span>
        </button>

        {/* Notifikasi berhasil buat akun */}
        {isSuccess && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-black text- font-semibold px-4 py-2">
            Akun berhasil dibuat!
          </div>
        )}

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-8 pt-16">
            <div className="max-w-md mx-auto">
              <h2 className="text-blue-500 text-center text-3xl font-semibold mb-2">Buat Akun</h2>
              <p className="text-gray-400 text-center font-plusjakartasans mb-8 text-sm">
                Bergabung dan dapatkan informasi baru dari kedai kami
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full text-regular px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full text-regular px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full text-regular px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
                >
                  Buat Akun
                </button>
              </form>

              <p className="mt-6 text-center font-semibold text-sm">
                Sudah memiliki akun?{" "}
                <a href="/login" className="text-blue-500 font-semibold hover:underline">
                  Masuk
                </a>
              </p>

              <p className="mt-8 text-center text-regular font-jakartasans text-xs text-gray-500">
                © 2024 Kedai Manang. All rights reserved.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex w-1/2 bg-blue-500 p-8 text-white items-center justify-center">
            <div className="max-w-lg">
              <h2 className="text-4xl font-semibold text-center mb-8">
                Jajanan terjangkau
                <br />
                solusi perut lapar
              </h2>
              <div className="relative w-full max-w-md mx-auto h-auto rounded-3xl overflow-hidden shadow-xl">
                <img src={appPreview || "/placeholder.svg"} alt="App Preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage

