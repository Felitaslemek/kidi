import { Star } from 'lucide-react';
import logoutIcon from '../assets/logout.png'; 

export default function TestimonialAdmin() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center bg-white shadow p-4 rounded-lg max-w-6xl">
        <h1 className="text-xl font-semibold text-blue-600">Kedai Manang</h1>
        <nav className="flex gap-4 text-gray-600">
          <a href="#" className="hover:text-blue-600">Dashboard</a>
          <a href="#" className="hover:text-blue-600">Testimoni</a>
          <a href="#" className="hover:text-blue-600">Menu</a>
        </nav>
        <button className="text-gray-600 hover:text-blue-600">
          <img src={logoutIcon} alt="Logout" className="w-6 h-6" />
        </button>
      </header>

      <main className="w-full max-w-6xl mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Testimoni Masuk</h2>
          <p className="text-4xl font-bold text-blue-600 mb-4">10</p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Review
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Testimoni Baru</h2>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold font-medium mb-2">Andrian Tara</h3>
            <p className="text-gray-600 text-sm mb-2">
              Corndog enak, topingnya banyak... worth it banget buat dicoba
            </p>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-current text-blue-500"
                />
              ))}
              <Star className="w-5 h-5 text-gray-300" />
            </div>
            <div className="flex gap-4">
              <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50">
                Hapus
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Posting
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Postingan Testimoni</h2>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Andrian Tara</h3>
            <p className="text-gray-600 text-sm mb-2">
              Comdognya enak, topingnya banyak... worth it banget buat dicoba
            </p>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-current text-blue-500"
                />
              ))}
              <Star className="w-5 h-5 text-gray-300" />
            </div>
            <button className="w-full border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50">
              Hapus
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
