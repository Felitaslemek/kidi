import React from "react";
import logok from "../assets/logok.png";
import logout from "../assets/logout.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full flex flex-wrap justify-between items-center bg-white shadow p-4 rounded-lg max-w-6xl">
        <h1 className="text-xl font-semibold text-blue-600">Kedai Manang</h1>
        <nav className="flex flex-wrap gap-4 text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Dashboard
          </a>
          <a href="#" className="hover:text-blue-600">
            Testimoni
          </a>
          <a href="#" className="hover:text-blue-600">
            Menu
          </a>
        </nav>
        <button className="text-gray-600 hover:text-blue-600">
          <img src={logout} alt="Logout" className="h-6 w-6" />
        </button>
      </header>

      <main className="w-full max-w-6xl mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* status kedai */}
        <div className="bg-blue-100 shadow p-6 rounded-md flex flex-col items-center">
          <img src={logok} alt="Logok" className="h-16 w-16 mb-4" />
          <h2 className="text-lg font-semibold text-blue-800">Kedai Sudah Buka</h2>
          <p className="text-gray-600 text-sm">17:00 - 22:00 WIB</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Tutup
          </button>
        </div>

        {/* testimoni masuk */}
        <div className="bg-white shadow p-6 rounded-md flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700">Testimoni Masuk</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">10</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Review
          </button>
        </div>

        {/* daftar menu */}
        <div className="bg-white shadow p-6 rounded-md flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700">Daftar Menu</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">4</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Edit
          </button>
        </div>

        {/* Laporan */}
        <div className="bg-white shadow p-6 rounded-md sm:col-span-2 lg:col-span-3">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Laporan</h2>
          <div className="h-40 bg-gray-100 rounded-md"></div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
